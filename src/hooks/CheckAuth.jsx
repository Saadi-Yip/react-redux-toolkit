import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
export const useAuthenticatedRoute = (redirectPath) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    navigate(redirectPath); // Redirect to the specified path
  }
};
