import { Badge, CardTile, Eyebrow, List, ListItem, PageCard, PageHeading, SectionGrid } from "../styles/layout";

export function Integrazione() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Integrazione</Eyebrow>
        <h2>Assunzione dei supporti giornalieri</h2>
        <p>Supplementi essenziali distribuiti sui tre pasti principali per coprire le basi.</p>
      </PageHeading>

      <SectionGrid>
        <CardTile>
          <Badge>Colazione</Badge>

          <List>
            <ListItem>
              <p>
                <strong>Collagene:</strong> 2 pastiglie
              </p>
              <p>
                <strong>Multicentrum Donna:</strong> 1 pastiglia
              </p>
              <p>
                <strong>Vitamina C:</strong> 1 pastiglia
              </p>
            </ListItem>
          </List>
        </CardTile>

        <CardTile>
          <Badge>Pranzo</Badge>

          <List>
            <ListItem>
              <p>
                <strong>Omega 3:</strong> 1 pastiglia
              </p>
            </ListItem>
          </List>
        </CardTile>

        <CardTile>
          <Badge>Cena</Badge>

          <List>
            <ListItem>
              <p>
                <strong>Omega 3:</strong> 1 pastiglia
              </p>
            </ListItem>
          </List>
        </CardTile>
      </SectionGrid>
    </PageCard>
  );
}
