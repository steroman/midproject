 
fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((err) => console.log(err));


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

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);