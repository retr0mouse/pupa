import { ResponseError } from "../templates/ApiError";
import { User } from "../templates/User";

export class UserAPI {
    static async registerUser(username: string, email: string, firstname: string, lastname: string, password: string) { 
        const data = {
            username: username, 
            email: email,
            firstname: firstname,
            lastname: lastname,
            role: ["user", "admin", "mod"],
            password: password
        };
        const response = await fetch("https://pupa-cards-backend.herokuapp.com/api/v1/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status + response.statusText);
        }
    }

    static async LoginUser(username: string, password: string) {
        const data = {
            username: username,
            password: password
        };

        const response = await fetch("https://pupa-cards-backend.herokuapp.com/api/v1/auth/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        });

        return response;
    }

    static async GetUser() {
        const token = sessionStorage.getItem("token");
        if (token == null) {
            throw new Error("You need to sign in first");
        }
        const response = await fetch("https://pupa-cards-backend.herokuapp.com/api/v1/user_table/getByJwt", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (!response.ok) {
            const error = await response.json() as ResponseError;
            throw new Error(error.message);
        }
        const player = await response.json() as User;
        return player;
    }
}

