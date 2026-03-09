import { Navigate, Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { WorkoutPlanLayout } from "./pages/Allenamento/WorkoutPlanLayout";
import { SchedaOne } from "./pages/Allenamento/SchedaOne";
import { SchedaTwo } from "./pages/Allenamento/SchedaTwo";
import { Integrazione } from "./pages/Integrazione";
import { Nutrizione } from "./pages/Nutrizione";
import {
  AppContainer,
  AppContent,
  AppShell,
  BrandMeta,
  BrandTitle,
  Eyebrow,
  Header,
  LogoWrap,
  MainNav,
  NavItem,
} from "./styles/layout";

function App() {
  const greeting = new Date().getHours() >= 16 ? "Buonasera" : "Buongiorno";

  return (
    <AppShell>
      <AppContainer>
        <Header>
          <LogoWrap>
            <Logo />
            <BrandMeta>
              <Eyebrow>{greeting}!</Eyebrow>
              <BrandTitle>Le tue abitudini, in equilibrio</BrandTitle>
            </BrandMeta>
          </LogoWrap>

          <MainNav>
            <NavItem to="/allenamento">Allenamento</NavItem>
            <NavItem to="/nutrizione">Nutrizione</NavItem>
            <NavItem to="/integrazione">Integrazione</NavItem>
          </MainNav>
        </Header>

        <AppContent>
          <Routes>
            <Route path="/" element={<Navigate to="/allenamento/scheda-1" replace />} />

            <Route path="/allenamento" element={<WorkoutPlanLayout />}>
              <Route index element={<Navigate to="scheda-1" replace />} />
              <Route path="scheda-1" element={<SchedaOne />} />
              <Route path="scheda-2" element={<SchedaTwo />} />
            </Route>

            <Route path="/nutrizione" element={<Nutrizione />} />
            <Route path="/integrazione" element={<Integrazione />} />
            <Route path="*" element={<Navigate to="/allenamento/scheda-1" replace />} />
          </Routes>
        </AppContent>
      </AppContainer>
    </AppShell>
  );
}

export default App;
