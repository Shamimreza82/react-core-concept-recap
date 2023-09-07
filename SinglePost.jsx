import './post.css'

export default function SinglePost ({post}) {
    const {id, title, userId, body} = post
return (
    <div className="box" >
        <h5>Title: {title} </h5>
        <h5>UserId: {id} </h5>
        <h5>PostID: {userId, body } </h5>
    </div>
)
}