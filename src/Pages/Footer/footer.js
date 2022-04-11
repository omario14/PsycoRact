import React from "react";

export default function footer() {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-right">
              <a href="#home" className="logo">
                <span>P</span>syco<span>R</span>act.
              </a>
              <p>
                une platforme qui fait le lien entre les étudiants et les
                psychologues.
              </p>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-up">
              <h3>liens</h3>
              <a href="#home">Accueil</a>
              <a href="#about">A propos</a>
              <a href="#facility">Seance</a>
              <a href="#review">Psychologues</a>
              <a href="#consultation">Rendez-Vous</a>
            </div>

            <div className="col-md-4 text-center" data-aos="fade-left">
              <h3>Contact</h3>
              <a href="https://www.facebook.com/rotaractclubtunisnotredame">
                facebook
              </a>
              <a href="/">twitter</a>
              <a href="https://www.instagram.com/rac_notre_dame">instagram</a>
            </div>
          </div>
        </div>
        <h1 className="credit text-center mx-auto">
          created by <span>Rotaract Tunis Notre Dame </span> | all rights
          reserved.
        </h1>
      </section>
    </div>
  );
}
