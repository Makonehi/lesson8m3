let start = document.getElementById('start');
let title;
let input;
let body = document.body;
let preTitle;
let img1;
let img2;
start.addEventListener('click', ()=>{
    start.parentNode.removeChild(start);

    title = document.createElement("h1");
    input = document.createElement("input");

    title.textContent = "Enter your name!";
    body.append(title);
    body.append(input);


    input.addEventListener("keyup", (event)=>{
        if (event.code === 'Enter'){
            title.textContent = `Hello, ${input.value}!`;
            input.parentNode.removeChild(input);

            setTimeout(()=>{
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 2000);
        }
    })

})

// function  iLoveMath(){
//     title = document.createElement("h1");
//     input = document.createElement("input");
//     preTitle = document.createElement("p");
//
//     title.textContent = "Сколько будет 2 * 8";
//
//     body.append(title);
//     body.append(input);
//     body.append(preTitle);
//
//     input.addEventListener("keyup", (event)=>{
//         if (event.code === "Enter"){
//             if (input.value == 16){
//                 input.parentNode.removeChild(input);
//                 preTitle.textContent = "Верно!";
//                 setTimeout(()=>{
//                     title.parentNode.removeChild(title);
//                     preTitle.parentNode.removeChild(preTitle);
//                 }, 2000)
//             }
//             else{
//                 preTitle.textContent = "Неверно!";
//                 input.value = "";
//             }
//         }
//     })
// }

function  createTextLevel(question, answer, nextLevel){
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(preTitle);

    input.addEventListener("keyup", (event)=>{
        if (event.code === "Enter"){
            if (input.value.toLowerCase() == answer){
                input.parentNode.removeChild(input);
                preTitle.textContent = "Верно!";
                setTimeout(()=>{
                    title.parentNode.removeChild(title);
                    preTitle.parentNode.removeChild(preTitle);
                    if(nextLevel != null){
                        nextLevel();
                    }
                }, 2000)
            }
            else{
                preTitle.textContent = "Неверно!";
                input.value = "";
            }
        }
    })
}

function iLoveMath(){
    createTextLevel("Сколько будет 6 * 8", 48, iLoveGeography);
}

function iLoveGeography(){
    createTextLevel("Назоваите сталицу Догестана♦", "махачкала", iLoveBiology);

}
function iLoveBiology() {
    createTextLevel("Назовите из какого дерева делают спички", "осина", iLoveMount);
}



function createIMGLevel(question, falseLink, trueLink, nextLevel){
    title = document.createElement("h1");
    preTitle = document.createElement("p");

    img1 = document.createElement("img");
    img2 = document.createElement("img");

    if(Math.floor(Math.random() * 10) % 2 === 1){
        img1.src= falseLink;
        img2.src= trueLink;
    }else{
        img1.src= trueLink;
        img2.src= falseLink;
    }

    img1.src= falseLink;
    img2.src= trueLink;

    title.textContent = question;

    body.append(title);
    body.append(preTitle);
    body.append(img1);
    body.append(img2);
    img2.addEventListener("click", ()=>{
        preTitle.textContent = "Неверно!";
    })
    img1.addEventListener("click", ()=>{
        img1.parentNode.removeChild(img1);
        img2.parentNode.removeChild(img2);
        preTitle.textContent = "Верно!"

        setTimeout(()=>{
            title.parentNode.removeChild(title);
            preTitle.parentNode.removeChild(preTitle);
            if(nextLevel != null){
                nextLevel();
            }
        }, 2000)

    })
}

function iLoveMount(){
    createIMGLevel("На какой картинке Москва", "./img1.jpg", "./img2.jpg", iLoveHistory)
}
function iLOvaHistory(question, answer, nextLevel){
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(preTitle);
    input.addEventListener("keyup", (event)=>{
        if (event.code === "Enter"){
            if (input.value.toLowerCase() == answer){
                input.parentNode.removeChild(input);
                preTitle.textContent = "Верно!";
                setTimeout(()=>{
                    title.parentNode.removeChild(title);
                    preTitle.parentNode.removeChild(preTitle);
                    if(nextLevel != null){
                        nextLevel();
                    }
                }, 2000)
            }
            else{
                preTitle.textContent = "Неверно!";
                input.value = "";
            }
        }
    })

}

function iLoveHistory(){
    iLOvaHistory("Какая страна была самой первой", "россия", iLoveGeometry)
}
function iLoveGeometry(){
    iLOvaHistory("Какой градусов в прямом углу", '90', iLoveGeometry2)
}
function iLoveGeometry2(){
    iLOvaHistory("Сколько градусов в обратном углу", '270', null)
}

