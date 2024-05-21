import superagent from "superagent";

const singlUser = {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

const usersList = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        },
        {
            "id": 3,
            "name": "true red",
            "year": 2002,
            "color": "#BF1932",
            "pantone_value": "19-1664"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "year": 2003,
            "color": "#7BC4C4",
            "pantone_value": "14-4811"
        },
        {
            "id": 5,
            "name": "tigerlily",
            "year": 2004,
            "color": "#E2583E",
            "pantone_value": "17-1456"
        },
        {
            "id": 6,
            "name": "blue turquoise",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}



const singlUser1 = {
    "data": {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}


const createUserPost = {
    "name": "Hanna",
    "job": "QA",
    "id": "279",
    "createdAt": "2024-05-04T19:52:06.997Z"
}

const updateUserData = {
    "name": "morpheus",
    "job": "zion resident"
}


const errorMessage = {
    "error": "Missing password"
}


async function request(url: string) {
    try {
        const response = await superagent.get(url);
        return response as any;
    } catch(error: any) {
        // console.log(e.response.statusCode)
        // throw new Error('Error');
        return error.response;
    }
} 

describe("api tests", function() {
    it("1 - get user data", async () => {
        const result1 = await request('https://reqres.in/api/users/2');
        expect(result1.statusCode).toEqual(200);
        expect(result1.body).toEqual(singlUser);
    }); 


    it("2 - get user data - not found", async () => {
        const result1 = await request('https://reqres.in/api/users/23');
        expect(result1.statusCode).toEqual(404);

        // expect(async () => await request('https://reqres.in/api/users/23')).rejects.toThrow(Error)
    });

    it("3 - get list of users", async () => {
        const result1 = await request('https://reqres.in/api/unknown');
        expect(result1.statusCode).toEqual(200);
        expect(result1.body).toEqual(usersList);
    }); 

    it("4 - get singl resource", async () => {
        const result3 = await request('https://reqres.in/api/unknown/2');
        expect(result3.statusCode).toEqual(200);
        expect(result3.body).toEqual(singlUser1);
    });

    it("5 - get singl resource - not found", async () => {
        const result4 = await request('https://reqres.in/api/unknown/23');
        expect(result4.statusCode).toEqual(404);
    });

    it("6 - post create user", async () => {
        let response5: any;
        try {
            response5 = await superagent
            .post('https://reqres.in/api/users')
            .send({name:'Hanna', job: 'QA'});
        }
        catch(err:any) {
            console.log("Error in request");
        }
        expect(response5.statusCode).toEqual(201);
        expect(response5.body.name).toEqual(createUserPost.name);
        expect(response5.body.job).toEqual(createUserPost.job);
    });

    it("7 - post -  registration", async () => {
        let response6: any;
        try {
            response6 = await superagent
            .post('https://reqres.in/api/register')
            .send({
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            });
        }
        catch(err:any) {
            console.log("Error in request");
        }
        expect(response6.statusCode).toEqual(200);
        expect(response6.body.id).toEqual(expect.any(Number));
        expect(response6.body.token).toEqual(expect.any(String));
    });

    it("8 - put - update", async () => {
        let response7: any;
        const payload = {
            "name": "morpheus",
            "job": "zion resident"
        };

        try {
            response7 = await superagent
            .put('https://reqres.in/api/users/2')
            .send(payload);
        }
        catch(err:any) {
            console.log("Error in request");
        }
        expect(response7.statusCode).toEqual(200);
        expect(response7.body.name).toEqual(payload.name);
        expect(response7.body.job).toEqual(payload.job);
        expect(response7.body.updatedAt).toEqual(expect.any(String));

    });

    it("9 - delete user", async () => {
        let response8: any;
        try {
            response8 = await superagent
            .delete('https://reqres.in/api/users/2')
        }
        catch(err:any) {
            console.log("Error in request");
        }
        expect(response8.statusCode).toEqual(204);

    });

    it("10 - post -  login unsuccessful", async () => {
        let response6: any;
        try {
            response6 = await superagent
            .post('https://reqres.in/api/login')
            .send({
                "email": "peter@klaven"
            });
        }
        catch (err: any) {
            response6 = err.response; 
        }
        expect(response6.statusCode).toEqual(400);
        expect(response6.body).toEqual(errorMessage);
    });




});