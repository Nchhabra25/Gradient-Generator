const colorinputs=document.querySelectorAll(".colors input")
const gradientBox=document.querySelector(".box")
const selectMenu=document.querySelector(".select-box select")
const textarea=document.querySelector("textarea")
const directionbutton=document.querySelector(".directionbtn")
const newbtn=document.querySelector(".new")
const copyBtn=document.querySelector(".copy")

const getRandomColor=()=>{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`
}

const generateGradient=(direction,isRandom)=>{
    if(isRandom){
        colorinputs[0].value=getRandomColor();
        colorinputs[1].value=getRandomColor();
    }
    const atPosition = direction === "radial" ? "at " : ""; 
    const select= direction==="radial"? selectMenu.value.substring(3):selectMenu.value
    console.log(select)
    const gradient=`${direction}-gradient(${atPosition}${select}, ${colorinputs[0].value}, ${colorinputs[1].value})`;
    console.log(gradient)
    gradientBox.style.background=gradient;
    textarea.value=`background: ${gradient};`
}

const copycode=()=>{
    navigator.clipboard.writeText(textarea.value)
    copyBtn.innerText="Code Copied!"
    setTimeout(()=>copyBtn.innerText="Copy Code",1600)
}

directionbutton.addEventListener("click",()=>{
    console.log('done');
    generateGradient("radial",false)
})

colorinputs.forEach(input => {
    input.addEventListener("input", ()=>generateGradient('linear',false));
});

selectMenu.addEventListener("change",()=> generateGradient('linear',false));

newbtn.addEventListener("click",()=>generateGradient("linear",true))

copyBtn.addEventListener("click",()=>copycode())