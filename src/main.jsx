import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        index: '/About',
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
