import crossFetch from 'cross-fetch';

function fetch(url: string): any {
   return  crossFetch(url)
    .then((response: any) => response.json())
    .then((response) => {
        if (!response?.id) {
            throw new Error();
        }

        return response;
    });
}


/**************************** */

function getPostById(id: number) {
    const promise = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    return promise;   
}

// getPostById(3).then((json) => console.log(json));

async function execute(ids: Array<number>) {
    for ( let i = 0; i < ids.length; i++ ) {
        const id = ids[i];
        try { 
            const result = await getPostById(id);
            console.log(result);
        } catch (e) {
            console.error( "post is not found" );
        }
    }
    // 
    // const result = await getPostById(id);
    // console.log({ result })
}

execute(['hjh' as any, 15, 20]);