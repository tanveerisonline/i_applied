import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  DashBoardLayout,
  //Landing,
  Register,
  Login,
  Landing,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <DashBoardLayout /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
