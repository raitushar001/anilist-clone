export interface Media {
  id: number;
  title: {
    english: string;
  }
  coverImage: {
    large: string;
  }
  bannerImage: string;
  description: string;
}

export interface AnimeListType {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: Media[]
  }
}
