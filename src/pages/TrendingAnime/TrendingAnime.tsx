import Card from '@/components/Card'
import { useTrendingAnimeList } from '@/queries/get-anime-list';
import { ContentContainer, Title, Container } from './style'
import { useMemo } from 'react';

const TrendingAnime = () => {
  const { data, isLoading, isError } = useTrendingAnimeList();

  const cardList = useMemo(() => {
    return data?.media.map(item => ({
      title: item.title.english,
      imageUrl: item.coverImage.large,
      id: item.id
    })) ?? [];
  }, [data?.media])

  console.log('data :>> ', cardList);
  if (isLoading) return;

  return (
    <div css={Container}>
      <h3 css={Title}>Trending Now</h3>
      <div css={ContentContainer}>
        {cardList.map(cardItem => (
          <Card {...cardItem} />  
        ))}
      </div>
    </div>
  )
}

export default TrendingAnime
