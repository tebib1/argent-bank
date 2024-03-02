import React from 'react';
import UserDetails from "../components/userdetails"

function user() {
    return (
      <>
      <p>Hello</p>
       <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br/>Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <UserDetails
                title="Checking"
                x="x8349"
                amount="$2,082.79"
                balance="Available"
            />
            <UserDetails
                title="Savings"
                x="x6712"
                amount="$10,928.42"
                balance="Available"
            />
            <UserDetails
                title="Credit Card"
                x="x8349"
                amount="$184.30"
                balance="Current"
            />
    </main>
      </>
  );
}

export default user;