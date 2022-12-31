export const GlobalReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    content: '';
    display: inline-block;
  }

  * {
    border: none;
  }

  @viewport {
    width: device-width;
  }

  :root {
    color-scheme: light dark;
  }

  html {
    -webkit-text-size-adjust: none; /* for iOS Safari */
    text-size-adjust: none; /* for other mobile browsers */

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    margin: 0;
    min-height: 100%;
  }

  img {
    display: block;
    max-width: 100%;
  }

  menu,
  ol,
  ul {
    list-style-position: inside;
  }

  a {
    text-underline-position: under;
  }

  label,
  button,
  select,
  summary,
  [type='radio'],
  [type='submit'],
  [type='checkbox'] {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  button {
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    margin: 0;
    overflow: visible;
    padding: 0;
    width: auto;
  }
`;
