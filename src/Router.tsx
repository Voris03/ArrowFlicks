import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { NotFound } from './pages/LotNotFound/NotFound';
import { Rated } from './pages/Rated movies/Rated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'rated',
    element: <Rated />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
