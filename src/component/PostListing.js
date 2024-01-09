import React from "react";
import { post_list } from "../utils";
import { Link } from "react-router-dom";

export default function PostListing() {
  return (
    <>
      <div>PostListing Listing</div>
      {post_list.map((post) => (
        <>
          <p>{post.title}</p>
          <Link to={`/${post.id}/post`}>Details</Link>
        </>
      ))}
    </>
  );
}
