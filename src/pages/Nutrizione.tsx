import {
  Badge,
  CardTile,
  Eyebrow,
  List,
  ListItem,
  PageCard,
  PageHeading,
  SectionGrid,
} from "../styles/layout";

export function Nutrizione() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Nutrizione</Eyebrow>
        <h2>Linee guida essenziali</h2>
        <p>
          Pasti semplici da comporre, con macro chiari e un occhio a idratazione
          e recupero.
        </p>
      </PageHeading>

      <SectionGrid>
        <CardTile>
          <Badge>Piano base</Badge>
          <h3>Schema giornaliero</h3>
          <List>
            <ListItem>
              <strong>Proteine</strong> - 1.6 - 2 g per kg di peso
            </ListItem>
            <ListItem>
              <strong>Carboidrati</strong> - maggiori attorno a allenamenti
            </ListItem>
            <ListItem>
              <strong>Grassi</strong> - 25-30% delle calorie totali
            </ListItem>
            <ListItem>
              <strong>Fibra</strong> - 25-35 g al giorno
            </ListItem>
          </List>
        </CardTile>

        <CardTile>
          <Badge>Pasto tipo</Badge>
          <h3>Composizione veloce</h3>
          <List>
            <ListItem>Fonte proteica: pollo, tofu, uova o pesce</ListItem>
            <ListItem>Carbo complessi: riso, avena, patate o legumi</ListItem>
            <ListItem>Verdure: 2 colori nel piatto ad ogni pasto</ListItem>
            <ListItem>Grassi buoni: olio evo, frutta secca o semi</ListItem>
          </List>
        </CardTile>

        <CardTile>
          <Badge>Routine</Badge>
          <h3>Abitudini di supporto</h3>
          <List>
            <ListItem>Acqua: 30-40 ml per kg, distribuiti nella giornata</ListItem>
            <ListItem>Pre-workout: snack leggero 60-90 minuti prima</ListItem>
            <ListItem>Post-workout: proteine + carbo entro 2 ore</ListItem>
            <ListItem>Settimana: preparazione pasti base la domenica</ListItem>
          </List>
        </CardTile>
      </SectionGrid>
    </PageCard>
  );
}
