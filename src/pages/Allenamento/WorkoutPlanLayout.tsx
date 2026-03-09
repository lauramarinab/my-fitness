import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export function WorkoutPlanLayout() {
  return (
    <LayoutShell>
      <PlansNav aria-label="Selezione scheda settimanale">
        <PlanNavItem to="/allenamento/scheda-1">Scheda 1</PlanNavItem>
        <PlanNavItem to="/allenamento/scheda-2">Scheda 2</PlanNavItem>
      </PlansNav>

      <Outlet />
    </LayoutShell>
  );
}

const LayoutShell = styled.div`
  display: grid;
  gap: 16px;
`;

const PlansNav = styled.nav`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PlanNavItem = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--text);
  font-weight: 600;
  transition: transform 0.15s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(214, 241, 47, 0.45);
    background: rgba(214, 241, 47, 0.18);
  }

  &.active,
  &[aria-current="page"] {
    background: rgba(214, 241, 47, 0.22);
    color: var(--tuna-50);
    border-color: rgba(214, 241, 47, 0.6);
  }
`;
