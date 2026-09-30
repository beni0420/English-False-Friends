Lee esto en español: [Español](README.es.md)

# English False Friends: Guide to False Friends for Programmers

This is an interactive web application designed to help developers and language learners (English, Spanish, French, Italian) identify and understand the most common "false friends" in the context of programming and software development.

## Main Features

- **Instant Search:** Filter terms in real-time by keyword (code or meaning).
- **Multilingual Support:** Explore false friends across English, Spanish, French, and Italian.
- **Dark/Light Mode:** Design adaptable to user visual preferences for comfortable reading.
- **Interactive Quiz:** To put what you've learned to the test.
- **Responsive Design:** Fluid and adaptable interface, from large desktop screens to mobile devices.
- **Accessible Design:** Interface visually adapted for users with color blindness (in the quiz, errors are shown with an X or a checkmark instead of relying solely on green/red colors).
- **Modern Aesthetics:** Pastel color palette and a chameleon mascot.

## Technologies Used

This project was built using modern web technologies focused on performance and user experience:

- **React.js** (with Vite for a fast development environment)
- **TypeScript** (for static typing and code safety)
- **CSS3** (with CSS variables, Flexbox, Grid, and custom animations)
- **Bootstrap Icons** (for interface icons)
- **LocalStorage** (to persist dark/light theme preferences)

## How to Run the Project Locally

If you want to clone this project and run it on your local machine, follow these steps:

### 1. Prerequisites

You need to have Node.js and npm (or yarn) installed on your system.

### 2. Clone the repository

Open your terminal and run:

```bash
git clone [https://github.com/beni0420/english-false-friends.git](https://github.com/beni0420/english-false-friends.git)
cd english-false-friends
```

### 3. Install necessary dependencies by running:

npm install

### 4. Run the development server

npm run dev

By default, the application will open at http://localhost:5173

# English False Friends: Guide to False Friends for Programmers

The application uses centralized data structures to facilitate content management across all four languages. The data is located in the src/data/ folder:

- **dictionaryData.ts**: Contains the array of objects with all terms, their correct meanings, and their false friends for each supported language.

- **quizData.ts**: Stores the questions and answers for the game mode (Quiz).
