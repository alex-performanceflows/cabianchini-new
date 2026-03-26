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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/appartamenti/:id"} component={AppartamentoDetail} />
      <Route path={"/appartamenti"} component={Appartamenti} />
      <Route path={"/posizione"} component={Posizione} />
      <Route path={"/contatti"} component={Contatti} />
      <Route path={"/dintorni"} component={Dintorni} />
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
