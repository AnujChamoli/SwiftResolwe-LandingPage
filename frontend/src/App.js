import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Placeholder from "@/pages/Placeholder";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/file-a-dispute"
            element={
              <Placeholder
                title="File a Statement of Claim"
                kicker="SECURE INTAKE PORTAL"
                subtitle="The structured ODR intake is being finalized. Leave your details and our case manager will configure your dispute file."
                testIdPrefix="file-dispute"
              />
            }
          />
          <Route
            path="/login"
            element={
              <Placeholder
                title="Log in to SwiftResolwe"
                kicker="SECURE PORTAL ACCESS"
                subtitle="Enterprise dashboards, retail case lockers, and neutral consoles are loading. Sign-in will be enabled at production launch."
                testIdPrefix="login"
              />
            }
          />
          <Route
            path="/triage"
            element={
              <Placeholder
                title="2-Minute Triage Assessment"
                kicker="INTAKE DIAGNOSTIC ENGINE"
                subtitle="Tell us about your claim and we will recommend Negotiate, Mediate, or Arbitrate. The diagnostic engine ships with the public launch."
                testIdPrefix="triage"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
