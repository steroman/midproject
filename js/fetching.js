const projectNumber = projectLoad()
// console.log(projectNumber)

function retrieveProject() {
    return new Promise((resolve, reject) => {
        fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        const filteredParam = data.filter((element) => element.uuid == projectNumber);
        const projectInfo = filteredParam[0];
        //   console.log(projectName)
            resolve(projectInfo);
        }) 
    
        .catch((err) => reject(err));
    })

};

function genContent (projectId, projectName, projectCategory, projectContent, projectImage, projectDate) {
    const content = document.createElement("article");
    content.setAttribute('id', 'project-details')
    content.innerHTML = `<h1>${projectName}</h1>
    <div id="project-info">
        <p id="project-category">${projectCategory}</p>
        <p id="completion-date">Completed on <span id="date">${projectDate}</span></p>
    </div>
    <img src="${projectImage}">
    <div id="project-body">${projectContent}
    </div>`;
    // console.log(content)
    return content
}


// genContent ("stefano", "dev", "hoy", "https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true", "cuerpo");


async function appendContent ()  {
    try {
        const {uuid, name, description, content, image, completed_on} = await retrieveProject();
        const container = document.getElementById("container");
        container.appendChild(genContent(uuid, name, description, content, image, completed_on));
} catch (error) {
    console.log(error);
}

}
    
appendContent();

// SAME FUNCTION BUT ASYNC

// async function asyncCall() {
//     try {
//         const res = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
//         const data = await res.json();
//         console.log(data)
//     } catch (error) {

//     }
// }

// asyncCall();

function projectLoad() {
    const searchParams = new URLSearchParams(window.location.search);
    const urlId = searchParams.get("id");
    // console.log(urlId);
    return urlId;
};

