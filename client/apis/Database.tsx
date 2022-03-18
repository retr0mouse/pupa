export class Database {
    static async addQuiz(title: string): Promise<any> {
        await fetch("http://localhost:8080/add-database?title=" + title);
        // if (!response.ok) {
        //     throw new Error("Request failed with status code " + response.status);
        // }
        // const result = await response.json() as any;
        // return result;
    }
}