import AnimeList, { Loader } from '@/components/AnimeList'
import { useTrendingAnimeList } from '@/queries/get-anime-list';
import { Title, Container } from './style'
import { useEffect, useMemo, useRef } from 'react';
import normalizer from './normaliser'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TrendingAnime = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const { data, isLoading, fetchNextPage } = useTrendingAnimeList();
  useEffect(() => {
    if (isVisible && !isLoading) fetchNextPage();
  }, [isVisible])

  const cardList = useMemo(() => {
    return normalizer(data)
  }, [data])

  return (
    <div css={Container}>
      <h3 css={Title}>{title}</h3>
      {isLoading ? <Loader /> : <AnimeList cardList={cardList} />}
      <div style={{ height: '2px' }} ref={ref} />
    </div>
  )
}

export default TrendingAnime
