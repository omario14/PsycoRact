import React from "react";
import "./seance.css";

export default function seance() {
  return (
    <div>
    <section className="about" id="about">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
        <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
            <img src="../../assets/images/seance.png" width="100%" alt="" />
          </div>
          <div className="col-md-6 content" data-aos="fade-right">
            <div className="box">
              <h3>
                {" "}
                <i className="fas fa-desktop"></i> WeCare{" "}
              </h3>
              <p>
                Une platforme qui fait le lien entre les étudiants et les
                psychologues.
              </p>
            </div>

            <div className="box">
              <h3>
                {" "}
                <i className="fas fa-user-md"></i> Psychologues{" "}
              </h3>
              <p>
                Médecin spécialisé dans l’étude et la prise en charge de
                maladies mentales et/ou psychiatre, le psychiatre va aider à
                soigner et atténuer les symptômes de pathologies comme la
                schizophrénie, les crises d’angoisse, les dépressions, les
                psychoses et l’autisme
              </p>
            </div>

            <div className="box">
              <h3>
                {" "}
                <i className="fas  fa-bookmark"></i>Santé mentale des
                étudiants{" "}
              </h3>
              <p>
                Avec le confinement et la fermeture des universités liés à la
                pandémie de covid-19, politiques et médias semblent tomber des
                nues : nos étudiants n’iraient donc pas bien ? Pourtant, les
                scientifiques du monde entier étudient la question depuis de
                nombreuses années puisque 75% des maladies psychiatriques
                débutent avant l’âge de 25 ans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
