let colorMode ='rgb'

let body= document.querySelector('#page-body') // body element 
let changeColorBtn = document.querySelector('#cahnge-color') // cahne color btn 
let colorCodeSpan = document.querySelector('#color-code') // span for showing generated color code
let rgbMenuIcon = document.querySelector('#rgb')// menu's link for rgb 
let hexMenuIcon = document.querySelector('#hex')//menu's link for hex 


let changeMode=(id)=>{
    if(id=='rgb'){
        colorMode='rgb'
    }
    else if(id=='hex'){
        colorMode='hex'
    }
}

rgbMenuIcon.addEventListener('click' , (e)=>{
    changeMode(e.target.id)
})
hexMenuIcon.addEventListener('click', (e)=>{
    changeMode(e.target.id)
})
let generateHEXColor=()=>{
    let hexCode = Math.floor(Math.random()*16777215).toString(16)
    colorCodeSpan.innerHTML='#'+hexCode
    body.style.backgroundColor='#'+hexCode
}
let generateRGBColorsCode =()=>{
    let rCode= Math.floor(Math.random()*255)// Red between 0 and 255
    let gCode=Math.floor(Math.random()*255)//Green between 0 and 255
    let bCode= Math.floor(Math.random()*255)//Blue between 0 and 255

    let MixedColors= rCode+','+gCode+','+bCode

    colorCodeSpan.innerHTML='rgb('+MixedColors+')'
    body.style.backgroundColor='rgb('+MixedColors+')'
}
window.addEventListener('load',  ()=>{
    console.log('here')
    generateRGBColorsCode()
})
changeColorBtn.addEventListener('click' , ()=>{
    if(colorMode=='rgb'){ 
        generateRGBColorsCode()
    }else{
        generateHEXColor()
    }
   
})