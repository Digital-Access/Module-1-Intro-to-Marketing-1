const config = {
    title: "Quick Knowledge Check!",
    question: "Can you list the 8 strategic priorities below?",
    input_tags: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8."
    ],
    text_answers: [
        "Answer1",
        "answer2",
        "Answer3",
        "Answer 4",
        "answer5",
        "Answer 6",
        "Answer7",
        "answer 8"
    ],
    image_answers: [
        "https://a.storyblok.com/f/112136/446x446/cf944b253b/1.png",
        "https://a.storyblok.com/f/112136/446x446/3ea9d4491c/2.png",
        "https://a.storyblok.com/f/112136/446x446/1cadc0e6c3/3.png",
        "https://a.storyblok.com/f/112136/446x446/0c7f465cc6/4.png",
        "https://a.storyblok.com/f/112136/446x446/b13001024e/7.png",
        "https://a.storyblok.com/f/112136/446x446/3a9b2b88c1/6.png",
        "https://a.storyblok.com/f/112136/446x446/d4cf5fb7e5/5.png",
        "https://a.storyblok.com/f/112136/446x446/189243343c/8.png"
    ],
    header_img_on: false,
    header_img:"https://a.storyblok.com/f/112136/130x160/731788149f/avatar_matt-owen.png"
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

reveal.addEventListener('click', () => {
    reveal.style.display = 'none';
    tryAgain.style.display = 'flex';
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
        } else {
            element.className = 'inputIncorrect'
            element.style.pointerEvents = 'none'
        }
    });
})

tryAgain.addEventListener('click', () => {
    window.location.reload()
})
