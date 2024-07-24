import superagent from "superagent";

export const singlUser = {
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

export const usersList = {
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



export const singlUser1 = {
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


export const createUserPost = {
    "name": "Hanna",
    "job": "QA",
    "id": "279",
    "createdAt": "2024-05-04T19:52:06.997Z"
}

export const updateUserData = {
    "name": "morpheus",
    "job": "zion resident"
}


export const errorMessage = {
    "error": "Missing password"
}


export async function getRequest(url: string) {
    try {
        const response = await superagent.get(url);
        return response as any;
    } catch(error: any) {
        // console.log(e.response.statusCode)
        // throw new Error('Error');
        return error.response;
    }
}

export async function postRequest(url: string, data: any) {
    try {
        const response = await superagent.post(url).send(data);
        return response;
    } catch (error:any) {
        return error.response;
    }
}

export async function putRequest(url: string, data: any) {
    try {
        const response = await superagent.put(url).send(data);
        return response;
    } catch (error: any) {
        return error.response;
    }
}

export async function deleteRequest(url: string) {
    try {
        const response = await superagent.delete(url);
        return response;
    } catch (error: any) {
        return error.response;
    }
}
