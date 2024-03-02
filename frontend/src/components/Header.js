import React from "react";
import Logo from '../assets/argentBankLogo.webp';
import { Link } from "react-router-dom"

const Header = () => {
  return ( 
      <>
      <header>
        <nav class="main-nav">
          <Link class="main-nav-logo" to="/">
            <img
              class="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link class="main-nav-item" to="/Login">
              <i class="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        </nav>
        </header>
       </>
      )
;}

      export default Header;