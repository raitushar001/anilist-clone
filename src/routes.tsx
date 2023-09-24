import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AnimeListPage from '@/pages/AnimeListPage'
import AnimeDetailPage from '@/pages/AnimeDetailPage'
import App from './App.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<AnimeListPage title="Trending Now" />} />
    <Route path='trending-anime' element={<AnimeListPage title="Trending Now" />} />
    <Route path='my-list' element={<AnimeListPage title="My List" />} />
    <Route path='anime/:id' element={<AnimeDetailPage />} />
  </Route>
));

export default router;
