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
// import ViewComments from "./Components/Comments/ViewComments";
import LoadingIndicator from "./Components/Shared/LoadingIndicator";
import { useGlobalContext } from "./Global/GlobalContext";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";
import MainLayout from "./Layouts/MainLayout";
import AddCategories from "./Pages/Categories/AddCategories";
import CategoriesList from "./Pages/Categories/CategoriesList";
import CustomerProfile from "./Pages/Customers/CustomerProfile";
import CustomersList from "./Pages/Customers/CustomersList";
import Home from "./Pages/Home";
import Notification from "./Pages/Notification";
import Settings from "./Pages/Settings";

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
          handle: {
            crumb: { to: "/", title: "home" },
          },
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "categories",
              element: <Outlet />,
              handle: {
                crumb: { to: "/categories", title: "Categories" },
              },
              children: [
                {
                  path: "",
                  element: <CategoriesList />,
                },
                {
                  path: "add",
                  element: <AddCategories />,
                  handle: {
                    crumb: {
                      to: "/categories/add",
                      title: "Add Categories",
                    },
                  },
                },
              ],
            },
            {
              path: "customers",
              element: <Outlet />,
              handle: {
                crumb: { to: "/customers", title: "Customers" },
              },
              children: [
                {
                  path: "",
                  element: <CustomersList />,
                },
                {
                  path: "customer-profile/:userId",
                  element: <CustomerProfile />,
                  // handle: {
                  //   crumb: {
                  //     to: "/customers/customer-profile",
                  //     title: "Customer Profile",
                  //   },
                  // },
                },
              ],
            },
            {
              path: "notification",
              element: <Notification />,
              handle: {
                crumb: { to: "/notification", title: "Notification" },
              },
            },
            {
              path: "settings",
              element: <Settings />,
              handle: {
                crumb: { to: "/settings", title: "Settings" },
              },
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
