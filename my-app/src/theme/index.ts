import { extendTheme } from "native-base"


export const THEME = extendTheme({
    colors: {
      green: {
        700: 'rgba(37, 89, 45, 0.9)',
        500: 'rgba(37, 89, 45, 0.50)',
        300: 'rgba(134, 166, 65, 0.50)'
      },
      gray: {
        700: '#121214',
        600: '#202024',
        500: '#29292E',
        400: '#323238',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      white: '#FFFFFF',
      red: {
        500: 'rgba(242, 45, 27, 0.90)',
        300: 'rgba(147, 4, 2, 0.80)',
        200: 'rgba(147, 4, 2, 0.40)',

      },
      orange: 'rgba(242, 167, 27, 1)'
    },
    fonts: {
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    sizes: {
      14: 56,
      33: 148
    }
  })