// create mini bottles

let body = document.body;
let list_mini_glasses = body.querySelector(".bott_box").querySelector(".list_mini_glasses");

for (let rows = 0; rows < 2; rows++) {

    let row = document.createElement("div");
    row.style.display = "flex";
    
    for (let col = 0; col < 4; col++) {

        let text_inside = document.createElement("div");
        text_inside.style.display = "flex";
        text_inside.style.flexDirection = "column";      
        text_inside.style.width = "100%";
        text_inside.style.height = "100%";

        let txt1 = document.createTextNode("250");
        let txt_box1 = document.createElement("div");
        txt_box1.appendChild(txt1);
        txt_box1.style.width = "100%";
        txt_box1.style.height = "50%";
        txt_box1.style.display = "flex";
        txt_box1.style.flexDirection = "column";
        txt_box1.style.justifyContent = "flex-end";

        txt_box1.style.textAlign = "center";
        let txt2 = document.createTextNode("ml");
        let txt_box2 = document.createElement("div");
        txt_box2.appendChild(txt2);
        txt_box2.style.textAlign = "center";

        txt_box2.style.height = "50%";
        txt_box2.style.width = "100%";

        text_inside.appendChild(txt_box1);
        text_inside.appendChild(txt_box2);

        let mini_bottle  = document.createElement("div");
        mini_bottle.classList.add("mini_bottle");
        mini_bottle.style.background = "white";
        mini_bottle.style.height = "80px";
        mini_bottle.style.width = "50px";
        mini_bottle.style.border = "3px solid purple";
        mini_bottle.style.borderBottomLeftRadius = "18px";
        mini_bottle.style.borderBottomRightRadius = "18px";
        mini_bottle.style.marginRight = "10px";

        mini_bottle.appendChild(text_inside)

        row.appendChild(mini_bottle);
        
    }
    list_mini_glasses.appendChild(row);
}

let list_mini_glasses_v2 = document.querySelectorAll(".mini_bottle");

let main_bottle = document.querySelector(".bottle");

let pourcentag = document.createElement("div");

pourcentag.classList.add("percentage");

let waterElement = document.querySelector(".water");

function fillBottle(index) {
    // calculate height of height
    let waterHeight = 12.5 * (index + 1);
    
    // ajust size of water in bottle
    waterElement.style.height = `${waterHeight}%`;
    
    // calculate liter remaining
    let remainingLiters = 2 - (waterHeight / 100) * 2;
    
    // maj counter of liter
    document.querySelector("#liter_cpt").style.color = "grey";
    document.querySelector("#liter_cpt").nextElementSibling.style.color = "grey";
    document.querySelector("#liter_cpt").innerText = remainingLiters.toFixed(2) + "L";

    pourcentag.innerText = waterHeight.toFixed(2) + "%";
    waterElement.appendChild(pourcentag);
    document.querySelector("#liter_cpt").style.top = `-${waterHeight}%`;
    pourcentag.style.color = `white`;
    pourcentag.style.paddingLeft = `25%`;
 
    
        if (waterHeight === 50) {
            document.querySelector("#liter_cpt").display = "none";
        } else {
            document.querySelector("#liter_cpt").display = "block";
        }

    document.querySelector("#liter_cpt").style.zIndex = "1";
    document.querySelector("#liter_cpt").nextElementSibling.style.zIndex = "1";

}

list_mini_glasses_v2.forEach(( glasse , index) => {


    glasse.style.background = "rgb(66, 230, 245)"
    glasse.addEventListener( "click", ()=>{
        console.log("hello");   
        setTimeout(fillBottle(index), 2000)
        // main_bottle.appendChild(pourcentage
        
        // glasse.style.background = "white"
        // glasse.style.textColor = "white"

    }); 
    
})

