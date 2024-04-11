import fetch from 'cross-fetch';

function loadPost(postNumber: any) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load post ${postNumber}`);
            }
            return response.json();
        });
}

async function getPosts(ids: Array<number>) {
    for ( let i = 0; i < ids.length; i++ ) {
        const id: any = ids[i];
        try { 
            const result = await loadPost(id); 
            console.log(result);
        } catch (e) {
            console.error( "post is not found" );
        }
    }
}

const postIds = ["р" as any, 23, 7, 3];
getPosts(postIds)
    .then(
        (response: any) => response.json(),)
    .catch(error => {
        console.error('Failed to load posts:', error.message);
    });