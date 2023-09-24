import Description from './Description';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  UpperSectionTitle,
  BackgroundImg,
  CoverImg,
  AddToList,
  AnimeTitle,
  LowerSection,
} from './styles';
import useAnimeDetails from '@/queries/get-anime-details';
import { useParams } from 'react-router-dom';

const AnimeDetailPage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const { id } = useParams();
  const { data, isLoading, isError } = useAnimeDetails({ id });

  console.log('data :>> ', data);
  const [anime] = data?.media ?? [];

  return (
    <div style={{ position: 'relative' }}>
      <div css={UpperSectionTitle}>
        <div css={BackgroundImg(anime?.bannerImage)}></div>
        <img css={CoverImg} src={anime?.coverImage?.large} />
        <button css={AddToList}>Add to list</button>
        <div css={AnimeTitle}>{anime?.title.english}</div>
        {isDesktop ? <Description isDesktop={isDesktop} text={anime?.description} /> : null}
      </div>

      <div css={LowerSection}>
        {!isDesktop ? <Description text={anime?.description} isDesktop={isDesktop} /> : null}
      </div>
    </div>
  )
}

export default AnimeDetailPage