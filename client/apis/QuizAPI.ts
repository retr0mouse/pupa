export class QuizAPI {
    static async getQuizzes(): Promise<Quiz[]>{
        const response = await fetch("http://localhost:8080/api/v1/quiz", {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const result = await response.json() as Quiz[];
        return result;
    }

    static async addQuiz(name: string){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const date = `${yyyy}-${mm}-${dd}`;
        const data = 
            {
                title: name,
                created: date,
                userId: 0
            };
        
        console.log(data);
        const response = await fetch("http://localhost:8080/api/v1/quiz", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
    }
}

interface Quiz {
  id: number;
  title: string;
  created: string;
  userId: number;
}