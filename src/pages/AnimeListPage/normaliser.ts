import type { InfiniteData } from 'react-query';
import { AnimeListType, Media } from '@/queries/types';

export default function normalizer(data?: InfiniteData<AnimeListType['Page']>) {
  const animeList = data?.pages.reduce<Media[]>((acc, curr) => {
    return acc.concat(curr.media);
  }, []);
  return animeList?.map(item => ({
    title: item.title.english,
    imageUrl: item.coverImage.large,
    id: item.id
  })) ?? [];
}
