// src/constants.js
export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  };
      
// Questions from Open Trivia Db
export const jsQuiz = {
   
    "questions": [
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which animal features on the logo for Abarth, the motorsport division of Fiat?",
            "correctAnswer": "Scorpion",
            "choices": [
                "Snake",
                "Bull",
                "Horse",
                "Scorpion",
            ],
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
            "correctAnswer": "Yugoslavia",
            "choices": [
                "Czechoslovakia",
                "Abkhazia",
                "South Ossetia",
                "Yugoslavia"
            ],
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Denmark has a monarch.",
            "correctAnswer": "True",
            "choices": [
                "False",
                "True",
            ],
        },
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the scientific name of the Budgerigar?",
            "correctAnswer": "Melopsittacus undulatus",
            "choices": [
                "Nymphicus hollandicus",
                "Pyrrhura molinae",
                "Ara macao",
                "Melopsittacus undulatus",
            ],
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of the following was NOT a playable character in the game Kingdom Hearts: Birth by Sleep?",
            "correctAnswer": "Ignis",
            "choices": [
                "Ventus",
                "Terra",
                "Aqua",
                "Ignis",
            ],
        },
        
    ],
};