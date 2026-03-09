export type Exercise = {
  title: string;
  description: string;
  series: string;
  mediaType?: "video" | "image";
  mediaUrl?: string;
};

export type SingleExerciseItem = {
  type: "exercise";
  exercise: Exercise;
};

export type SuperSetItem = {
  type: "superSet";
  name: string;
  rounds: string;
  exercises: Exercise[];
};

export type WorkoutItem = SingleExerciseItem | SuperSetItem;

export type WorkoutSession = {
  name: string;
  exercises: WorkoutItem[];
};
