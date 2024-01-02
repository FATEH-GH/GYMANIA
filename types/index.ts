export interface ExerciseListProps {
  BodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
}

export interface exercisesProps {
  BodyPart: string;
}

export interface SimilarExercisesProps {
  target: string;
}
