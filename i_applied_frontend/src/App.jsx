import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

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
  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
