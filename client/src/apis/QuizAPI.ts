import { PackCreating } from "../pages/PackCreating";
import { PackAPI } from "./PackAPI";

export class QuizAPI {
    static async getQuizzes(): Promise<QuizPack[]>{
        const response = await fetch("http://localhost:8080/api/v1/quiz_pack", {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status + response.statusText);
        }
        const result = await response.json() as QuizPack[];
        return result;
    }

    static async addQuizzes(initWords: string[], transWords: string[]){
        if (initWords.length != transWords.length) {
            throw new Error();
        }
        const token = sessionStorage.getItem("token");
        for (let i = 0; i < initWords.length; i++) {
            const data = {
                initialWord: initWords[i],
                translatedWord: transWords[i]
            }
            const response = await fetch("http://localhost:8080/api/v1/tr_quiz/add", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        }
    }
}

interface QuizPack {
  id: number;
  title: string;
  created: string;
  description: string;
  userId: number;
}
