import type { FalseFriend, LanguageCode, QuizQuestion } from "../types";

export const dictionaryData: Record<LanguageCode, FalseFriend[]> = {
  es: [
    {
      id: "es-1",
      term: "Actual",
      falseFriend: "Creer que significa 'actual' o 'en este momento'.",
      technicalMeaning:
        "Significa 'real' o 'verdadero'. En inglés técnico, para actual se usa 'current'.",
      codeExample: "const [currentIndex, setCurrentIndex] = useState(0);",
    },
    {
      id: "es-2",
      term: "Sensible",
      falseFriend:
        "Creer que se refiere al algo delicado, emocional o que reacciona con facilidad.",
      technicalMeaning:
        "En desarrollo, significa sensato, razonable o lógico (muy típico en 'sensible defaults').",
      codeExample:
        "const defaultTimeout = 5000; // Un valor por defecto sensato y lógico",
    },
    {
      id: "es-3",
      term: "Eventually",
      falseFriend: "Eventualmente",
      technicalMeaning:
        "Indica que algo sucederá más tarde, tras un proceso o tiempo, sin un momento exacto garantizado (ej. 'eventual consistency'). No significa 'quizás' o 'a veces'.",
      codeExample:
        "// Eventual consistency in distributed databases\nawait db.replicateData();\n// The read replica will eventually sync up.",
    },
    {
      id: "es-4",
      term: "Record",
      falseFriend: "Recordar",
      technicalMeaning:
        "Estructura de datos que contiene campos. También se refiere a una fila (registro) en una tabla de base de datos o, más recientemente, a tipos de datos inmutables en lenguajes modernos.",
      codeExample: "public record UserDto(int Id, string Username);",
    },
    {
      id: "es-5",
      term: "Resume",
      falseFriend: "Resumir",
      technicalMeaning:
        "Acción de reiniciar la ejecución de un proceso, hilo (thread) o operación de I/O que estaba en estado de pausa o suspendido.",
      codeExample:
        "animationController.Resume(); // Reanuda la animación pausada",
    },
    {
      id: "es-6",
      term: "Sentences",
      falseFriend: "Sentencias",
      technicalMeaning:
        "En el contexto de la IA y el procesamiento del lenguaje natural (NLP), se refiere a las oraciones o frases gramaticales que componen un texto.",
      codeExample: "const sentences = nlpTokenizer.tokenize(documentText);",
    },
    {
      id: "es-7",
      term: "Support",
      falseFriend: "Soportar",
      technicalMeaning:
        "Capacidad de un software, hardware o sistema para funcionar con, o proveer funcionalidad para, una tecnología, formato, o dispositivo específico (ej. 'Browser support').",
      codeExample:
        "@supports (display: grid) {\n  .container { display: grid; }\n}",
    },
  ],
  fr: [
    {
      id: "fr-1",
      term: "Actuellement",
      falseFriend:
        "Confondre avec le faux ami anglais 'actually' (qui signifie en réalité).",
      technicalMeaning: "Signifie 'currently' (actuellement / en ce moment).",
      codeExample: "// Utilisez 'currentStatus' au lieu de 'actualStatus'",
    },
    {
      id: "fr-2",
      term: "Sensible",
      falseFriend:
        "Penser qu'il s'agit de la sensibilité émotionnelle ou de la fragilité.",
      technicalMeaning:
        "En programmation, signifie sensé, raisonnable ou logique (ex: 'sensible defaults').",
      codeExample: "const defaultTimeout = 5000; // Valeur par défaut sensée",
    },
    {
      id: "fr-3",
      term: "Actual",
      falseFriend: "Actuel",
      technicalMeaning:
        "Définit ce qui est réel, vrai ou effectif, par opposition à ce qui est théorique ou estimé (ex: taille réelle, coût réel).",
      codeExample:
        "int actualSize = file.length(); // Taille réelle et effective",
    },
    {
      id: "fr-4",
      term: "Control",
      falseFriend: "Contrôle",
      technicalMeaning:
        "Dans une interface graphique (GUI), élément interactif comme un bouton ou une liste déroulante. Aussi utilisé dans 'contrôle d'accès' ou 'version control'.",
      codeExample:
        "Button submitButton = new Button(); // Élément de contrôle GUI",
    },
    {
      id: "fr-5",
      term: "Demand",
      falseFriend: "Demande",
      technicalMeaning:
        "Se réfère au besoin en ressources informatiques ou processeurs, ou à l'utilisation immédiate d'un service (ex: 'provisioning on demand').",
      codeExample:
        "cluster.scaleToDemand(currentLoad); // Allocation à la demande",
    },
    {
      id: "fr-6",
      term: "Library",
      falseFriend: "Librairie",
      technicalMeaning:
        "Collection de sous-programmes ou modules précompilés et réutilisables destinés à être utilisés par d'autres programmes (ex: React, NumPy).",
      codeExample:
        "import numpy as np // Utilisation d'une bibliothèque mathématique",
    },
    {
      id: "fr-7",
      term: "Notice",
      falseFriend: "Notice",
      technicalMeaning:
        "Action d'observer ou de prendre connaissance d'un événement. Souvent utilisé dans les niveaux de logs (ex: 'LOG_NOTICE') ou pour des avertissements.",
      codeExample: "syslog(LOG_NOTICE, 'User successfully authenticated');",
    },
  ],
  it: [
    {
      id: "it-1",
      term: "Permesso",
      falseFriend:
        "Confondere i permessi dei file con un permesso o un'autorizzazione generica.",
      technicalMeaning:
        "In sistemi Unix/Linux, i permessi di lettura, scrittura ed esecuzione (chmod).",
      codeExample: "chmod 755 script.sh",
    },
    {
      id: "it-2",
      term: "Sensible",
      falseFriend:
        "Pensare che significhi sensibile dal punto di vista emotivo o delicato.",
      technicalMeaning:
        "Significa sensato, ragionevole o logico (spesso usato per configurazioni standard).",
      codeExample:
        "const defaultTimeout = 5000; // Valore predefinito ragionevole",
    },
    {
      id: "it-3",
      term: "Argument",
      falseFriend: "Argomento",
      technicalMeaning:
        "Il valore o l'informazione passata a una funzione, subroutine o metodo quando viene invocato (spesso usato intercambiabilmente con 'parametro').",
      codeExample:
        "calculateTotal(price, taxRate); // price e taxRate sono argomenti",
    },
    {
      id: "it-4",
      term: "Data",
      falseFriend: "Data (data di calendario)",
      technicalMeaning:
        "Informazione in ingresso o elaborata da un computer (il singolare è 'datum', ma si usa 'data' come plurale non numerabile in inglese). In italiano 'Data' significa solo calendario.",
      codeExample: "fetchDataFromApi().then(data => console.log(data));",
    },
    {
      id: "it-5",
      term: "Eventually",
      falseFriend: "Eventualmente",
      technicalMeaning:
        "Significa 'alla fine' o 'col tempo'. Riferito a sistemi distribuiti, indica che le modifiche saranno propagate a tutti i nodi dopo un certo tempo (eventual consistency).",
      codeExample: "cache.invalidate(); // I nodi si aggiorneranno eventually",
    },
    {
      id: "it-6",
      term: "Factory",
      falseFriend: "Fattoria",
      technicalMeaning:
        "Un 'design pattern' creazionale utilizzato per creare oggetti senza specificare l'esatta classe dell'oggetto che verrà creato (Factory Method, Abstract Factory).",
      codeExample: "Document doc = DocumentFactory.createDocument('pdf');",
    },
    {
      id: "it-7",
      term: "Implement",
      falseFriend: "Implementare (spesso usato correttamente)",
      technicalMeaning:
        "Mettere in atto, eseguire o realizzare la programmazione di un algoritmo, una specifica o un'interfaccia all'interno del codice sorgente.",
      codeExample:
        "class PayPalPayment implements PaymentGateway {\n  // Implementazione dei metodi\n}",
    },
  ],
};

export const quizData: Record<LanguageCode, QuizQuestion[]> = {
  es: [
    {
      id: "q-es-1",
      question:
        "¿Qué significa realmente el término técnico en inglés 'Actual'?",
      options: [
        "En este momento / Actual",
        "Real o verdadero",
        "Un archivo comprimido",
        "Una versión de prueba",
      ],
      correctIndex: 1,
    },
    {
      id: "q-es-2",
      question:
        "En la expresión 'sensible defaults', ¿cómo se traduce 'sensible'?",
      options: [
        "Muy delicado",
        "Emocional",
        "Sensato o razonable",
        "Fácil de usar",
      ],
      correctIndex: 2,
    },
    {
      id: "q-es-3",
      question:
        "¿Cuál es el significado técnico correcto de 'Eventually' en desarrollo de software? (Ej: Eventual Consistency)",
      options: [
        "Que ocurrirá inmediatamente",
        "Que ocurrirá tarde o temprano, eventualmente",
        "Que puede que ocurra o no",
        "Que es un error del sistema",
      ],
      correctIndex: 1,
    },
    {
      id: "q-es-4",
      question:
        "En el contexto de una base de datos relacional, ¿a qué equivale normalmente el término 'Record'?",
      options: [
        "A una columna",
        "A una base de datos entera",
        "A una fila (tupla)",
        "A una tabla",
      ],
      correctIndex: 2,
    },
    {
      id: "q-es-5",
      question:
        "En programación, cuando un hilo o proceso en pausa recibe la orden de 'Resume', ¿qué hace?",
      options: [
        "Se borra de la memoria",
        "Se resume en un archivo de texto",
        "Se reinicia o reanuda su ejecución",
        "Da un error de sintaxis",
      ],
      correctIndex: 2,
    },
    {
      id: "q-es-6",
      question:
        "En IA y Procesamiento del Lenguaje Natural (NLP), ¿a qué se refiere el término 'Sentences'?",
      options: [
        "A las oraciones o frases gramaticales",
        "A las sentencias condicionales (if/else)",
        "A las sentencias de SQL",
        "A los errores de compilación",
      ],
      correctIndex: 0,
    },
    {
      id: "q-es-7",
      question:
        "Cuando un navegador o un framework tiene 'Support' para una tecnología, ¿qué significa?",
      options: [
        "Que tiene un servicio técnico de llamadas",
        "Que es compatible y puede funcionar con ella",
        "Que pesa mucho en disco",
        "Que está obsoleto",
      ],
      correctIndex: 1,
    },
  ],
  fr: [
    {
      id: "q-fr-1",
      question:
        "Que signifie le mot 'actuellement' dans un contexte technique ?",
      options: [
        "Currently (en ce moment)",
        "Actually (en réalité)",
        "Activer un module",
        "Enregistré",
      ],
      correctIndex: 0,
    },
    {
      id: "q-fr-2",
      question:
        "En programmation, comment doit-on traduire 'sensible' dans l'expression 'sensible defaults'?",
      options: [
        "Fragile et délicat",
        "Sensible aux émotions",
        "Sensé, logique ou raisonnable",
        "Secret et chiffré",
      ],
      correctIndex: 2,
    },
    {
      id: "q-fr-3",
      question:
        "D'un point de vue technique, que désigne le mot anglais 'Actual' ?",
      options: [
        "Le moment présent",
        "Ce qui est réel, vrai ou effectif",
        "Une actualité de code",
        "Un fichier mis à jour",
      ],
      correctIndex: 1,
    },
    {
      id: "q-fr-4",
      question:
        "Dans une interface graphique (GUI), que représente le mot 'Control'?",
      options: [
        "Un élément interactif (bouton, liste, etc.)",
        "Une télécommande",
        "Le gestionnaire du système",
        "Un mot de passe",
      ],
      correctIndex: 0,
    },
    {
      id: "q-fr-5",
      question:
        "Que signifie l'expression 'provisioning on demand' liée au mot 'Demand'?",
      options: [
        "Un ordre de bloquer le serveur",
        "Une allocation de ressources à la demande",
        "Une demande de support technique",
        "Une erreur de requête HTTP",
      ],
      correctIndex: 1,
    },
    {
      id: "q-fr-6",
      question:
        "Quelle est la bonne traduction technique de 'Library' en informatique?",
      options: [
        "Librairie (magasin de livres)",
        "Bibliothèque (collection de code)",
        "Livreur de code",
        "Bureau d'étude",
      ],
      correctIndex: 1,
    },
    {
      id: "q-fr-7",
      question:
        "Dans les niveaux de logs (ex: 'LOG_NOTICE'), que signifie 'Notice'?",
      options: [
        "Une notice d'utilisation papier",
        "Un avertissement ou notification d'un événement",
        "Un blocage total du programme",
        "La suppression d'un fichier",
      ],
      correctIndex: 1,
    },
  ],
  it: [
    {
      id: "q-it-1",
      question: "Cosa indica il termine 'permesso' nei sistemi Unix/Linux?",
      options: [
        "Un permesso di assenza dal lavoro",
        "I permessi di lettura, scrittura ed esecuzione",
        "Una password di amministratore",
        "Un errore di connessione di rete",
      ],
      correctIndex: 1,
    },
    {
      id: "q-it-2",
      question:
        "Cosa significa il termine 'sensible' in programmazione (es. 'sensible defaults')?",
      options: [
        "Emotivamente fragile",
        "Sensibile al tatto",
        "Sensato, logico o ragionevole",
        "Difficile da configurare",
      ],
      correctIndex: 2,
    },
    {
      id: "q-it-3",
      question: "Nel contesto di una funzione o metodo, cos'è un 'Argument'?",
      options: [
        "Una discussione tra sviluppatori",
        "Il valore o parametro passato alla funzione",
        "Il nome del file sorgente",
        "Un commento nel codice",
      ],
      correctIndex: 1,
    },
    {
      id: "q-it-4",
      question: "In informatica, cosa rappresenta il termine inglese 'Data'?",
      options: [
        "Una data del calendario",
        "Un errore di sistema",
        "Informazioni elaborate o in ingresso (dati)",
        "La scadenza di un abbonamento",
      ],
      correctIndex: 2,
    },
    {
      id: "q-it-5",
      question:
        "Cosa indica il concetto di 'Eventually' nei sistemi distribuiti (eventual consistency)?",
      options: [
        "Che accadrà sicuramente adesso",
        "Che i dati si sincronizzeranno col tempo / alla fine",
        "Che non avverrà mai",
      ],
      correctIndex: 1,
    },
    {
      id: "q-it-6",
      question:
        "Nel design pattern 'Factory Method', qual è il significato di 'Factory'?",
      options: [
        "Un luogo fisico di produzione",
        "Una classe o metodo che crea oggetti",
        "Una fattoria agricola",
        "Un errore di sintassi",
      ],
      correctIndex: 1,
    },
    {
      id: "q-it-7",
      question: "Cosa significa l'azione di 'Implement' nel codice sorgente?",
      options: [
        "Comprar una herramienta",
        "Eseguire la programmazione di un'interfaccia o specifica",
        "Eliminare le dipendenze",
        "Aprire il terminale",
      ],
      correctIndex: 1,
    },
  ],
};
