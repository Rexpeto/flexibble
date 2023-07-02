"use client"
import { useTheme } from "next-themes"
import {HiOutlineSun, HiOutlineMoon} from "react-icons/hi"

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const handleTheme = () => {
        
        if(theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark")
        }
    }

    return (
        <button onClick={handleTheme}>{theme === 'dark' ? (<HiOutlineSun/>) : (<HiOutlineMoon/>)}</button>
    )
}

export default ThemeSwitcher
