import superagent from "superagent";
import {getRequest, singlUser, usersList, singlUser1, createUserPost, errorMessage, postRequest, putRequest, deleteRequest} from './consts';


describe("api tests", function() {
    it("1 - get user data", async () => {
        const result = await getRequest('https://reqres.in/api/users/2');
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(singlUser);
    }); 


    it("2 - get user data - not found", async () => {
        const result = await getRequest('https://reqres.in/api/users/23');
        expect(result.statusCode).toEqual(404);

        // expect(async () => await request('https://reqres.in/api/users/23')).rejects.toThrow(Error)
    });

    it("3 - get list of users", async () => {
        const result = await getRequest('https://reqres.in/api/unknown');
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(usersList);
    }); 

    it("4 - get singl resource", async () => {
        const result = await getRequest('https://reqres.in/api/unknown/2');
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(singlUser1);
    });

    it("5 - get singl resource - not found", async () => {
        const result = await getRequest('https://reqres.in/api/unknown/23');
        expect(result.statusCode).toEqual(404);
    });

    it("6 - post create user", async () => {
        const createUserPost = { name: 'Hanna', job: 'QA' };
    
        const response = await postRequest('https://reqres.in/api/users', { name: 'Hanna', job: 'QA' });
        
        expect(response.statusCode).toEqual(201);
        expect(response.body.name).toEqual(createUserPost.name);
        expect(response.body.job).toEqual(createUserPost.job);
    });

    it("7 - post -  registration", async () => {
            const registrationData = {
                email: "eve.holt@reqres.in",
                password: "pistol"
            };
        
            const response = await postRequest('https://reqres.in/api/register', registrationData);
            
        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toEqual(expect.any(Number));
        expect(response.body.token).toEqual(expect.any(String));
    });

    it("8 - put - update", async () => {
        const payload = {
            name: "morpheus",
            job: "zion resident"
        };
    
        const response = await putRequest('https://reqres.in/api/users/2', payload);
    
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual(payload.name);
        expect(response.body.job).toEqual(payload.job);
        expect(response.body.updatedAt).toEqual(expect.any(String));
    });

    it("9 - delete user", async () => {
        const response = await deleteRequest('https://reqres.in/api/users/2');

        expect(response.statusCode).toEqual(204);

    });

    it("10 - post -  login unsuccessful", async () => {

        const logindata = {
            email: "peter@klaven"
        };
    
        const response = await postRequest('https://reqres.in/api/login', logindata);

        // let response6: any;
        // try {
        //     response6 = await superagent
        //     .post('https://reqres.in/api/login')
        //     .send({
        //         "email": "peter@klaven"
        //     });
        // }
        // catch (err: any) {
        //     response6 = err.response; 
        // }
        expect(response.statusCode).toEqual(400);
        expect(response.body).toEqual(errorMessage);
    });

});