import fetch from 'cross-fetch';

async function getPost(postId: any) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`Can not load post ${postId}`);
        }
        return response.json();
}

async function getPosts(ids: Array<number>) {
    for ( let i = 0; i < ids.length; i++ ) {
        const id = ids[i];
        try { 
            const result = await getPost(id);
            console.log(result);
        } catch (e) {
            console.error( "post is not found" );
        }
    }
}

getPosts(['hjh' as any, 15, 20]);
