import { ResponseError } from "../templates/ApiError";
import { Pack } from "../templates/Pack";
import { Quiz } from "../templates/Quiz";

export class PackAPI {
    static async createPack(name: string, description: string, userId: number) {
        const token = sessionStorage.getItem("token");
        const data = {
            title: name,
            description: description
        };

        const response = await fetch(`https://pupa-cards-backend.herokuapp.com/api/v1/quiz_pack/add?userId=${userId}`, {
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
        const response = await fetch(`https://pupa-cards-backend.herokuapp.com/api/v1/pack_to_quiz/add`, {
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

    static async createPackWithQuizzes(pack: Pack, packquizzesList: Quiz[], userId: number) {
        const token = sessionStorage.getItem("token");
        const data = {
            quizPack: pack,
            translateQuizList: packquizzesList
        };
        const response = await fetch(`https://pupa-cards-backend.herokuapp.com/api/v1/quiz_pack/add?userId=${userId}`, {
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

    static async getPacksByUserId(userId: number) {
        const token = sessionStorage.getItem("token");
        const response = await fetch(`https://pupa-cards-backend.herokuapp.com/api/v1/quiz_pack/getByUser?userId=${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (!response.ok) {
            const data = await response.json() as ResponseError;
            throw new Error(data.message);
        }
        const result = await response.json() as Pack[];
        return result;
    }

    static async getPackById(packId: number) {
        const token = sessionStorage.getItem("token");
        const response = await fetch(`https://pupa-cards-backend.herokuapp.com/api/v1/quiz_pack/get?id=${packId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (!response.ok) {
            const data = await response.json() as ResponseError;
            throw new Error(data.message);
        }
        const result = await response.json() as Pack;
        return result;
    }
}
