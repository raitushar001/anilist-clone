import { useQuery } from 'react-query';
import graphQLClient from '@/gqlClient';
import { gql } from 'graphql-request';
import { AnimeListType } from './types';

const TrendingAnimeList = gql`
  query TrendingAnimeList($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, sort: $sort) {
        id
        title {
          english
        }
        type
        coverImage {
          large
        }
      }
    }
  }
`

export const useTrendingAnimeList = () => {
  return useQuery('trending-anime-list', async () => {
    const { Page } = await graphQLClient.request<AnimeListType>(TrendingAnimeList, { sort: ['POPULARITY_DESC', 'TRENDING_DESC'] });
    return Page;
  });
}
