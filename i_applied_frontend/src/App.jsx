import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  DashBoardLayout,
  //Landing,
  Register,
  Login,
  //Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>
          <HomeLayout />
        </h1>
      </div>
    ),
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <DashBoardLayout /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
