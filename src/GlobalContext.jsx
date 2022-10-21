import React, {useState, createContext} from 'react';

export const LearningListContext = createContext();
export const DarkThemeContext = createContext();

export function LearningListProvider({children}) {

    const [learningList, setLearningList] = useState([]);

    return (
        <LearningListContext.Provider value={{learningList, setLearningList}}>
            {children}
        </LearningListContext.Provider>
    )
}

export function DarkThemeProvider({children}) {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <DarkThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </DarkThemeContext.Provider>
    )
}

