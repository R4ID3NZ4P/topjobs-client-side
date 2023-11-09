import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import AuthProvider from "./providers/AuthProvider";
import AllJobs from "./pages/AllJobs/AllJobs";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import AddAJob from "./pages/AddAJob/AddAJob";
import MyJobs from "./pages/MyJobs/MyJobs";
import Blogs from "./pages/Blogs/Blogs"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import PrivateRoute from "./routes/PrivateRoute";
import axios from "axios";
import JobDetails from "./pages/JobDetails/JobDetails";
import UpdateJob from "./pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => axios.get("http://localhost:5000/jobs")
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/all",
				element: <AllJobs></AllJobs>,
				loader: () => axios.get("http://localhost:5000/jobs")
			},
			{
				path: "/applied",
				element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
			},
			{
				path: "/add",
				element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
			},
			{
				path: "/myjobs",
				element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>
			},
			{
				path: "/job/:id",
				element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
				loader: ({params}) => axios.get(`http://localhost:5000/job/${params.id}`)
			},
			{
				path: "/myjobs/:id",
				element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
				loader: ({params}) => axios.get(`http://localhost:5000/job/${params.id}`)
			}
		]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
		<AuthProvider>
			<div className="fontInter">
				<RouterProvider router={router} />
			</div>	
		</AuthProvider>
	</React.StrictMode>
);
