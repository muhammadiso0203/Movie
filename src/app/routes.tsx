import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MovieDetail from "../pages/movie-detail";
const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const Movie = lazy(() => import("../pages/movie"));
const TextDetail = lazy(() => import("../pages/movie-detail/pages/text"));
const ImageDetail = lazy(() => import("../pages/movie-detail/pages/image"));
const Person = lazy(() => import("../pages/movie-detail/pages/person"));

const AppRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "movie", element: <Movie /> },
        { path: "person/:id", element: <Person /> },
        {
          path: "movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <TextDetail /> },
            { path: "imageDetail", element: <ImageDetail /> },
          ],
        },
      ],
    },
  ]);
};

export default memo(AppRouters);
