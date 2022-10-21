import {useEffect, useContext} from 'react';
import {DarkThemeContext} from "./GlobalContext";

function Header() {
    const {darkTheme, setDarkTheme} = useContext(DarkThemeContext);

    useEffect(() => {
        async function loadTheme() {
            localStorage.getItem('darkThemeEnabled') ? await setDarkTheme(JSON.parse(localStorage.getItem('darkThemeEnabled'))) : await setDarkTheme(false);
        }        
        loadTheme();
    }, [setDarkTheme])
    
    useEffect(() => {
        document.body.classList.toggle('dark-theme', JSON.parse(localStorage.getItem('darkThemeEnabled')))
    }, [darkTheme])
    
    function toggleTheme() {
        setDarkTheme(value => !value); 
        localStorage.setItem('darkThemeEnabled', JSON.stringify(!darkTheme));
    }

    return( 
        <header>
            <nav>
                {/* <div className="profile-picture">
                    <img src="pfp_test.jpg" alt="Profile" />
                </div> */}
                <button className="theme-switcher-button" onClick={toggleTheme}>
                    <img src={darkTheme ? './logos/light-mode-icon.svg' : './logos/dark-mode-icon.svg'} alt="" />
                </button>
            </nav>
        </header>
    )
}

export default Header;