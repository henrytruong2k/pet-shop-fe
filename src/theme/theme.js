'use client'
import React, { createContext, useEffect, useContext, useMemo, useState } from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import palette from './palette/palette'
import shape from './shape/shape'
import typography from './typography/typography'
import breakpoints from './breakpoints/breakpoints'
import shadows, { customShadows } from './shadows/shadows'
import { DARK, LIGHT, DEFAULT_FONT_SIZE } from '@/constants/theme'
//Localization
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/vi'

import { useRouter } from 'next/navigation'

const lightTheme = {
  palette: {
    mode: 'light',
    ...palette.light,
  },
  layout: {
    contentWidth: 1140,
  },
  shape: {
    ...shape,
  },
  shadows: shadows.light,
  customShadows: customShadows.light,
  typography: {
    ...typography,
  },
  breakpoints: {
    ...breakpoints,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  spacing: factor => `${0.5 * factor}rem`,
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: 'white',
      },
    },
  },
}

// Create a theme instance.
const darkTheme = {
  palette: {
    mode: 'dark',
    ...palette.dark,
  },
  layout: {
    contentWidth: 1140,
  },
  shape: {
    ...shape,
  },
  shadows: shadows.dark,
  customShadows: customShadows.dark,
  typography: {
    ...typography,
  },
  breakpoints: {
    ...breakpoints,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  spacing: factor => `${0.5 * factor}rem`,
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: 'white',
      },
    },
  },
}

export const getTheme = mode => {
  //create theme based on type
  const selectedTheme = mode === DARK ? darkTheme : lightTheme
  // const themeWithFontSize = {
  //     ...selectedTheme,
  //     typography: {
  //         ...selectedTheme.typography,
  //         fontSize
  //     }
  // }

  const theme = responsiveFontSizes(createTheme({ ...selectedTheme }))
  // theme.components = componentsOverride(theme)

  return theme
}

const ThemeContext = createContext({
  togglePaletteMode: () => {},
  changeFontSize: () => {},
  fontSize: DEFAULT_FONT_SIZE,
})

export const useThemeConfig = () => {
  return useContext(ThemeContext)
}

export function ThemeConfig({ children }) {
  // const paletteType = LIGHT;
  const { locale } = useRouter()

  const currentLocale = useMemo(() => {
    switch (locale) {
      case 'vi':
        return 'vi'
      default:
        return null
    }
  }, [locale])

  const [mode, setMode] = useState(LIGHT)
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE)

  const themeConfig = useMemo(
    () => ({
      togglePaletteMode: () => {
        setMode(prevMode => {
          const newValue = prevMode === LIGHT ? LIGHT : DARK
          localStorage.setItem('themeMode', newValue)
          return newValue
        })
      },
      changeFontSize: value => {
        setFontSize(value ?? DEFAULT_FONT_SIZE)
      },
      fontSize,
    }),
    [fontSize],
  )

  const theme = useMemo(() => {
    return getTheme(mode)
  }, [mode])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [fontSize])

  useEffect(() => {
    const presetMode = localStorage.getItem('themeMode')
    if (presetMode && [DARK, LIGHT].includes(presetMode)) {
      setMode(presetMode)
    }
  }, [])

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'vi'}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

//Do not delete this line
// export default createTheme(lightTheme);
