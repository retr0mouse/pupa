export class QuizAPI {
    static async getQuizzes(): Promise<string>{
        const response = await fetch("http://localhost:8080/api/v1/quiz");
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const result = await response.json() as string;
        return result;
    }
}