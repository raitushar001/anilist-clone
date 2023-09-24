import useMediaQuery from '@/hooks/useMediaQuery';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile'

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  console.log('matches :>> ', isDesktop);

  return (
    isDesktop ? <HeaderDesktop /> : <HeaderMobile />
  );
}

export default Header