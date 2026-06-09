"""Frontend hover/arrival CSS validation test using Playwright."""
import asyncio
from playwright.async_api import async_playwright

URL = "https://dispute-resolver-io.preview.emergentagent.com/"

CSS_AUDIT_JS = r"""
() => {
    const out = { found: {}, pulseKeyframes: false, btnPrimaryBefore: '', btnOutline: '', ctaArrive: '', btnOutlineHover: '', btnPrimaryHoverBefore: '' };
    const wanted = ['.cta-primary-arrive', '.btn-primary::before', '.btn-primary:hover::before', '.btn-outline', '.btn-outline:hover'];
    wanted.forEach(s => out.found[s] = false);
    for (const sheet of document.styleSheets) {
        let rules;
        try { rules = sheet.cssRules; } catch(e){ continue; }
        if (!rules) continue;
        for (const r of rules) {
            if (r.type === CSSRule.KEYFRAMES_RULE && r.name === 'pulse-glow') out.pulseKeyframes = true;
            if (r.selectorText) {
                const sels = r.selectorText.split(',').map(x => x.trim());
                wanted.forEach(s => {
                    if (sels.includes(s)) {
                        out.found[s] = true;
                        if (s === '.btn-primary::before') out.btnPrimaryBefore = r.cssText.substring(0, 400);
                        if (s === '.btn-primary:hover::before') out.btnPrimaryHoverBefore = r.cssText.substring(0, 400);
                        if (s === '.btn-outline') out.btnOutline = r.cssText.substring(0, 400);
                        if (s === '.btn-outline:hover') out.btnOutlineHover = r.cssText.substring(0, 400);
                        if (s === '.cta-primary-arrive') out.ctaArrive = r.cssText.substring(0, 300);
                    }
                });
            }
        }
    }
    return out;
}
"""

PRIMARY_BEFORE_JS = r"""
() => {
    const el = document.querySelector('[data-testid="hero-cta-file"]');
    const ps = getComputedStyle(el, '::before');
    return { transform: ps.transform, transitionDuration: ps.transitionDuration };
}
"""

OUTLINE_STATE_JS = r"""
() => {
    const el = document.querySelector('[data-testid="hero-cta-book"]');
    const s = getComputedStyle(el);
    return { bgPosition: s.backgroundPosition, color: s.color, text: el.innerText.trim() };
}
"""

ARRIVE_JS = r"""
() => {
    const el = document.querySelector('[data-testid="tiers-cta-triage"]');
    if (!el) return null;
    const s = getComputedStyle(el);
    return {
        animationName: s.animationName,
        animationDuration: s.animationDuration,
        animationIterationCount: s.animationIterationCount,
        animationDelay: s.animationDelay,
        classList: el.className
    };
}
"""

EXTRA_ARRIVE_JS = r"""
() => {
    const ids = ['enterprise-cta-portal', 'retail-cta-file'];
    const r = {};
    ids.forEach(id => {
        const el = document.querySelector('[data-testid="' + id + '"]');
        if (el) {
            const s = getComputedStyle(el);
            r[id] = { animationName: s.animationName, classes: el.className };
        } else r[id] = 'NOT FOUND';
    });
    return r;
}
"""

SANITY_JS = r"""
() => {
    const f = document.querySelector('[data-testid="hero-cta-file"]');
    const b = document.querySelector('[data-testid="hero-cta-book"]');
    return { heroFile: f ? f.innerText.trim() : null, heroBook: b ? b.innerText.trim() : null };
}
"""

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx = await browser.new_context(viewport={"width": 1920, "height": 1080})
        page = await ctx.new_page()
        page.on("console", lambda msg: print(f"CONSOLE [{msg.type}]: {msg.text}"))

        await page.goto(URL, wait_until="networkidle", timeout=30000)
        print("Page loaded")

        # 1. CSS rules
        audit = await page.evaluate(CSS_AUDIT_JS)
        print("\n=== CSS RULE AUDIT ===")
        for k, v in audit["found"].items():
            print(f"  {k}: {'YES' if v else 'NO'}")
        print(f"  @keyframes pulse-glow: {'YES' if audit['pulseKeyframes'] else 'NO'}")
        print(f"  cta-primary-arrive: {audit['ctaArrive']}")
        print(f"  btn-primary::before: {audit['btnPrimaryBefore']}")
        print(f"  btn-primary:hover::before: {audit['btnPrimaryHoverBefore']}")
        print(f"  btn-outline: {audit['btnOutline']}")
        print(f"  btn-outline:hover: {audit['btnOutlineHover']}")

        # 2. btn-primary sheen
        print("\n=== btn-primary hover sheen ===")
        await page.locator('[data-testid="hero-cta-file"]').wait_for(state="visible", timeout=10000)
        pre = await page.evaluate(PRIMARY_BEFORE_JS)
        print(f"  Pre-hover before: {pre}")
        await page.locator('[data-testid="hero-cta-file"]').hover(force=True)
        await page.wait_for_timeout(350)
        mid = await page.evaluate(PRIMARY_BEFORE_JS)
        print(f"  Mid-hover (~350ms): {mid}")
        await page.wait_for_timeout(550)
        end = await page.evaluate(PRIMARY_BEFORE_JS)
        print(f"  End-hover (~900ms): {end}")

        await page.mouse.move(0, 0)
        await page.wait_for_timeout(400)

        # 3. btn-outline wipe
        print("\n=== btn-outline hover wipe ===")
        await page.locator('[data-testid="hero-cta-book"]').wait_for(state="visible", timeout=10000)
        pre_o = await page.evaluate(OUTLINE_STATE_JS)
        print(f"  Pre-hover: {pre_o}")
        await page.locator('[data-testid="hero-cta-book"]').hover(force=True)
        await page.wait_for_timeout(250)
        mid_o = await page.evaluate(OUTLINE_STATE_JS)
        print(f"  Mid-hover (~250ms): {mid_o}")
        await page.screenshot(path="/app/.screenshots/btn_outline_mid.jpg", quality=40, full_page=False, type="jpeg", clip={"x": 350, "y": 580, "width": 700, "height": 100})
        await page.wait_for_timeout(400)
        post_o = await page.evaluate(OUTLINE_STATE_JS)
        print(f"  Post-hover (~650ms): {post_o}")
        await page.screenshot(path="/app/.screenshots/btn_outline_post.jpg", quality=40, full_page=False, type="jpeg", clip={"x": 350, "y": 580, "width": 700, "height": 100})

        await page.mouse.move(0, 0)
        await page.wait_for_timeout(300)

        # 4. cta-primary-arrive on tiers triage
        print("\n=== cta-primary-arrive on tiers-cta-triage ===")
        await page.locator('[data-testid="tiers-cta-triage"]').scroll_into_view_if_needed()
        await page.wait_for_timeout(150)
        arr = await page.evaluate(ARRIVE_JS)
        print(f"  {arr}")

        extra = await page.evaluate(EXTRA_ARRIVE_JS)
        print(f"\n=== Other cta-primary-arrive: {extra}")

        sanity = await page.evaluate(SANITY_JS)
        print(f"\n=== SANITY: {sanity}")

        await browser.close()

asyncio.run(run())
