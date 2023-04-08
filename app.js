let simpleColor = ['Green','Red','Purple', 'White' ]
let hexColor = ['#F15025','#0000FF', '	#808080','#B22222','	#FF69B4','#FFFACD' ]
let rgbColor = [' Rgba(133,122,200)', 'rgb(240, 248, 255)','rgb	(255, 127, 80)']

let btn =document.querySelector('.btn')
let span1 =document.querySelector('span')
let simple =document.querySelector('.simple')
let hex =document.querySelector('.hex')
let rgb =document.querySelector('.rgb')
let first = false;
let second = false;
let third = false;

function randomNumber(){
    return  Math.floor(Math.random()*simpleColor.length)
 
}
simple.addEventListener('click',()=>{
    first = true;
    second = false
    third =false

})
hex.addEventListener('click',()=>{
    first = false;
    second = true
    third =false

})
rgb.addEventListener('click',()=>{
    first = false;
    second = false
    third =true

})


btn.addEventListener('click',()=>{
    if( first){
        let rand = randomNumber();
    document.body.style.backgroundColor = simpleColor[rand]
    span1.innerHTML = simpleColor[rand]
    console.log(simpleColor[rand])
}
else if (second){
    let rand = randomNumber();

    document.body.style.backgroundColor = hexColor[rand]
    span1.innerHTML = hexColor[rand]
    console.log(hexColor[rand])
}
else if (third){
    let rand = randomNumber();
    document.body.style.backgroundColor = rgbColor[rand]
    span1.innerHTML = rgbColor[rand]
    console.log(rgbColor[rand])
}
})