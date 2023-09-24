import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import TrendingAnime from '@/pages/TrendingAnime'
import AnimeDetailPage from '@/pages/AnimeDetailPage'
import App from './App.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<TrendingAnime />} />
    <Route path='trending-anime' element={<TrendingAnime />} />
    <Route path='my-list' element={<>My List</>} />
    <Route path='anime/:id' element={<AnimeDetailPage />} />
  </Route>
));

export default router;
