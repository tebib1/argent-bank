const API_URL = 'http://localhost:3001/api/v1/user/login';

const authService = {
    
  login: (email, password) => {
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }
      return response.json();
    });
  },
};



export default authService;
