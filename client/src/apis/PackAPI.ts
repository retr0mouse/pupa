export class PackAPI {
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

    static async addQuizToPack(packId: number, quizId: number, typeId: number) {
        const token = sessionStorage.getItem("token");
        const data = {
            quizId: quizId,
            packId: packId,
            quizTypeId: typeId
        };
        const response = await fetch(`http://localhost:8080/api/v1/pack_to_quiz/add`, {
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
}
