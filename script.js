const container = document.querySelector("#container")


for(let i = 0; i < 256; i++){
  const box = document.createElement("div")
  box.classList.add("boxes")
  container.appendChild(box)
}

const cont = document.querySelectorAll(".boxes")

cont.forEach(box => {
  
box.addEventListener('mouseover', () =>{
  box.style.backgroundColor = ""
})

box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = "red"
})
});
