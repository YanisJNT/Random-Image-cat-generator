const boxDog = document.querySelector(".cat")
const buttonGenerator = document.querySelector("a")

buttonGenerator.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch("http://aws.random.cat/meow")
        .then(response=>response.json())
        .then(data =>{
            boxDog.innerHTML = `<img src="${data.file}" alt="">`
        })
})