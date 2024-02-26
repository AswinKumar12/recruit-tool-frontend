import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { withRouter } from "./shared/withRouter";

const Candidates = React.lazy(() => import("./candidates"));

const Router = () => {
  return (
    <Suspense fallback={<CircularProgress  />}>
      <Routes>
        <Route  path="/" render={(props) => <Candidates {...props} />} />
      </Routes>
    </Suspense>
  );
};

export default withRouter(Router);
