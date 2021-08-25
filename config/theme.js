const breakpoints = ["0px", "600px", "960px", "1280px", "1920px"]

// aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const device = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
}

const theme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
  },
  breakpoints,
  device,
}

export default theme
