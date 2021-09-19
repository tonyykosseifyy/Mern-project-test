import React from "react";

import { useLocation , Link } from "react-router-dom";

const NotFound  = () => {
  let location = useLocation() ;
  console.log(location)
  return (
    <div>
      Page Not Found
      404
      the url to <strong>{location.pathname}</strong> is invalid
      <Link to=''>Return Home </Link>
    </div>
  );
};

export default NotFound ;
