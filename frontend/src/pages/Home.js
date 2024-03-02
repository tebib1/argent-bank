import React from 'react';
import Chat from '../assets/icon-chat.webp';
import money from '../assets/icon-money.webp';
import security from '../assets/icon-security.webp';
import Features from '../components/features';


function Home() {
    return (
      <>
        <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
         
          <Features 
            imgSrc={Chat}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
           24/7 chat or through a phone call in less than 5 minutes." />

          <Features 
            imgSrc={money}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!" />
          <Features
            imgSrc={security}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe." />

        </section>
      </main>
      </>
    );
  }
  
  export default Home;