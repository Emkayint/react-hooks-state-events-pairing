function Comments({user, commentTo, id}){
  return (
    <div key = {id}>
      <h3>{user}</h3>
      <p>{commentTo}</p>
    </div>
  )
}

export default Comments;