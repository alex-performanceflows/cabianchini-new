import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
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

function RootRedirect() {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate("/it", { replace: true });
  }, [navigate]);
  return null;
}

function Router() {
  return (
    <Switch>
      {/* Root redirect */}
      <Route path={"/"} component={RootRedirect} />

      {/* Italian routes */}
      <Route path={"/it"} component={Home} />
      <Route path={"/it/appartamenti/:id"} component={AppartamentoDetail} />
      <Route path={"/it/appartamenti"} component={Appartamenti} />
      <Route path={"/it/posizione"} component={Posizione} />
      <Route path={"/it/contatti"} component={Contatti} />
      <Route path={"/it/dintorni"} component={Dintorni} />
      <Route path={"/it/informativa-erogazioni-pubbliche"} component={InformativaErogazioni} />
      <Route path={"/it/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/it/cookie-policy"} component={CookiePolicy} />

      {/* English routes */}
      <Route path={"/en"} component={Home} />
      <Route path={"/en/apartments/:id"} component={AppartamentoDetail} />
      <Route path={"/en/apartments"} component={Appartamenti} />
      <Route path={"/en/location"} component={Posizione} />
      <Route path={"/en/contact"} component={Contatti} />
      <Route path={"/en/surroundings"} component={Dintorni} />
      <Route path={"/en/public-grants"} component={InformativaErogazioni} />
      <Route path={"/en/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/en/cookie-policy"} component={CookiePolicy} />

      {/* Legacy routes (backward compatibility) */}
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
