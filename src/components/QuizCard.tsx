import { useState } from "react";
import type { LanguageCode, QuizQuestion } from "../types";

interface QuizCardProps {
  questions: QuizQuestion[];
  lang: LanguageCode;
  onClose: () => void;
}

const quizUI = {
  es: {
    title: "Test de Falsos Amigos",
    closeTitle: "Cerrar test",
    progress: (current: number, total: number) =>
      `Pregunta ${current} de ${total}`,
    next: "Siguiente ➔",
    results: "Ver Resultados",
    finishedTitle: "¡Test completado!",
    scoreText: (score: number, total: number) =>
      `Has acertado ${score} de ${total} preguntas.`,
    repeat: "Repetir Test",
  },
  fr: {
    title: "Test de Faux Amis",
    closeTitle: "Fermer le test",
    progress: (current: number, total: number) =>
      `Question ${current} sur ${total}`,
    next: "Suivant ➔",
    results: "Voir les Résultats",
    finishedTitle: "Test terminé !",
    scoreText: (score: number, total: number) =>
      `Vous avez répondu correctement à ${score} sur ${total} questions.`,
    repeat: "Recommencer",
  },
  it: {
    title: "Test dei Falsi Amici",
    closeTitle: "Chiudi test",
    progress: (current: number, total: number) =>
      `Domanda ${current} di ${total}`,
    next: "Successiva ➔",
    results: "Vedi Risultati",
    finishedTitle: "Test completato!",
    scoreText: (score: number, total: number) =>
      `Hai risposto correttamente a ${score} di ${total} domande.`,
    repeat: "Ripeti Test",
  },
};

export function QuizCard({ questions, lang, onClose }: QuizCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const t = quizUI[lang] || quizUI.es;
  const currentQ = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === currentQ.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <article className="card quiz-card">
      <div className="quiz-header">
        <h2 className="term-title">{t.title}</h2>
        <button
          onClick={onClose}
          className="close-quiz-btn"
          title={t.closeTitle}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {isFinished ? (
        <div className="quiz-result">
          <h3>{t.finishedTitle}</h3>
          <p>{t.scoreText(score, questions.length)}</p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setIsFinished(false);
            }}
            className="lang-btn active"
            style={{ marginTop: "1rem" }}
          >
            {t.repeat}
          </button>
        </div>
      ) : (
        <div>
          <p className="quiz-progress">
            {t.progress(currentIndex + 1, questions.length)}
          </p>
          <p
            className="card-text"
            style={{ fontSize: "1.2rem", fontWeight: "600", margin: "1rem 0" }}
          >
            {currentQ.question}
          </p>

          <div className="quiz-options">
            {currentQ.options.map((option, idx) => {
              let optionClass = "quiz-option-btn";
              let iconElement = null;

              if (selectedOption !== null) {
                if (idx === currentQ.correctIndex) {
                  optionClass += " option-correct";
                  iconElement = (
                    <i
                      className="bi bi-check-circle-fill"
                      style={{ marginRight: "8px" }}
                    ></i>
                  );
                } else if (idx === selectedOption) {
                  optionClass += " option-incorrect";
                  iconElement = (
                    <i
                      className="bi bi-x-circle-fill"
                      style={{ marginRight: "8px" }}
                    ></i>
                  );
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={optionClass}
                >
                  {iconElement}
                  {option}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
              <button onClick={handleNext} className="lang-btn active">
                {currentIndex + 1 < questions.length ? t.next : t.results}
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
