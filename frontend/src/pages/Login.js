import React , { useState } from 'react';
import authService from '../components/authservice';

function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    authService.login(username, password,rememberMe)
    .then(data => {
      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
      } else {
        localStorage.removeItem('rememberedUser');
      }
    })
      .catch(error => {
        // Gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
      });
  };
    return (
      <>
       <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label> <input type="text" id="username" onChange={e => setUsername(e.target.value)}  />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/><label for="remember-me">  Remember me</label>  
                        </div>
                        
                       <button type="submit" class="sign-in-button" onClick={handleLogin}>Sign In</button>
                        
                      
                    </form>
                </section>
            </main>
      </>
    );
  }
  
  export default Login;