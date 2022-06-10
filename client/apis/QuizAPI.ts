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

    static async addPack(name: string, description: string, userId: number) {
        const token = sessionStorage.getItem("token");
        const data = {
            title: name,
            description: description
        };

        const response = await fetch(`http://localhost:8080/api/v1/quiz_pack/add?userId=${userId}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status + response.statusText);
        }
    }

    // static async addQuiz(name: string){
    //     const today = new Date();
    //     const dd = String(today.getDate()).padStart(2, '0');
    //     const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     const yyyy = today.getFullYear();
    //     const date = `${yyyy}-${mm}-${dd}`;
    //     const data = 
    //         {
    //             title: name,
    //             created: date,
    //             userId: 0
    //         };

    //     const response = await fetch("http://localhost:8080/api/v1/quiz", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //           }
    //     });
    //     if (!response.ok) {
    //         const data = await response.json();
    //         throw new Error(data.message);
    //     }
    // }
}

interface QuizPack {
  id: number;
  title: string;
  created: string;
  description: string;
  userId: number;
}
