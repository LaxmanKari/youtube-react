import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Kari Laxman",
    text: "Quality context, keep upskilling others",
    replies: [
      {
        name: "Akshay",
        text: "Thank you😊",
        replies: [
          {
            name: "Kari Laxman",
            text: "Your reply made my day😁",
            replies: [
              {
                name: "Akshay Saini",
                text: "❤️",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rahul",
    text: "Learned new things, thanks",
    replies: [
      {
        name: "Akshay",
        text: "keep upskilling",
        replies: [],
      },
    ],
  },
  {
    name: "Sanket",
    text: "Great content, inspired from you",
    replies: [
      {
        name: "Akshay",
        text: "Lol, you are already a champ😂",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
