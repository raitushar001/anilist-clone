import { useQuery } from 'react-query';
import graphQLClient from '@/gqlClient';
import { gql } from 'graphql-request';
import { AnimeListType } from '../types';

const TrendingAnimeList = gql`
  query TrendingAnimeList($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          english
        }
        coverImage {
          large
        }
        bannerImage
        description (asHtml: true)
      }
    }
  }
`
interface Deps {
  id?: string;
}

export const useAnimeDetails = (deps?: Deps) => {
  const { id } = deps ?? {};
  const _id = id ? +id : null
  return useQuery('anime-detail', async () => {
    const { Page } = await graphQLClient.request<AnimeListType>(TrendingAnimeList, { id: _id });
    return Page;
  });
}
