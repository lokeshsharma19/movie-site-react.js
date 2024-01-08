import { apiKey } from "./constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home, ErrorPage, SingleMovieDetail } from "./pages/index";
import { loader as movieLoader } from "./pages/Home";
import { loader as singleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={movieLoader} />
      <Route
        path="/detail/:imdbId"
        element={<SingleMovieDetail />}
        loader={singleMovieLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
