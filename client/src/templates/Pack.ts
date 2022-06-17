import { Quiz } from "./Quiz";

export interface Pack {
  id: number;
  title: string;
  created: string;
  description: string;
  quizzes: Quiz[];
}
