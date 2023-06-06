import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./pages/Root";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/Home";
import UserPage from "./pages/User";
import AboutMePage from "./pages/AboutMe";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "user/:userId", element: <UserPage /> },
        { path: "about-me", element: <AboutMePage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
