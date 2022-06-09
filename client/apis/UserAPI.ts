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
        const response = await fetch("http://localhost:8080/api/v1/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status + response.statusText);
        }
        console.log(await response.json());
    }

    static async LoginUser(username: string, password: string) {
        const data = {
            username: username,
            password: password
        };

        const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        });

        return response;
    }
}

