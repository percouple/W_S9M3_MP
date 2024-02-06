import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage"; 

export default function useDarkMode () {
    const [darkMode, setDarkMode] = useLocalStorage("userDarkModePreferences", false);

    return [darkMode, setDarkMode];

}