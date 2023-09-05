import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error 404</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
