import * as createPalette from "@mui/material/styles/createPalette"
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }
  interface Palette {
    neutral: PaletteColor
  }
  interface PaletteColor {
    medium: string
    mediumMain: string
  }
  interface TypeBackground {
    alt: string
  }
}
