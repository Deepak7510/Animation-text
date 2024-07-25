// const text=document.querySelectorAll(".text >span");
// console.log(text);

// let i=0;
// let setInt;
// setInt=setInterval(function(){
//     text[i].style.animationName="wave";
//     console.log(i)
//     i++;
    
//     if(i===text.length){
//         clearInterval(setInt)
//     }
// },50)


const text=document.querySelectorAll(".text span");

let i=0;
const set=setInterval(() => {
    text[i].style.animationName="wave";
    i++;
    if(i==text.length){
        clearInterval(set);
    }
}, 100);
