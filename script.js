const config = {
    title: "Quick knowledge check!",
    question: "Can you list the 7 strategic priorities below?",
    input_tags: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7."
    ],
    text_answers: [
        "Customer Oriented",
        "Vendor Alignment",
        "Solutions Portfolio",
        "People",
        "Execution Excellence",
        "Data Driven",
        "Digital First"
    ],
    image_answers: [
        "https://a.storyblok.com/f/112136/x/2e1208780c/customer-orientated.svg",
        "https://a.storyblok.com/f/112136/x/4e5bd5570b/vendor-alignment.svg",
        "https://a.storyblok.com/f/112136/x/5f314c84e0/solutions-portfolio.svg",
        "https://a.storyblok.com/f/112136/x/4d04a811f0/execution-excellencce.svg",
        "https://a.storyblok.com/f/112136/x/986d08efd5/data-driven.svg",
        "https://a.storyblok.com/f/112136/x/fc44f2384a/digital-first.svg",
        "https://a.storyblok.com/f/112136/x/60697c886d/people.svg"
    ],
    header_img_on: true,
    header_img:"https://a.storyblok.com/f/112136/576x544/34a0f96cf5/thinking-8.png"
}

const image = document.getElementById('image')

if (config.header_img_on) {
    image.src = config.header_img
    image.style.display = 'flex'
}else{
    image.style.display = 'none'
} 


const title = document.getElementById('title')
title.textContent = config.title

const question = document.getElementById('question')
question.textContent = config.question

const answerContainer = document.getElementById('openContainer')
let i = 0
config.input_tags.forEach(e => {
    const newTag = document.createElement("p")
    newTag.textContent = config.input_tags[i] + " "
    const newInput = document.createElement("input")
    newInput.classList.add('input');
    newTag.appendChild(newInput)
    answerContainer.appendChild(newTag)
    i++
})

const checkContainer = document.getElementById('checkContainer')

let j = 0
config.text_answers.forEach(e => {
    const newCheck = document.createElement("p")
    newCheck.textContent = config.text_answers[j]
    newCheck.classList.add('answer')
    checkContainer.appendChild(newCheck)
    j++
})


const answers = document.querySelectorAll('.answer')

let k = 0
answers.forEach(element => {
    const newImage = document.createElement("img")
    newImage.src = config.image_answers[k]
    newImage.classList.add('answerImage')
    element.appendChild(newImage)
    k++
})

const reveal = document.getElementById("revealAnswers")
const tryAgain = document.getElementById("tryAgain")
const instructions = document.getElementById("instructions")
instructions.textContent =  "Click next video to proceed."
instructions.style.display = 'none'

reveal.addEventListener('click', () => {
    reveal.style.display = 'none';
    checkContainer.style.display = 'flex';
    const inputs = document.querySelectorAll('.input')
    const lowerAnswers = config.text_answers.map(element => {
        return element.toLowerCase().trim().replace(/ /g, "");
    })

    inputs.forEach(element => {
        const userAnswer = element.value.toLowerCase().trim().replace(/ /g, "");
        if (lowerAnswers.includes(userAnswer)) {
            element.className = 'inputCorrect'
            element.style.pointerEvents = 'none'
            instructions.style.display = 'flex'
        } else {
            element.className = 'inputIncorrect'
            element.style.pointerEvents = 'none'
            tryAgain.style.display = 'flex';
            instructions.style.display = 'flex'
        }
    });
})

const mainContainer = document.getElementById("mainContainer");
const endContainer =  document.getElementById("celebrationContainer");
const endImage = document.getElementById("celebration");
const endMessage = document.getElementById("thankYou");

endContainer.style.display = 'none'
endMessage.textContent = "Well done! Click the \"Next Video\" button to proceed now."
endImage.src = 'https://a.storyblok.com/f/112136/205x150/12867bb205/sporting-hero.png'

const endScreen = () => {
    endContainer.style.display = 'flex';
    mainContainer.style.display = 'none';
}

proceed.addEventListener('click', endScreen)

tryAgain.addEventListener('click', () => {
    window.location.reload()
})
