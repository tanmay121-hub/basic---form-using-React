import { createBrowserRouter, Outlet } from "react-router-dom";
import Todo from "../Todo";
import Login from "../Login";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
