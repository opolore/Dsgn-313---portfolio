import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.jpg",
  "./cubeDrawings/cube2.jpg",
  "./cubeDrawings/cube3.jpg",
];
const trees = [
  "./PORTFOLIO/Interoperability1.jpg",
  "./PORTFOLIO/Interoperability2.jpg",
  "./PORTFOLIO/Interoperability3.jpg",
];

const cards = [
  "./PORTFOLIO/Interoperability4.jpg",
  "./PORTFOLIO/Interoperability5.jpg",
  "./PORTFOLIO/Interoperability6.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];
document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      CADAVRE EXQUIS
        <div class="three-model">
        <a href="https://dsgn-313-portfolio-5rpsbjcmw-opolores-projects.vercel.app/cubeDrawings/cube0.jpg" target="_blank">
          <img src="./cubeDrawings/cube0.jpg" id="model1" alt="Model 1 image" />
        </div>
        <div id="images-description">
          <div id="images">
  <a href="https://dsgn-313-portfolio-5rpsbjcmw-opolores-projects.vercel.app/cubeDrawings/cube1.jpg" target="_blank">
    <img src="./cubeDrawings/cube1.jpg" alt="cube2" />
  </a>
  <a href="https://dsgn-313-portfolio-5rpsbjcmw-opolores-projects.vercel.app/cubeDrawings/cube2.jpg" target="_blank">
    <img src="./cubeDrawings/cube2.jpg" alt="cube3" />
  </a>
  <a href="https://dsgn-313-portfolio-5rpsbjcmw-opolores-projects.vercel.app/cubeDrawings/cube3.jpg" target="_blank">
    <img src="./cubeDrawings/cube3.jpg" alt="cube4" />
  </a>
</div>
          <h4 id="description">This work reflects how design intersects with identity, equity, and belonging, emphasizing that our outward appearances don’t define who we are. Though people may first notice my skin as a Black person, it’s only a part of my larger story, rooted in culture, resilience, and creativity. Through hand drawings, edited photos, and my body, I explore the complexity of identity, symbolized by elements like the brain, heart, and hands. Design, like identity, requires intention and care, inviting us to look beyond the surface and create spaces that promote equity and belonging. This work is a personal reflection and a reminder that we are all more than meets the eye. It challenges the idea that identity is fixed, urging us to embrace the fullness of who we are, beyond what’s visible. 
</h4>
        </div>
      </div>

      <section id="projects">
      <div id="project-row">
      INTER(OPERABILITY)
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
          </div>
           <div class="three-model">
        </div>
        <div id="images-description">
         <div id="images">
  <a href="https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability1.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability1.jpg" alt="Interoperability1" />
  </a>
  <a href="https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability2.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability2.jpg" alt="Interoperability2" />
  </a>
  <a href=https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability3.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability3.jpg" alt="Interoperability3" />
    </div>
  </a>
</div>
<div id="images">
 <a href="https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability4.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability4.jpg" alt="Interoperability4" />
  </a>
  <a href="https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability5.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability5.jpg" alt="Interoperability5" />
  </a>
  <a href="https://dsgn-313-portfolio-opolores-projects.vercel.app/PORTFOLIO/Interoperability6.jpg" target="_blank">
    <img src="./PORTFOLIO/Interoperability6.jpg" alt="Interoperability6" />
  </a>
          </div>
          <h4 id="description">Interoperability allows design elements to transition smoothly between different software, enhancing flexibility and preventing limitations from a single platform. In this assignment, I explored this concept by exporting models from Blender to Rhino using FBX, STL, and OBJ formats. I observed how meshes, composed of polygons, could be transformed into NURBS for precision-based applications. Understanding these transitions improves design refinement, environmental simulations, and collaboration across tools. Mastering interoperability enables me to leverage multiple software strengths, optimizing my workflow and expanding creative possibilities in future projects.</h4>
        </div>
      </div>

      <div id="project-row">
      ${/*Assignment 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/Fox.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
