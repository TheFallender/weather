import React from 'react';

//Components
import Search from './Search';
import InputAPI from './InputAPI';

//Style
import '../Style.css';

//Media
import logo from '../../media/logo.png'
import git from '../../media/github.png'


//Header
const Header = props => {
    //Props
    const {
        siteName,
        apiSetted,
        updateResponse,
    } = props;

    //Show search based on Props
    let searchJSX = <Search updateResponse={updateResponse}/>;
    if (!apiSetted) {
        searchJSX = null;
    }

    //Return
    return (
        <div className="Header">
            <div className="HeaderBack">
                <a href="." className="HeaderBanner noDec">
                    <img className="HeaderLogo" src={logo} alt={"logo-pic"}/>
                    <h1 className="HeaderText"onClick={(e) => updateResponse(null)}>{siteName}</h1>
                </a>
                <a className="HeaderGithub" href="https://github.com/TheFallender" style={{height: "100%"}}>
                    <img className="HeaderLogo" src={git} alt={"git-pic"}/>
                </a>
            </div>
            <div className="HeaderMenu">
                {searchJSX}
                <InputAPI site={siteName} isSetted={apiSetted}/>
            </div>
        </div>
    );
}

export default Header;