import { Route, Navigate, Routes } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Routes>
      <Route element={props.isLoading ? <Preloader /> : props.loggedIn ? <Component {...props} /> : <Navigate to="/" />}/>
    </Routes>
  );
};

export default ProtectedRoute;
