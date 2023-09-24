export interface AnimeListType {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: {
      id: number;
      title: {
        english: string;
      }
      coverImage: {
        large: string;
      }
    }[]
  }
}
