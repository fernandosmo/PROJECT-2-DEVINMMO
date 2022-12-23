import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GameList from '../pages/home-list/homelist';
import Details from '../pages/page-details/details';
import News from '../pages/page-news/news';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="PROJECT-2-DEVINMMO/" element={<GameList />} />
      <Route path="PROJECT-2-DEVINMMO/:gameId" element={<Details />} />
      <Route path="PROJECT-2-DEVINMMO/news" element={<News />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
