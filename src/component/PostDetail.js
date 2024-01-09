import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../utils";

export default function PostDetail() {
  const params = useParams();
  const [postDetails, setPostDetails] = useState();

  useEffect(() => {
    let post = getPostDetails(params.id);
    console.log(post, params.id);
    setPostDetails(post);
  }, []);

  
  return (
    <div>
      <div>{postDetails?.title}</div>
      <div>{postDetails?.body}</div>
    </div>
  );
}
