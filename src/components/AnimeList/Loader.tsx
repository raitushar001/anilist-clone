
import { CardLoaderImg, CardTitleLoader, ContentContainer } from './styles';

const Loader = () => {
  const items = Array.from({ length: 10 })
  return (
    <div css={ContentContainer}>
      {items.map((_, index) => (
        <div key={index}>
          <div css={CardLoaderImg}></div>
          <div css={CardTitleLoader}></div>
        </div>
      ))}
    </div>
  )
}

export default Loader