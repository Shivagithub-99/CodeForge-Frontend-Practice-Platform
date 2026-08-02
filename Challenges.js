const challenges = [
    {
        id: 1,
        title: "Build a Calculator",
        description: "Create a calculator using HTML, CSS and JavaScript.",
        difficulty: "Easy",
        technology: "JavaScript",
        xp: 200,
        completed: false
    },

    {
        id: 2,
        title: "Create a Weather App",
        description: "Build a weather application using an API and display real-time weather data.",
        difficulty: "Intermediate",
        technology: "API + JavaScript",
        xp: 350,
        completed: false
    },

    {
        id: 3,
        title: "Build a Todo List",
        description: "Create a task management app with add, delete, and complete features.",
        difficulty: "Easy",
        technology: "JavaScript DOM",
        xp: 250,
        completed: false
    },

    {
        id: 4,
        title: "Portfolio Website",
        description: "Design and develop a responsive personal portfolio website.",
        difficulty: "Intermediate",
        technology: "HTML + CSS",
        xp: 400,
        completed: false
    },

    {
        id: 5,
        title: "Build a Quiz App",
        description: "Create an interactive quiz application with scoring functionality.",
        difficulty: "Intermediate",
        technology: "JavaScript",
        xp: 300,
        completed: false
    },

    {
        id: 6,
        title: "GitHub Profile Finder",
        description: "Create an application that searches and displays GitHub user information.",
        difficulty: "Advanced",
        technology: "API + JavaScript",
        xp: 500,
        completed: false
    }
];

const challengeContainer = document.querySelector("#challenge-container");


challenges.forEach((challenge)=>{

    const card = document.createElement("div");

    card.classList.add("challenge-card");

    card.innerHTML = `
        <h3 id="challenge-name">${challenge.title}</h3>
        <p id="challenge-desc">${challenge.description}</p>

        <p id="tech">${challenge.technology}</p>
        <div class="details">
            <span>${challenge.difficulty}</span>
            <span>${challenge.xp}XP</span>
        </div>

        <a href="./index.html#playground">
                <button id="challenge-btn">
                    Start Challenge
                </button>
            </a>
    `;

    challengeContainer.appendChild(card);

});

const solveBtn = document.querySelector("#challenge-btn");

