import styled from '@emotion/styled';

export const SignButton = styled.button`
  border-radius: 0.25rem;
  padding: 1rem;
  position: relative;
`;

export const SignButton_Check = styled.svg`
  background: radial-gradient(
      circle,
      white 50%,
      currentColor 50%,
      currentColor 70%,
      transparent 70%
    )
    no-repeat white;
  border-radius: 50vmax;
  color: forestgreen;
  height: auto;
  left: 50%;
  opacity: 0.85;
  padding: 1rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max(70%, 15vw);

  button:active & {
    display: none;
  }
`;
