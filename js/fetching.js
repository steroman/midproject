// A function to retrieve the project number from the URL query parameters
function projectLoad() {
  const searchParams = new URLSearchParams(window.location.search);
  const urlId = searchParams.get("id");
  return urlId;
}

// A function that returns a promise to retrieve project data from the API

function retrieveProject() {
  return new Promise((resolve, reject) => {
    // Fetch project data from the API
    fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    )
      .then((response) => {
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Filter the data based on the project number
        const filteredParam = data.filter(
          (element) => element.uuid == projectNumber
        );
        const projectInfo = filteredParam[0];
        resolve(projectInfo); // Resolve the promise with the project data
      })
      .catch((err) => reject(err)); // Catch any errors and reject the promise
  });
}

// A function to generate the project content based on the project data
function genContent(
  projectId,
  projectName,
  projectCategory,
  projectContent,
  projectImage,
  projectDate
) {
  // Create and configure the HTML content for the project
  const content = document.createElement("article");
  content.setAttribute("id", "project-details");
  content.innerHTML = `<h1>${projectName}</h1>
    <div id="project-info">
        <p id="project-category">${projectCategory}</p>
        <p id="completion-date">Completed on <span id="date">${projectDate}</span></p>
    </div>
    <div class="blurred">
        <img src="${projectImage}" id="background-img">
        <img src="${projectImage}" id="foreground-img">
    </div>
    <div id="project-body"><p>${projectContent}</p></div>`;
  return content; // Return the HTML content
}

// An asynchronous function to append the project content to the DOM
async function appendContent() {
  try {
    // Retrieve project data using the 'retrieveProject' function
    const { uuid, name, description, content, image, completed_on } =
      await retrieveProject();
    // Append the generated content to the DOM
    const container = document.getElementById("container");
    container.appendChild(
      genContent(uuid, name, description, content, image, completed_on)
    );
  } catch (error) {
    console.log(error); // Log any errors that occur during the process
  }
}

// Call the 'appendContent' function to initiate the process of fetching and appending project content
appendContent();
