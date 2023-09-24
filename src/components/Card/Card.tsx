import { Link } from 'react-router-dom';
import { AnimeImg, AnimeTitle, Container } from './styles';

interface Props {
  imageUrl: string;
  title: string;
  id: number;
}

const Card = (props: Props) => {
  const { title, imageUrl, id } = props;
  const url = `/anime/${id}`
  return (
    <div css={Container}>
      <Link to={url}>
        <img css={AnimeImg} src={imageUrl} />
      </Link>
      <Link css={AnimeTitle} to={url}>{title}</Link>
    </div>
  )
}

export default Card