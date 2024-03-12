import styled from "styled-components";

const buttonDefault = true;

export const ButtonContainer = styled.button`
  background: ${buttonDefault ? "green" : "red"};
  background: ${({ theme }) => theme.complementary};
  color: white;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
