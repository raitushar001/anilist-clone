import AnimeList, { Loader } from '@/components/AnimeList'
import { useTrendingAnimeList } from '@/queries/get-anime-list';
import { Title, Container } from './style'
import { useMemo } from 'react';

const TrendingAnime = ({ title }: { title: string }) => {
  const { data, isLoading, isError } = useTrendingAnimeList();

  const cardList = useMemo(() => {
    return data?.media.map(item => ({
      title: item.title.english,
      imageUrl: item.coverImage.large,
      id: item.id
    })) ?? [];
  }, [data?.media])

  return (
    <div css={Container}>
      <h3 css={Title}>{title}</h3>
      {isLoading ? <Loader /> : <AnimeList cardList={cardList} />}
    </div>
  )
}

export default TrendingAnime
