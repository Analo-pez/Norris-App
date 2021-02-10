import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/norris.png'


const Header = () => {
  
    return (
    <div className="header">
        <img className="header__img" src={logo} alt=""/>
        <p className="header__title">
       Chuck Norris Jokes
        </p>

    </div>
    )

}
 
export default Header