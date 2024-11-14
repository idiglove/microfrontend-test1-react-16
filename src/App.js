import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world I'm in React 16 app</div>,
  },
]);

function App({ history }) {
  return <RouterProvider router={router} history={history} />;
}

export default App;
