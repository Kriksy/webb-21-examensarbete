
export async function approvePost(postId: string): Promise<Response> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/admin/posts/${postId}`, {
        method: 'POST',
        body: JSON.stringify({postId: postId, approved: true}),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("user") as string,
        }
    }).then((res)=> res.json())
}