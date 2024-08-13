import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return <div>errorPage{err.statusText}</div>;
}
