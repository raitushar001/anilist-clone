import { css } from '@emotion/react';

export const Content = css`
  background: rgb(237, 241, 245);
  min-height: 100vh;
`;

export const ContentWrapper = css`
  @media (min-width: 768px) {
    max-width: 1140px;
    margin-inline: auto;
    padding-inline: 30px;
  }
`;
