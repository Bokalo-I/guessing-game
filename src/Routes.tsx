import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/game',
      element: <GamePage />,
    },
    {
      path: '/results',
      element: <ResultsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
