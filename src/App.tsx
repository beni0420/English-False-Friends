import { useState } from "react";
import { dictionaryData, quizData } from "./data/dictionaryData"; // <--- Añadido quizData aquí
import type { LanguageCode } from "./types";
import { DictionaryCard } from "./components/DictionaryCard";
import { QuizCard } from "./components/QuizCard";
import chameleonLogo from "./assets/chameleon.png";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

const uiText = {
  es: {
    title: "English False Friends",
    subtitle: "Guía técnica para desarrolladores (EN ⇄ ES)",
    searchPlaceholder: "Buscar término o significado técnico...",
    falseFriendLabel: "Falso amigo:",
    technicalMeaningLabel: "Significado técnico:",
    notFound: "No se han encontrado coincidencias.",
    footer: "Desarrollado por María Benito Arribas",
    quizButton: "Modo Test",
  },
  fr: {
    title: "English False Friends",
    subtitle: "Guide technique pour développeurs (EN ⇄ FR)",
    searchPlaceholder: "Rechercher un terme technique...",
    falseFriendLabel: "Faux ami :",
    technicalMeaningLabel: "Signification technique :",
    notFound: "Aucun faux ami ne correspond à votre recherche.",
    footer: "Développé par María Benito Arribas",
    quizButton: "Mode Test",
  },
  it: {
    title: "English False Friends",
    subtitle: "Guida tecnica per sviluppadores (EN ⇄ IT)",
    searchPlaceholder: "Cerca termine tecnico...",
    falseFriendLabel: "Falso amico:",
    technicalMeaningLabel: "Significato tecnico:",
    notFound: "Nessun falso amico corrisponde alla ricerca.",
    footer: "Sviluppato da María Benito Arribas",
    quizButton: "Modalità Test",
  },
};

export default function App() {
  const [lang, setLang] = useState<LanguageCode>("es");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const terms = dictionaryData[lang];
  const questions = quizData[lang];
  const t = uiText[lang];

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technicalMeaning.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={`page-container ${isDarkMode ? "dark-theme" : ""}`}>
      <div className="bg-chameleon-container">
        <img src={chameleonLogo} alt="" className="bg-chameleon-img" />
      </div>
      <main className="content-wrapper">
        <div className="top-bar">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle-btn"
            title="Cambiar modo de vista"
          >
            <i
              className={`bi ${isDarkMode ? "bi-sun-fill" : "bi-moon-fill"}`}
            ></i>
          </button>
        </div>

        <header className="header">
          <h1 className="main-title">{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
        </header>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <nav className="lang-selector" style={{ margin: 0 }}>
            {(["es", "fr", "it"] as LanguageCode[]).map((code) => (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  setSearchTerm("");
                  setIsQuizActive(false);
                }}
                className={`lang-btn ${lang === code && !isQuizActive ? "active" : ""}`}
              >
                {code}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsQuizActive(!isQuizActive)}
            className={`lang-btn ${isQuizActive ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <i className="bi bi-question-circle-fill"></i> {t.quizButton}
          </button>
        </div>

        {isQuizActive ? (
          <section
            className="cards-grid"
            style={{
              gridTemplateColumns: "1fr",
              maxWidth: "700px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <QuizCard
              questions={questions}
              lang={lang}
              onClose={() => setIsQuizActive(false)}
            />
          </section>
        ) : (
          <>
            <div className="search-wrapper">
              <i className="bi bi-search search-icon"></i>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <section className="cards-grid">
              {filteredTerms.length === 0 ? (
                <div className="not-found">{t.notFound}</div>
              ) : (
                filteredTerms.map((item) => (
                  <DictionaryCard
                    key={item.id}
                    item={item}
                    labels={{
                      falseFriendLabel: t.falseFriendLabel,
                      technicalMeaningLabel: t.technicalMeaningLabel,
                    }}
                  />
                ))
              )}
            </section>
          </>
        )}

        <footer className="footer">{t.footer} | English False Friends</footer>

        <div className="tech-logos-container">
          <img src={reactLogo} alt="React logo" className="tech-logo" />
          <img src={viteLogo} alt="Vite logo" className="tech-logo" />
        </div>
      </main>
    </div>
  );
}
