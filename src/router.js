import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import NewsPage from "./pages/NewsPage";
import Detail from "./pages/Detail";


const router = createBrowserRouter([
    {
        path : "/",
        element: <MoviePage/>
    },
    {
        path : "/news",
        element: <NewsPage/>
    },
    {
        path : "/:movieId",
        element: <Detail/>

    }


])
 
export default router;