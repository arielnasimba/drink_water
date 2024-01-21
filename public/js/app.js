// create mini bottles

let body = document.body;
let main_glasses = body.querySelector(".bott_box").querySelector(".list_mini_glasses");
console.log(main_glasses);
/////////////


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
    main_glasses.appendChild(row);
}
