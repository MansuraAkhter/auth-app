import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProtectedRoute({ children }) {
  let authenticated = useSelector((state) => {
    console.log(state);
    return state.authenticated;
  });
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
