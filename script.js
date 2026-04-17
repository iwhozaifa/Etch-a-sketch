const container = document.querySelector("#container")

//Loop for creating the boxes
for(let i = 0; i < 256; i++){
  const box = document.createElement("div")
  box.classList.add("boxes") 
  box.dataset.count = 0
  container.appendChild(box)
}

//Function for controlling the event listeners 
container.addEventListener('mouseover', (e) => {
  const target = e.target

  if (target.classList.contains("boxes")){
    let count = parseInt(target.dataset.count);
    
    if (count < 10) {
      count++
      target.dataset.count = count
      const lightness = 100 - (count * 10)
      const hue = count * 36
  
      target.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`
    }
  }
});

