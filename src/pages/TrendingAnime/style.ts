import { css } from '@emotion/react';

export const ContentContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 185px)',
  justifyContent: 'space-between'
})

export const Title = css`
  color: rgb(100, 115, 128);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .48px;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const Container = css`
  padding-top: 20px;
`;
