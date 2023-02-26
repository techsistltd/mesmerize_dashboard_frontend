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
import CategoriesList from "./Pages/Categories/CategoriesList";
import CustomerProfile from "./Pages/Customers/CustomerProfile";
import CustomersList from "./Pages/Customers/CustomersList";
import Home from "./Pages/Home";
import Notification from "./Pages/Notification";
import AddPackage from "./Pages/Products/AddPackage";
import AddProducts from "./Pages/Products/AddProducts";
import ManagePackage from "./Pages/Products/ManagePackage";
import ManageProducts from "./Pages/Products/ManageProducts";
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
              element: <CategoriesList />,
              handle: {
                crumb: { to: "/categories", title: "Categories" },
              },
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
                  handle: {
                    crumb: {
                      title: "Customer Profile",
                    },
                  },
                },
              ],
            },
            {
              path: "products",
              element: <Outlet />,
              handle: {
                crumb: { to: "/products", title: "products" },
              },
              children: [
                {
                  path: "",
                  element: <ManageProducts />,
                },
                {
                  path: "add-products",
                  element: <AddProducts />,
                  handle: {
                    crumb: {
                      to: "/products/add-products",
                      title: "Add Products",
                    },
                  },
                },
                {
                  path: "manage-package",
                  element: <ManagePackage />,
                  handle: {
                    crumb: {
                      to: "/products/manage-package",
                      title: "Manage Package",
                    },
                  },
                },
                {
                  path: "add-package",
                  element: <AddPackage />,
                  handle: {
                    crumb: {
                      to: "/products/add-package",
                      title: "Add Package",
                    },
                  },
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
