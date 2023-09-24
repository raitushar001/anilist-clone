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

const AnimeDetailPage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div style={{ position: 'relative' }}>
      <div css={UpperSectionTitle}>
        <div css={BackgroundImg}></div>
        <img css={CoverImg} src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145064-5fa4ZBbW4dqA.jpg" />
        <button css={AddToList}>Add to list</button>
        <div css={AnimeTitle}>Jujutsu Kaisen 2nd Season</div>
        {isDesktop ? <Description isDesktop={isDesktop} /> : null}
      </div>

      <div css={LowerSection}>
        {!isDesktop ? <Description isDesktop={isDesktop} /> : null}
      </div>
    </div>
  )
}

export default AnimeDetailPage