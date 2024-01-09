import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./component/PostDetail";
import PostListing from "./component/PostListing";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PostListing />} />
      <Route path="/:id/post" element={<PostDetail />} />
    </Routes>
  );
}
