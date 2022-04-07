// @ts-nocheck
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1152,
      xl: 1440
    },
    unit: "px"
  },
  direction: "ltr",
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        p: {
          lineHeight: 1.75
        },
        a: {
          textDecoration: "none",
          color: "#362ad4"
        },
        button: {
          fontFamily:
            "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          fontSize: 14
        },
        ".MuiRating-sizeSmall": {
          fontSize: "20px"
        },
        "#nprogress .bar": {
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px !important",
          borderRadius: "0px 300px 300px 0px !important",
          zIndex: 1031,
          overflow: "hidden"
        }
      }
    },

    MuiPagination: {
      defaultProps: {
        variant: "outlined",
        color: "primary"
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            background: "#d92020"
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined"
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 0
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,

          minWidth: 0,
          minHeight: 0
        }
      },
      defaultProps: {
        color: "inherit"
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#483afe"
        }
      },
      defaultProps: {
        color: "#483afe"
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          top: "97px",
          color: "#fff",
          zIndex: 1
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px"
        }
      }
    }
  },
  spacing: 8,
  palette: {
    mode: "light",
    primary: {
      "50": "#9d9aff",
      "100": "#8985ff",
      "200": "#7671ff",
      "300": "#625dff",
      "400": "#4f48ff",
      "600": "#352fe6",
      "700": "#2f2acc",
      "800": "#2924b3",
      "900": "#231f99",
      main: "#483afe",
      contrastText: "#FFFFFF",
      light: "#d8d6ff",
      dark: "#2924b3"
    },
    secondary: {
      "50": "#9affc8",
      "100": "#85ffbd",
      "200": "#71ffb2",
      "300": "#5dffa7",
      "400": "#48ff9c",
      "500": "#34FF91",
      "600": "#2acc74",
      "700": "#24b366",
      "800": "#1f9957",
      "900": "#1a8049",
      main: "#34FF91",
      dark: "#2acc74",
      light: "#e6f5ff",
      contrastText: "#000"
    },
    error: {
      "100": "#FFEAEA",
      "200": "#FFCBCB",
      "300": "#FFA9A9",
      "400": "#FF6D6D",
      "500": "#FF5353",
      "600": "#FF4C4C",
      "700": "#FF4242",
      "800": "#FF3939",
      "900": "#FF2929",
      main: "#E94560",
      light: "#FFA9A9",
      dark: "#FF4242",
      contrastText: "#fff"
    },
    warning: {
      main: "#FFCD4E",
      contrastText: "#FFFFFF",
      light: "rgb(255, 215, 113)",
      dark: "rgb(178, 143, 54)"
    },
    success: {
      "100": "#E7F9ED",
      "200": "#C2F1D1",
      "300": "#99E8B3",
      "400": "#52D77E",
      "500": "#33D067",
      "600": "#2ECB5F",
      "700": "#27C454",
      "800": "#20BE4A",
      "900": "#0b7724",
      main: "rgb(51, 208, 103)",
      light: "#99E8B3",
      dark: "#27C454",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    text: {
      primary: "#2B3445",
      secondary: "#373F50",
      light: "#fff",
      disabled: "#DAE1E7"
    },
    divider: "#F3F5F9",
    grey: {
      "50": "#fafafa",
      "100": "#F6F9FC",
      "200": "#F3F5F9",
      "300": "#E3E9EF",
      "400": "#DAE1E7",
      "500": "#AEB4BE",
      "600": "#7D879C",
      "700": "#4B566B",
      "800": "#373F50",
      "900": "#2B3445",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
    },
    paste: {
      "50": "#F5F5F5",
      "100": "#DDFBF1",
      "200": "#BDF7E8",
      "300": "#97E8DA",
      "400": "#76D2CA",
      "600": "#36929A",
      "700": "#257181",
      "800": "#175368",
      "900": "#0E3D56",
      main: "#4BB4B4",
      contrastText: "#FFFFFF"
    },
    info: {
      "50": "#f3f5f9",
      "100": "#DBF0FE",
      "200": "#B8DEFE",
      "300": "#94C9FE",
      "400": "#7AB6FD",
      "600": "#3975D9",
      "700": "#2756B6",
      "800": "#183C92",
      "900": "#0E2979",
      main: "#4E97FD",
      contrastText: "#FFFFFF",
      light: "#94C9FE",
      dark: "#2756B6"
    },
    marron: {
      "50": "#f3f5f9",
      "100": "#F6F2ED",
      "200": "#F8DBD1",
      "300": "#EBBCB3",
      "400": "#D89C98",
      "600": "#A3545C",
      "700": "#883948",
      "800": "#6E2438",
      "900": "#5B162F",
      main: "#BE7374"
    },
    background: {
      default: "#F6F9FC",
      paper: "#fff"
    },
    common: {
      black: "#000",
      white: "#fff",
      grey: "#eae8e8"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontSize: 14,
    fontFamily:
      "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    htmlFontSize: 16,
    body1: {
      fontSize: 14,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: 16,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      lineHeight: 1.43
    },
    body3: {
      fontSize: 18,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      lineHeight: 1.43
    },
    body4: {
      fontSize: 20,
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      lineHeight: 1.43
    },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 300,
      fontSize: "3.5rem",
      lineHeight: 1.167,
      "@media (min-width:600px)": {
        fontSize: "4.7129rem"
      },
      "@media (min-width:960px)": {
        fontSize: "5.3556rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "5.9983rem"
      }
    },
    h2: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 300,
      fontSize: "2.375rem",
      lineHeight: 1.2,
      "@media (min-width:600px)": {
        fontSize: "2.9167rem"
      },
      "@media (min-width:960px)": {
        fontSize: "3.3333rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "3.75rem"
      }
    },
    h3: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.167,
      "@media (min-width:600px)": {
        fontSize: "2.5707rem"
      },
      "@media (min-width:960px)": {
        fontSize: "2.7849rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "2.9991rem"
      }
    },
    h4: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "1.5625rem",
      lineHeight: 1.235,
      "@media (min-width:600px)": {
        fontSize: "1.8219rem"
      },
      "@media (min-width:960px)": {
        fontSize: "2.0243rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "2.0243rem"
      }
    },
    h5: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.334,
      "@media (min-width:600px)": {
        fontSize: "1.3118rem"
      },
      "@media (min-width:960px)": {
        fontSize: "1.4993rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "1.4993rem"
      }
    },
    h6: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.6,
      "@media (min-width:600px)": {
        fontSize: "1.25rem"
      },
      "@media (min-width:960px)": {
        fontSize: "1.25rem"
      },
      "@media (min-width:1280px)": {
        fontSize: "1.25rem"
      }
    },
    subtitle1: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75
    },
    subtitle2: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57
    },
    button: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase"
    },
    caption: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66
    },
    overline: {
      fontFamily:
        "Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      textTransform: "uppercase"
    }
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48
      },
      "@media (min-width:600px)": {
        minHeight: 64
      }
    }
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(3, 0, 71, 0.09)",
    "0px 4px 16px rgba(43, 52, 69, 0.1)",
    "0px 8px 45px rgba(3, 0, 71, 0.09)",
    "0px 0px 28px rgba(3, 0, 71, 0.01)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
});

export default theme;
