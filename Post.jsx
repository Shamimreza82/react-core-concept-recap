import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

export default function Post () {
    const [post, setPost] = useState ([])
    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then (data => setPost(data))
    }, [])
    return (
        <div>
            <h3>Post: </h3>
            {
                post.map (post => <SinglePost post ={post}></SinglePost>)
            }
        </div>
    )

}