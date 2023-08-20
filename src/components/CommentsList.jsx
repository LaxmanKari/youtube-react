import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            {comment.replies.length > 0 && (
              <div  className="pl-5 ml-5 border border-l-black">
                <CommentsList comments={comment.replies} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
