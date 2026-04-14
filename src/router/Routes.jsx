import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/:id",
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: (
          <h2>
            <Stats></Stats>
          </h2>
        ),
      },
    ],
    errorElement: <h2>This page is not found</h2>,
  },
]);
