import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import NewsPage from "./pages/NewsPage";


const router = createBrowserRouter([
    {
        path : "/",
        element: <MoviePage/>
    },
    {
        path : "/news",
        element: <NewsPage/>
    }


])
 
export default router;