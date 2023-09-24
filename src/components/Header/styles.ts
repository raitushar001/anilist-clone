import { css } from '@emotion/react'

export const headerStyles = css`
  height: 68px;
  display: flex;
  justify-content: center;
  &, * {
    background: #2b2d42;
  }
`;

export const navContainer = css`
  display: flex;
  max-width: 1050px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const iconStyles = css`
  height: 50px;
  widht: 50px;
`;

export const NavBar = css`
  display: flex;
  gap: 36px;
`;

export const NavAnchors = css`
  color: #bcbedc;
  text-decoration: none;
  transition: .15s;
  outline: 0;
`;
