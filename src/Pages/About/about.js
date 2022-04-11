import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

export default function About() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-md-6 content" data-aos="fade-right">
              <div className="box">
                <h3>
                  {" "}
                  <i className="fas fa-desktop"></i> WeCare{" "}
                </h3>
                <p>
                {t("aboutpage.phrase1")}
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

            <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
              <img src="../../assets/images/about.png" width="100%" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
