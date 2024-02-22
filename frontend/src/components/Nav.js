import React from "react";
import Logo from '../assets/argentBankLogo.webp';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
     <nav class="main-nav">
      <Link class="main-nav-logo" to="./">
        <img
          class="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </div>
    )
;}

export default Nav;