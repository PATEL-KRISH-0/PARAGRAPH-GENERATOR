const peras = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae."
]

const output = document.querySelector(".output");
const submit = document.querySelector(".Submit");

submit.addEventListener("click", () => {
    output.innerHTML = ""
    const number = document.getElementById("number").value
    if (peras.length-1 < number) {
        alert("Please Enter valid value")
        return
    }
    for (let index = 0; index < number; index++) {
        output.insertAdjacentHTML('beforeend', `<p>${peras[index]}</p>`)
    }
})


