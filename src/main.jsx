import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			}
		]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
