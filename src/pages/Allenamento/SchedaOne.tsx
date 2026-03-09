import { Badge, CardTile, Eyebrow, List, PageCard, PageHeading, SectionGrid } from "../../styles/layout";
import styled from "styled-components";
import { workoutPlanOne } from "../../data/workoutPlanOne";
import { SingleWorkout } from "./SingleWorkout";

export function SchedaOne() {
  return (
    <PageCard>
      <PageHeading>
        <Eyebrow>Allenamento</Eyebrow>
        <h2>Piano settimanale - Scheda 1</h2>
        <p>Riscaldamento da fare prima di ogni seduta:</p>
        <p>esegui esercizi di mobilita per la parte interessata, a corpo libero (lavoro di circa 5/6 minuti)</p>
      </PageHeading>

      <SectionGrid>
        {workoutPlanOne.map((session) => (
          <CardTile key={session.name}>
            <Badge>{session.name}</Badge>
            <List>
              {session.exercises.map((item, itemIndex) => {
                if (item.type === "exercise") {
                  return (
                    <SingleWorkout
                      key={`${item.exercise.title}-${itemIndex}`}
                      title={item.exercise.title}
                      description={item.exercise.description}
                      series={item.exercise.series}
                      mediaType={item.exercise.mediaType}
                      mediaUrl={item.exercise.mediaUrl}
                    />
                  );
                }

                return (
                  <SuperSetBlock key={`${item.name}-${itemIndex}`}>
                    <SuperSetTitle>Super serie: {item.name}</SuperSetTitle>
                    <SuperSetRounds>{item.rounds}</SuperSetRounds>
                    <SuperSetExercises>
                      {item.exercises.map((exercise, exerciseIndex) => (
                        <SingleWorkout
                          key={`${exercise.title}-${exerciseIndex}`}
                          title={exercise.title}
                          description={exercise.description}
                          series={exercise.series}
                          mediaType={exercise.mediaType}
                          mediaUrl={exercise.mediaUrl}
                        />
                      ))}
                    </SuperSetExercises>
                  </SuperSetBlock>
                );
              })}
            </List>
          </CardTile>
        ))}
      </SectionGrid>
    </PageCard>
  );
}

const SuperSetBlock = styled.li`
  display: grid;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  border: 1px dashed rgba(15, 18, 36, 0.2);
  background: rgba(15, 18, 36, 0.06);
`;

const SuperSetTitle = styled.strong`
  font-size: 0.95rem;
`;

const SuperSetRounds = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: rgba(15, 18, 36, 0.75);
`;

const SuperSetExercises = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
`;
