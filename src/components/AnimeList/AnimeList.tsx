import Card from '@/components/Card';
import { ContentContainer } from './styles';

interface Props {
  cardList: {
    title: string;
    imageUrl: string;
    id: number;
  }[]
}

const AnimeList = ({ cardList }: Props) => {
  return (
    <div css={ContentContainer}>
      {cardList.map(cardItem => (
        <Card key={cardItem.id} {...cardItem} />
      ))}
    </div>
  )
}

export default AnimeList