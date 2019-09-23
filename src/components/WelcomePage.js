import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome To The Ultimate Fan Site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
