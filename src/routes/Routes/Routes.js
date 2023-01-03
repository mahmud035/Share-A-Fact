import { createBrowserRouter } from 'react-router-dom';
import CategoryFactCard from '../../components/Home/CategoryFactCard/CategoryFactCard';
import Home from '../../components/Home/Home/Home';
import Main from '../../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/category/:categoryName',
        element: <CategoryFactCard></CategoryFactCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.categoryName}`),
      },
    ],
  },
]);

export default router;
