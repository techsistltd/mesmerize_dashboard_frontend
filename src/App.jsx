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
import ViewComments from "./Components/Comments/ViewComments";
import LoadingIndicator from "./Components/Shared/LoadingIndicator";
import { useGlobalContext } from "./Global/GlobalContext";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";
import MainLayout from "./Layouts/MainLayout";
import Epaper from "./Pages/Epaper";
import Home from "./Pages/Home";
import AddNews from "./Pages/News/AddNews";
import AddVideos from "./Pages/News/AddVideos";
import Comments from "./Pages/News/Comments";
import ViewNews from "./Pages/News/ViewNews";
import ViewVideos from "./Pages/News/ViewVideos";
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
              path: "news",
              element: <Outlet />,
              handle: {
                crumb: { to: "/news", title: "News" },
              },
              children: [
                {
                  path: "",
                  element: <ViewNews />,
                },
                {
                  path: "add",
                  element: <AddNews />,
                  handle: {
                    crumb: { to: "/news/add", title: "Add News" },
                  },
                },
                {
                  path: "videos",
                  element: <ViewVideos />,
                  handle: {
                    crumb: { to: "/news/videos", title: "Videos" },
                  },
                },
                {
                  path: "add-videos",
                  element: <AddVideos />,
                  handle: {
                    crumb: { to: "/news/add-videos", title: "Add Videos" },
                  },
                },
                {
                  path: "comments",
                  element: <Comments />,
                  handle: {
                    crumb: { to: "/news/comments", title: "Comments" },
                  },
                },
                //view comments
                {
                  path: "view-comments",
                  element: <ViewComments />,
                  handle: {
                    crumb: {
                      to: "/news/view-comments",
                      title: "View Comments",
                    },
                  },
                },
              ],
            },
            {
              path: "e-paper",
              element: <Epaper />,
              handle: {
                crumb: { to: "/e-paper", title: "E-Paper" },
              },
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
