import styled from "styled-components";

const Mark = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 90%);
  display: grid;
  place-items: center;
  box-shadow:
    0 10px 25px rgba(132, 67, 214, 0.32),
    0 0 0 1px rgba(255, 255, 255, 0.08);
`;

const Ring = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: var(--tuna-800);
  color: var(--text);
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 0.9rem;
`;

export function Logo() {
  return (
    <Mark aria-label="MyFitnessCoach logo">
      <Ring>MF</Ring>
    </Mark>
  );
}
