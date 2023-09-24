import { css } from '@emotion/react';

export const UpperSectionTitle = css`
  background: #ffffff;
  @media (min-width: 768px) {
    height: 510px;
  }
`;

export const LowerSection = css`
  padding-inline: 20px;
  margin-top: 50px;
  padding-bottom: 25px;
`;

export const BackgroundImg = (imgUrl: string) => css`
  background-image: url(${imgUrl});
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 210px;
  @media (min-width: 768px) {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

export const CoverImg = css`
  position: absolute;
  top: 110px;
  left: 20px;
  width: 100px;

  @media (min-width: 768px) {
    width: 215px;
    height: 300px;
  }

`;

export const AddToList = css`
  position: absolute;
  top: 222px;
  left: 150px;
  width: 200px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding: 6px;
  min-width: 100px;
  border: 0px;
  background: rgb(61, 180, 242);
  color: #ffffff;

  @media (min-width: 768px) {
    top: 430px;
    left: 20px;
    width: 215px;
  }
`;

export const AnimeTitle = css`
  margin-top: 70px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  color: rgb(92, 114, 138);
  padding-block: 20px;
  @media (min-width: 768px) {
    position: absolute;
    left: 260px;
    margin-top: 50px;
  }

`;

export const SectionTitle = css`
  font-size: 14px;
`;

export const DescriptionPara = css`
  padding: 20px;
  margin-block: 10px;
  background: #ffffff;
  border-radius: 4px;
  font-size: 14px;
`;

export const DesktopDiscription = css`
  position: absolute;
  left: 280px;
  top: 320px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
`;
