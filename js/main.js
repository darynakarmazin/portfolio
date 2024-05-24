document.addEventListener("DOMContentLoaded", function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const portfolioList = document.getElementById("portfolio-list");

      data.portfolio.forEach((project) => {
        const card = document.createElement("li");
        card.classList.add("card");

        const link = document.createElement("a");
        link.classList.add("card-link");
        link.target = "_blank";
        link.href = project.link;

        const img = document.createElement("img");
        img.classList.add("card-img");
        img.src = project.imgSrc;
        img.alt = project.title;

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.textContent = project.title;

        const tools = document.createElement("p");
        tools.classList.add("card-tools");
        tools.textContent = project.tools;

        const description = document.createElement("p");
        description.classList.add("card-description");
        description.textContent = project.description;

        link.appendChild(img);
        link.appendChild(title);
        link.appendChild(tools);
        link.appendChild(description);

        card.appendChild(link);
        portfolioList.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Error loading portfolio projects:", error)
    );
});
