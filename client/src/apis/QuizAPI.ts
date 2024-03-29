import { ResponseError } from "../templates/ApiError";
import { Pack } from "../templates/Pack";

export class QuizAPI {
    static async getQuizzes(): Promise<Pack[]>{
        const response = await fetch("http://localhost:8080/api/v1/quiz_pack", {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status + response.statusText);
        }
        const result = await response.json() as Pack[];
        return result;
    }

    static async addQuizzes(initWords: string[], transWords: string[], packId: number){
        if (initWords.length != transWords.length) {
            throw new Error();
        }
        const token = sessionStorage.getItem("token");
        for (let i = 0; i < initWords.length; i++) {
            const data = {
                initialWord: initWords[i],
                translatedWord: transWords[i]
            }
            const response = await fetch(`http://localhost:8080/api/v1/quiz_pack/addQuiz?packId=${packId}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            if (!response.ok) {
                const data = await response.json() as ResponseError;
                throw new Error(data.message);
            }
        }
    }
}

