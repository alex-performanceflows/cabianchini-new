import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Appartamenti from "./pages/Appartamenti";
import Posizione from "./pages/Posizione";
import Contatti from "./pages/Contatti";
import Dintorni from "./pages/Dintorni";
import AppartamentoDetail from "./pages/AppartamentoDetail";
import WhatsAppWidget from "./components/WhatsAppWidget";
import InformativaErogazioni from "./pages/InformativaErogazioni";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CookieBanner from "./components/CookieBanner";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/appartamenti/:id"} component={AppartamentoDetail} />
      <Route path={"/appartamenti"} component={Appartamenti} />
      <Route path={"/posizione"} component={Posizione} />
      <Route path={"/contatti"} component={Contatti} />
      <Route path={"/dintorni"} component={Dintorni} />
      <Route path={"/informativa-erogazioni-pubbliche"} component={InformativaErogazioni} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/cookie-policy"} component={CookiePolicy} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppWidget />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
