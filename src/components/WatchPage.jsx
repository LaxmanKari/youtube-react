import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="p-5 px-10 w-full flex">
        <div>
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title="Youtube video player"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        </div>
         <div className="w-full">
          <LiveChat/>
         </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
