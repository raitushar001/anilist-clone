import { DescriptionPara, SectionTitle, DesktopDiscription } from "./styles";

interface Props {
  isDesktop: boolean;
}
const Description = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return <p css={DesktopDiscription}>
      The second season of <i>Jujutsu Kaisen</i>.<br /><br />The past comes to light when second-year students Satoru Gojou and Suguru Getou are tasked with escorting young Riko Amanai to Master Tengen. But when a non-sorcerer user tries to kill them, their mission to protect the Star Plasma Vessel threatens to turn them into bitter enemies and cement their destinies—one as the world's strongest sorcerer, and the other its most twisted curse user!<br /><br />(Source: Crunchyroll)
    </p>
  }
  return (
    <>
      <div css={SectionTitle}>Description</div>
      <p css={DescriptionPara}>
        The second season of <i>Jujutsu Kaisen</i>.<br /><br />The past comes to light when second-year students Satoru Gojou and Suguru Getou are tasked with escorting young Riko Amanai to Master Tengen. But when a non-sorcerer user tries to kill them, their mission to protect the Star Plasma Vessel threatens to turn them into bitter enemies and cement their destinies—one as the world's strongest sorcerer, and the other its most twisted curse user!<br /><br />(Source: Crunchyroll)
      </p>
    </>

  )
}

export default Description