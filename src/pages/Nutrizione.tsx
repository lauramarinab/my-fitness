import { Eyebrow, PageCard, PageHeading } from "../styles/layout";
import styled from "styled-components";

type Meal = {
  label: string;
  items: string[];
  note?: string;
  free?: boolean;
};

type DayPlan = {
  day: string;
  meals: Meal[];
};

const breakfastSnack = "Spuntino: 120g di frutta o 100g di banana.";

const weeklyPlan: DayPlan[] = [
  {
    day: "Lunedì",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["200ml di latte scremato/avena", "15g burro di frutta secca", "45g pane segale tostato"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["80g pasta", "100g sgombro al naturale", "Verdure", "1 cucchiaio di olio"],
      },
      {
        label: "Merenda",
        items: ["20g grana padano", "2 wasa"],
      },
      {
        label: "Cena",
        items: ["150g pesce al forno", "Verdure", "180g patate", "1 cucchiaio di olio"],
      },
    ],
  },
  {
    day: "Martedì",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["Porridge con 40g di avena", "2 cucchiaini di burro di arachidi", "Frutti di bosco + cannella"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["70g pasta di legumi", "Zucchine", "1 cucchiaio di olio"],
      },
      {
        label: "Merenda",
        items: ["100g kefir", "50g mirtilli", "1 cucchiaino di semi di lino"],
      },
      {
        label: "Cena",
        items: ["Frittata con 1 uovo e 150ml albume", "Verdure", "1 cucchiaio di olio", "40g "],
      },
    ],
  },
  {
    day: "Mercoledì",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["50g pane segale tostato", "Ricotta light 50g", "3 noci"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["60g cous cous", "50g tonno al naturale", "15g parmigiano", "Verdure", "1 cucchiaio di olio"],
      },
      {
        label: "Merenda",
        items: ["Budino proteico"],
      },
      {
        label: "Cena",
        items: [
          "1 burger vegetale / 150g mozzarella",
          "Verdure",
          "1 cucchiaio di olio",
          "25g wasa/gallette o 40g pane di farro",
        ],
      },
    ],
  },
  {
    day: "Giovedì",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["150g yogurt greco bianco", "30g di cereali integrali", "10g di cioccolato fondente 90%"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["40g orzo/farro", "200g legumi sgocciolati (ceci)", "Verdure", "1 cucchiaio di olio"],
      },
      {
        label: "Merenda",
        items: ["100g kefir", "50g mirtilli", "1 cucchiaino di semi di lino"],
      },
      {
        label: "Cena",
        items: ["Zuppa di verdure", "150g patate novelle", "120g lenticchie/ceci/200g piselli", "1 cucchiaio di olio"],
      },
    ],
  },
  {
    day: "Venerdì",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["50g pane segale tostato", "Ricotta light 50g", "3 noci"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["60g riso", "70g feta", "Funghi", "Zucca", "1 cucchiaio di olio"],
      },
      {
        label: "Merenda",
        items: ["Budino proteico"],
      },
      {
        label: "Cena",
        items: [
          "Passato di verdure",
          "100g formaggio magro (ricotta, mozzarella, philadelphia)",
          "50g pane / 30g wasa",
          "1 cucchiaio di olio",
        ],
      },
    ],
  },
  {
    day: "Sabato",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["Porridge con 40g di avena", "2 cucchiaini di burro di arachidi", "Frutti di bosco + cannella"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["200g pesce", "Verdure", "1 cucchiaio di olio", "2 wasa"],
        note: "Se fai pasto libero a cena: passato di verdure + 100g sgombro.",
      },
      {
        label: "Merenda",
        items: ["100g di banana / una mela / una pera", "15g di mandorle"],
      },
      {
        label: "Cena",
        items: ["Pasto libero (massimo uno alla settimana)"],
        free: true,
      },
    ],
  },
  {
    day: "Domenica",
    meals: [
      {
        label: "Colazione + spuntino",
        items: ["200ml di latte scremato/avena", "15g burro di frutta secca", "45g pane segale tostato"],
        note: breakfastSnack,
      },
      {
        label: "Pranzo",
        items: ["60g fregola o cous cous al pomodoro", "150g seppioline", "Verdure", "1 cucchiaio di olio"],
        note: "In alternativa qui il pasto libero (max 1 a settimana).",
        free: true,
      },
      {
        label: "Merenda",
        items: ["20g grana padano", "2 wasa"],
      },
      {
        label: "Cena",
        items: ["Frittata con 1 uovo e 150ml albume", "Verdure", "1 cucchiaio di olio", "40g "],
        note: "Se pranzo libero: passato di verdure + 100g sgombro.",
      },
    ],
  },
];

export function Nutrizione() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Nutrizione</Eyebrow>
        <h2>Piano settimanale</h2>
      </PageHeading>

      <PlanIntro>
        <p>
          Ogni blocco mostra cosa mangiare e quanto. I pasti liberi sono già posizionati nel weekend (scegline uno solo)
          con l&apos;indicazione di cosa fare nel pasto adiacente.
        </p>
      </PlanIntro>

      <PlanGrid>
        {weeklyPlan.map((day) => (
          <DayCard key={day.day}>
            <DayHeader>
              <DayName>{day.day}</DayName>
            </DayHeader>
            <Meals>
              {day.meals.map((meal) => (
                <MealBlock key={meal.label} data-free={meal.free ? "true" : "false"}>
                  <MealLabel>{meal.label}</MealLabel>
                  <MealItems>
                    {meal.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </MealItems>
                  {meal.note ? <MealNote>{meal.note}</MealNote> : null}
                  {meal.free ? <FreeTag>Pasto libero</FreeTag> : null}
                </MealBlock>
              ))}
            </Meals>
          </DayCard>
        ))}
      </PlanGrid>

      <Notes>
        <NoteTitle>Regole pratiche</NoteTitle>
        <NoteList>
          <li>
            *Pane: preferisci lievitazione naturale o farro. Puoi sostituire con 25g wasa/gallette di riso/azzimo.
          </li>
          <li>
            Verdure: 150-250g a pasto. Raddoppia con radicchio rosso, rucola, cicoria, rapa, carciofi per depurare.
          </li>
          <li>
            Extra se hai ancora fame: 15g di cioccolato fondente / 1 galletta di riso con 10g di burro di arachidi / 1
            yogurt di soia con 10g di cioccolato fondente.
          </li>
          <li>
            Insalatone pranzo (swap veloce): insalata + 150g pollo + 40g avocado / insalata + 130g salmone / verdure +
            100g sgombro al naturale / insalata con 2 scatolette di tonno.
          </li>
        </NoteList>
      </Notes>
    </PageCard>
  );
}

const PlanIntro = styled.div`
  p {
    margin: 6px 0 0;
    color: var(--muted);
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const DayCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.25);
`;

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const DayName = styled.h4`
  margin: 0;
  font-size: 1.05rem;
`;

const Meals = styled.div`
  display: grid;
  gap: 10px;
`;

const MealBlock = styled.div`
  background: rgba(241, 242, 247, 0.98);
  border: 1px solid rgba(15, 18, 36, 0.08);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--tuna-950);

  &[data-free="true"] {
    border-color: rgba(132, 67, 214, 0.35);
    box-shadow: 0 10px 24px rgba(132, 67, 214, 0.2);
  }
`;

const MealLabel = styled.span`
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
`;

const MealItems = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 2px;
`;

const MealNote = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #4b516a;
  background: rgba(132, 67, 214, 0.08);
  border-radius: 8px;
  padding: 6px 8px;
`;

const FreeTag = styled.span`
  align-self: flex-start;
  padding: 4px 8px;
  border-radius: 10px;
  background: rgba(214, 241, 47, 0.22);
  color: #1b2404;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.01em;
`;

const Notes = styled.div`
  margin: 18px 0 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 14px;
`;

const NoteTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.05rem;
`;

const NoteList = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  display: grid;
  gap: 8px;
`;
