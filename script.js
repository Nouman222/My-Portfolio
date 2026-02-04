let serviceContainer = document.getElementById("service");

function createCard(titleText, detailText) {
  // Card
  const card = document.createElement("div");
  card.className = "card";

  // Title
  const title = document.createElement("h2");
  title.innerText = titleText;

  // Detail
  const detail = document.createElement("p");
  detail.innerText = detailText;

  // Append
  card.appendChild(title);
  card.appendChild(detail);
  serviceContainer.appendChild(card);
}

createCard(
  "Frontend Development",
  "I create responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
);

createCard(
  "Backend Development",
  "I develop robust server-side applications and APIs using Node.js and databases.",
);

createCard(
  "MERN Stack Development",
  "I build full-stack web applications using MongoDB, Express, React, and Node.js.",
);


// Function to add experience
function addExperience(title, role, duration) {
  const experienceDiv = document.getElementById("experience");

  const card = document.createElement("div");
  card.classList.add("exp-card");

  const expTitle = document.createElement("h3");
  expTitle.textContent = title;

  const expRole = document.createElement("p");
  expRole.textContent = role;

  const expDuration = document.createElement("p");
  expDuration.textContent = duration;

  card.appendChild(expTitle);
  card.appendChild(expRole);
  card.appendChild(expDuration);

  experienceDiv.appendChild(card);
}

// Adding example experiences
addExperience(
  "Frontend Development",
  "Built responsive websites using HTML, CSS, and JS.",
  "Jan 2026 - Present",
);
addExperience(
  "Backend Development",
  "Developed server-side logic and APIs with Node.js.",
  "Mar 2026 - Present",
);
addExperience(
  "MERN Stack Development",
  "Created full-stack web apps using MongoDB, Express, React, and Node.js.",
  "Aug 2026 - Present",
);




let projects = [
    {
    title: "E-Commerce Website",
    description:
      "A responsive static e-commerce website built using HTML, CSS, and JavaScript.",
    image: "Assests/projects/E-commerce.png",
    liveLink: "https://nouman222.github.io/E-Commerce/",
    githubLink: "https://github.com/Nouman222/E-Commerce",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing skills, projects, and contact information.",
    image: "Assests/projects/portfolio.png",
    liveLink: "https://nouman222.github.io/Portfolio/",
    githubLink: "https://github.com/Nouman222/Portfolio",
  },
  {
    title: "Blog Page",
    description: "A static blog page created using HTML and CSS.",
    image: "Assests/projects/blog.png",
    liveLink: "https://nouman222.github.io/Blogging/",
    githubLink: "https://github.com/Nouman222/Blogging",
  },
  
  {
    title: "Developer Portfolio",
    description:
    "A modern developer portfolio website built with clean UI and responsive design.",
    image: "Assests/projects/devloper.png",
    liveLink: "https://nouman222.github.io/Developer-Portfolio/",
    githubLink: "https://github.com/Nouman222/Developer-Portfolio",
  },
  {
    title: "Pak Restaurants Website",
    description:
    "A restaurant listing website showcasing Pakistani restaurants using HTML, CSS, and JS.",
    image: "Assests/projects/resturant.png",
    liveLink: "https://nouman222.github.io/Pak-Restuarants/",
    githubLink: "https://github.com/Nouman222/Pak-Restuarants",
  },
  {
    title: "Online Store",
    description:
    "An online store frontend built using HTML, CSS, and JavaScript.",
    image: "Assests/projects/onlineshop.png",
    liveLink: "https://nouman222.github.io/Online-store/",
    githubLink: "https://github.com/Nouman222/Online-store",
  },
  {
    title: "Architects Website",
    description:
    "A professional architects website with modern layout and responsive design.",
    image: "Assests/projects/Architects.png",
    liveLink: "https://nouman222.github.io/architects-web/",
    githubLink: "https://github.com/Nouman222/architects-web",
  },
  {
    title: "Dynamic Product Gallery",
    description:
    "A dynamic product gallery built using JavaScript DOM manipulation.",
    image: "Assests/projects/Dynamic-Product.png",
    liveLink: "https://nouman222.github.io/Dynamic-Product-Gallery/",
    githubLink: "https://github.com/Nouman222/Dynamic-Product-Gallery",
  },
];

const container2 = document.getElementById("projectsContainer");
const allBtn = document.getElementById("allProjectsBtn");

let visibleCount = 3;

// render projects with images
function renderProjects(limit) {
  container2.innerHTML = "";

  projects.slice(0, limit).forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.liveLink}" target="_blank" class="live-btn">Live Demo</a>
        <a href="${project.githubLink}" target="_blank" class="code-btn">Source Code</a>
      </div>
    `;

    container2.appendChild(card);
  });
}

// initial render
renderProjects(visibleCount);

// show all projects on button click
allBtn.addEventListener("click", () => {
  renderProjects(projects.length);
  allBtn.style.display = "none";
});
