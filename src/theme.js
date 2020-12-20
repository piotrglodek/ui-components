import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

const theme = {
  color: {
    primary: '#40407a',
    darkPrimary: '#2c2c54',
    secondary: '#ffb142',
    darkSecondary: '#eea031',
    white: '#ffffff',
    gray: '#e0e0e0',
    darkGray: '#c0c0c0',
    black: '#4b4b4b',
    darkBlack: '#3d3d3d',
  },
  fontSize: {
    button: '1.4rem',
    xs: '1.2rem',
  },
  fontWeight: {
    normal: '400',
    semiBold: '600',
  },
  radius: '.4rem',
};

const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
    }

    html{
        font-size:62.5%;
    }

    body{
        margin:0;
        font-size:1.6rem;
        font-family: 'Inter', sans-serif;
    }
`;

export const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
