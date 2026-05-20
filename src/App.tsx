import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
// Pillar deep-dive pages
import GovernancePage from "./pages/GovernancePage";
import EdTechPage from "./pages/EdTechPage";
import TravelPage from "./pages/TravelPage";
import EntertainmentPage from "./pages/EntertainmentPage";
// Company pages
import AboutPage from "./pages/AboutPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CareersPage from "./pages/CareersPage";
// Resources pages
import BharatStackPage from "./pages/BharatStackPage";
import ResearchPage from "./pages/ResearchPage";
import SolutionLibraryPage from "./pages/SolutionLibraryPage";
import BlogPage from "./pages/BlogPage";
// Connect pages
import ContactPage from "./pages/ContactPage";
import PartnerPage from "./pages/PartnerPage";
import InvestorPage from "./pages/InvestorPage";
import PressPage from "./pages/PressPage";
import ShailendraKumarPage from "./pages/ShailendraKumarPage";
// Legal pages
import { PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage } from "./pages/LegalPage";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path={"/"} component={Home} />

      {/* Solutions / Pillars */}
      <Route path={"/solutions/governance"} component={GovernancePage} />
      <Route path={"/solutions/edtech"} component={EdTechPage} />
      <Route path={"/solutions/travel"} component={TravelPage} />
      <Route path={"/solutions/entertainment"} component={EntertainmentPage} />

      {/* Company */}
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/philosophy"} component={PhilosophyPage} />
      <Route path={"/case-studies"} component={CaseStudiesPage} />
      <Route path={"/careers"} component={CareersPage} />

      {/* Resources */}
      <Route path={"/bharat-stack"} component={BharatStackPage} />
      <Route path={"/research"} component={ResearchPage} />
      <Route path={"/solution-library"} component={SolutionLibraryPage} />
      <Route path={"/blog"} component={BlogPage} />

      {/* Connect */}
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/partner"} component={PartnerPage} />
      <Route path={"/investors"} component={InvestorPage} />
      <Route path={"/press"} component={PressPage} />
      <Route path={"/team/shailendra-kumar"} component={ShailendraKumarPage} />
      {/* Legal */}
      <Route path={"/privacy"} component={PrivacyPolicyPage} />
      <Route path={"/terms"} component={TermsOfServicePage} />
      <Route path={"/cookies"} component={CookiePolicyPage} />

      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
