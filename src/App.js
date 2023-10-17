import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [likes, setLikes] = useState(null);

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  function hitLike() {
    setLikes(likes + 1);
  }

  const handleList = (name, comment) => {
    if (name && comment) {
      const newComment = {
        name: name,
        text: comment,
        time: new Date().toDateString()
      };
      setCommentList([...commentList, newComment]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className="App">
      <CommentsForm
        name={name}
        onName={handleName}
        onComment={handleComment}
        comment={comment}
        onList={handleList}
      />
      <CommentList commentList={commentList} likes={likes} onLikes={hitLike} />
    </div>
  );
}

function CommentsForm({ name, onName, comment, onComment, onList }) {
  return (
    <>
      <div className="comments">
        <h2>Comments</h2>
        <div className="comments-input">
          <input
            className="input-name"
            value={name}
            onChange={onName}
            placeholder="Nickname"
            required
          />

          <input
            className="input-text"
            value={comment}
            onChange={onComment}
            placeholder="Add a comment.."
            required
          />
          <button className="comment-btn" onClick={onList}>
            Comment
          </button>
        </div>
      </div>
    </>
  );
}
function CommentList({ commentList, likes, onLikes }) {
  return (
    <div>
      {commentList.map((list, i) => (
        <div className="list" key={i}>
          <h4>{list.name}</h4>
          <p>{list.text}</p>
          <span className="list-date">
            {list.time}{" "}
            <span className="likes" onClick={onLikes}>
              {" "}
              ❤️ {likes ? likes + " likes" : ""}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
