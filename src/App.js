import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
