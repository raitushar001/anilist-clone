import { css, keyframes } from '@emotion/react';

export const ContentContainer = css`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(105px,1fr));
  grid-gap: 25px 20px;
  justify-content: space-between;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 185px);
  }
`;

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const CardLoaderImg = css`
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1s ${shine} linear infinite;
  background-position-x: 150px;
`;

export const CardTitleLoader = css`
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-position-x: 150px;
  animation: 1s ${shine} linear infinite;
  border-radius: 8px;
  height: 21px;
  margin-top: 10px;

`;
