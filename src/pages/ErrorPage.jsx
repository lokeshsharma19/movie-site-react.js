import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const errorMsg = useRouteError();
  return (
    <div>
      <p>{errorMsg.error.message}</p>
    </div>
  );
}

export default ErrorPage;
