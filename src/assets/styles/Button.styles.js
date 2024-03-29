import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme, selected, isHighlighted, hasDarkFont }) => {
    if (isHighlighted) return theme.colors.orange;
    if (selected) return theme.colors.darkGrey;
    if (hasDarkFont) return theme.colors.veryLightBlue;
    return theme.colors.lightGrey;
  }};
  padding: 12px;
  border-radius: 26px;
  font-size: ${({ isBig }) => (isBig ? "26px" : "20px")};
  color: ${({ theme, hasDarkFont }) =>
    hasDarkFont ? theme.colors.darkGrey : theme.colors.white};
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme, selected, isHighlighted }) => {
      if (isHighlighted) return theme.colors.lightOrange;
      if (!selected) return theme.colors.blue;
    }};
    color: ${({ theme, hasDarkFont }) => {
      if (hasDarkFont) return theme.colors.white;
    }};
  }
`;
