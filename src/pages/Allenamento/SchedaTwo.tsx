import { Badge, CardTile, Eyebrow, List, PageCard, PageHeading, SectionGrid } from "../../styles/layout";
import { SingleWorkout } from "./SingleWorkout";

export function SchedaTwo() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Allenamento</Eyebrow>
        <h2>Piano settimanale - Scheda 2</h2>
        <p>Seconda programmazione settimanale, con focus su varianti e volume differente.</p>
      </PageHeading>

      <SectionGrid>
        <CardTile>
          <Badge>Seduta A - Lower body</Badge>
          <List>
            <SingleWorkout title="Squat a corpo libero" description="movimento controllato" series="4x12" />
            <SingleWorkout title="Affondi indietro" description="alternati" series="3x10 per gamba" />
            <SingleWorkout title="Hip thrust" description="con appoggio su panca" series="4x12" />
          </List>
        </CardTile>

        <CardTile>
          <Badge>Seduta B - Upper body</Badge>
          <List>
            <SingleWorkout title="Push up inclinato" description="su supporto" series="4x8" />
            <SingleWorkout title="Rematore unilaterale" description="con manubrio" series="3x12 per lato" />
            <SingleWorkout title="Shoulder press" description="con manubri" series="3x10" />
          </List>
        </CardTile>

        <CardTile>
          <Badge>Seduta C - Core</Badge>
          <List>
            <SingleWorkout title="Dead bug" description="controllo del core" series="3x10 per lato" />
            <SingleWorkout title="Plank laterale" description="con appoggio su avambraccio" series="3x30 secondi per lato" />
            <SingleWorkout title="Mountain climber" description="ritmo regolare" series="3x30 secondi" />
          </List>
        </CardTile>
      </SectionGrid>
    </PageCard>
  );
}
