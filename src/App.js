import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HeadingComponent } from "./components/HeadingComponents";
import Shimmer from "./components/Shimmer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import useOnlineStatus from "./utils/useOnlineStatus";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
import { Provider } from "react-redux";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> Looks like you are Offline!!</h1>;
  return (
    <Provider store={appStore}>
      <div className="App">
        <HeadingComponent />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
