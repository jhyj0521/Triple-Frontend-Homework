import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: string
      greyOpacity700: string
      greyOpacity800: string
    }
  }
}
