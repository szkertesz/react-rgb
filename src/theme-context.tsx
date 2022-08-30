import React from 'react'

// type Theme = {
//     backgroundColor: string
//     color: string
// }

type Themes = {
    // [key: string]: Theme
    [key: string]: React.CSSProperties
}

const defaultTheme: Themes = {
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
    dark: {
        backgroundColor: '#666',
        color: 'white',
    },
}

export const ThemeContext = React.createContext(defaultTheme)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
