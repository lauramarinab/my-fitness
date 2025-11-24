import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppShell = styled.div({
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "32px 24px 48px",

  "@media (max-width: 720px)": {
    padding: "24px 16px 36px",
  },
});

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  background: var(--panel);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 18px 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BrandMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Eyebrow = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
`;

export const MainNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    justify-content: flex-start;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  font-weight: 600;
  transition: transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(132, 67, 214, 0.16);
    border-color: rgba(132, 67, 214, 0.35);
  }

  &.active,
  &[aria-current="page"] {
    background: rgba(214, 241, 47, 0.22);
    color: var(--tuna-50);
    border-color: rgba(214, 241, 47, 0.6);
    box-shadow: 0 12px 30px rgba(214, 241, 47, 0.25);
  }
`;

export const AppContent = styled.main`
  display: grid;
  gap: 20px;
`;

export const PageCard = styled.section`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
`;

export const PageHeading = styled.div`
  h2 {
    margin: 4px 0 8px;
    font-size: 1.7rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    max-width: 720px;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export const CardTile = styled.div`
  background: linear-gradient(135deg, rgba(132, 67, 214, 0.16), rgba(214, 241, 47, 0.16));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 16px;
  color: var(--tuna-950);

  h3 {
    margin: 6px 0 10px;
    font-size: 1.05rem;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 10px;
  background: var(--tuna-950);
  color: var(--tuna-50);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
  color: var(--tuna-950);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(241, 242, 247, 0.92);
  border: 1px solid rgba(15, 18, 36, 0.08);

  p {
    margin: 0;
  }
`;
