import {
    createBrowserRouter,
} from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import AcademicProject from "../pages/AcademicProject";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/academic-project",
                element: <AcademicProject></AcademicProject>
            }
        ]
    },
]);