import { Link } from 'react-router-dom';
import { headerStyles, navContainer, iconStyles, NavBar, NavAnchors } from './styles';

const HeaderDesktop = () => {
  return (
    <header css={headerStyles}>
      <div css={navContainer}>
        <Link to="/"><img css={iconStyles} src="https://anilist.co/img/icons/icon.svg" /></Link>

        <nav css={NavBar}>
          <Link css={NavAnchors} to="/trending-anime">Trending Anime</Link>
          <Link css={NavAnchors} to="/my-list">My List</Link>
        </nav>
      </div>
    </header>
  )
}

export default HeaderDesktop;