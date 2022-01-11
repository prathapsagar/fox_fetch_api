document.body.innerHTML = `<div class="heading-container">
<h1> Fox</h1> </div>

<div id="mainContainer"  class="main-container"> </div>

`;

const getData = async () => {
  try {
    const data = await fetch("https://randomfox.ca/floof/");
    const fox = await data.json();
    // console.log(typeof (fox))
    mainContainer.innerHTML = "";

    displayData(fox);



  } catch (error) {
    console.log(error);
  }
};

getData();

const displayData = (obj) => {
  mainContainer.innerHTML += `
    <div id="subcont" class="container">
   <div i> <span> Fox</div>
        <img id="myImg" src="${obj.image}" alt=""  >
<div>Link = ${obj.link}</div>        
    `;
};


