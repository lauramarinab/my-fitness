import { Badge, CardTile, Eyebrow, List, PageCard, PageHeading, SectionGrid } from "../../styles/layout";
import { SingleWorkout } from "./SingleWorkout";

export function Allenamento() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Allenamento</Eyebrow>
        <h2>Piano settimanale</h2>
        <p>Tre sedute essenziali con riscaldamento dedicato per ogni allenamento.</p>
        <p>Riscaldamento da fare prima di ogni seduta:</p>
        <p>esegui esercizi di mobilità per la parte interessata, a corpo libero (lavoro di circa 5/6 minuti)</p>
      </PageHeading>

      <SectionGrid>
        <CardTile>
          <Badge>Seduta A - Lower body</Badge>
          <List>
            <SingleWorkout
              title="Natural abductor"
              description="da decubito laterale"
              series="3x10 per gamba"
              mediaType="video"
              mediaUrl="/media/lower/natural-abductor.mov"
            />
            <SingleWorkout
              title="Goblet sumo squat"
              description="con manubri"
              series="3x15"
              mediaType="video"
              mediaUrl="/media/lower/goblet-sumo-squat.mp4"
            />
            <SingleWorkout
              title="Single leg bridge"
              description="con schiena su sedia"
              series="3x10 per gamba"
              mediaType="video"
              mediaUrl="/media/lower/single-leg-bridge.mov"
            />
            <SingleWorkout title="Affondi sul posto" description="con manubri" series="3x10 per gamba" />
            <SingleWorkout
              title="Step up su sedia"
              description="con manubri"
              series="3x10 per gamba"
              mediaType="video"
              mediaUrl="/media/lower/step-up-sedia.mp4"
            />
          </List>
        </CardTile>

        <CardTile>
          <Badge>Seduta B - Upper body</Badge>
          <List>
            <SingleWorkout
              title="Rematore presa neutra"
              description="con manubri"
              series="3x12"
              mediaType="video"
              mediaUrl="/media/upper/rematore-presa-neutra.mov"
            />
            <SingleWorkout
              title="Lat machine"
              description="presa prona con elastico a maniglie"
              series="4x10"
              mediaType="video"
              mediaUrl="/media/upper/lat-machine.mp4"
            />
            <SingleWorkout
              title="Alzate laterali"
              description="seduta con manubri"
              series="3x15"
              mediaType="video"
              mediaUrl="/media/upper/alzate-laterali.mp4"
            />
            <SingleWorkout
              title="Military press"
              description="seduta senza supporto"
              series="3x10"
              mediaType="video"
              mediaUrl="/media/upper/military-press.mp4"
            />
            <SingleWorkout
              title="French press"
              description="distesa a terra con manubri"
              series="3x10"
              mediaType="video"
              mediaUrl="/media/upper/french-press.mp4"
            />
          </List>
        </CardTile>

        <CardTile>
          <Badge>Seduta C - Addome</Badge>
          <List>
            <SingleWorkout
              title="Crunch"
              description="con ginocchia a 90 gradi"
              series="3x15 esecuzione lenta"
              mediaType="video"
              mediaUrl="/media/addome/crunch-ginocchia-flesse.mp4"
            />
            <SingleWorkout
              title="Reverse crunch"
              description="con ginocchia a 90 gradi"
              series="3x10 esecuzione lenta"
              mediaType="video"
              mediaUrl="/media/addome/reverse-crunch-ginocchia-flesse.mov"
            />
            <SingleWorkout title="Plank statico" description="sugli avambracci" series="4x tempo max sostenibile" />
          </List>
        </CardTile>
      </SectionGrid>
    </PageCard>
  );
}
