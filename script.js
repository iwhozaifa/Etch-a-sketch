const container = document.querySelector("#container")


for(let i = 0; i < 256; i++){
  const box = document.createElement("div")
  box.classList.add("boxes") 
  container.appendChild(box)
}

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains("boxes")){
    e.target.style.backgroundColor = "red"
  }
})

container.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("boxes")) {
    e.target.style.backgroundColor = ""
  }
})

