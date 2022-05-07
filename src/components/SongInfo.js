
function SongInfo({title, views, createdAt, upvotes, downvotes, comments}){
  return (
    <>
      <h2>{title}</h2>
      <div className="info">
        <span>{views} views | premierd {createdAt}</span>
        <span className="btn">&#x1F44E; { downvotes }</span>
        <span className="btn">&#x1F44D; { upvotes }</span>
      </div>
      <hr />
      <button>Hide Comments</button>
    </>
  )
}

export default SongInfo;