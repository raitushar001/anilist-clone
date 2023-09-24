import { DescriptionPara, SectionTitle, DesktopDiscription } from "./styles";

interface Props {
  isDesktop: boolean;
  text: string;
}
const Description = ({ isDesktop, text }: Props) => {
  if (isDesktop) {
    return <p css={DesktopDiscription} dangerouslySetInnerHTML={{ __html: text }} />
  }
  return (
    <>
      <div css={SectionTitle}>Description</div>
      <p css={DescriptionPara} dangerouslySetInnerHTML={{ __html: text }} />
    </>

  )
}

export default Description