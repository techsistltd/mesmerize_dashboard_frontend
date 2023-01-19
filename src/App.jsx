import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import PasswordReset from "./Components/Authentication/PasswordReset";
import PasswordResetConfirmation from "./Components/Authentication/PasswordResetConfirmation";
import SignIn from "./Components/Authentication/SignIn";
import UpdatePassword from "./Components/Authentication/UpdatePassword";
import LoadingIndicator from "./Components/Shared/LoadingIndicator";
import { useGlobalContext } from "./Global/GlobalContext";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";

function App() {
  const { currentUser, userLoading } = useGlobalContext();

  // define routes
  const routes = createBrowserRouter([
    {
      path: "/",
      element: userLoading ? <LoadingIndicator height="100vh" /> : <Outlet />,
      children: [
        {
          path: "",
          element: Boolean(currentUser?.id) ? (
            <MainLayout />
          ) : (
            <Navigate to="/auth" />
          ),
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
        {
          path: "auth",
          element: !Boolean(currentUser?.id) ? (
            <AuthenticationLayout />
          ) : (
            <Navigate to="/" />
          ),
          children: [
            {
              path: "",
              element: <SignIn />,
            },
            {
              path: "password-reset",
              element: <PasswordReset />,
            },
            {
              path: "reset-confirmation",
              element: <PasswordResetConfirmation />,
            },
            {
              path: "update-password",
              element: <UpdatePassword />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
