document.addEventListener("DOMContentLoaded", openStartModal());
const questions = [
    {
        question: "What does HTTP mean?",
        optionA: " Hypertext Transit Protocol",
        optionB: " Hypertext Transfer Protocol",
        optionC: "Hypertext Transfer Program",
        optionD: "Hypertransfer text protocol",
        correctOption: "optionB"
    },

    {
        question: "What does URL mean?",
        optionA: "Uniform Resource Locator",
        optionB: "Unified Resource Locator",
        optionC: "Unitop Resource Locator",
        optionD: "uni rescource locator",
        correctOption: "optionA"
    },

    {
        question: "What does FTP stand for?",
        optionA: "Files To Put online",
        optionB: "Files To Put Offline",
        optionC: "File Transfer Protocol",
        optionD: "File Transfer Please",
        correctOption: "optionC"
    },

    {
        question: "What organization does domain net represents for?",
        optionA: "Network Signal",
        optionB: "Network Provider",
        optionC: "Internet",
        optionD: "Network",
        correctOption: "optionB"
    },

    {
        question: "How many hours in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "What organization does domain edu represents for?",
        optionA: "Educational Institution",
        optionB: "Government Institution",
        optionC: "Private Institution",
        optionD: "All Of The Above",
        correctOption: "optionA"
    },

    {
        question: "What does FTP stand for?",
        optionA: "Files To Put online",
        optionB: "Files To Put Offline",
        optionC: "File Transfer Protocol",
        optionD: "File Transfer Please",
        correctOption: "optionC"
    },

    {
        question: "To create a combo box (drop down) which tag will you use?",
        optionA: "select",
        optionB: "dropdown",
        optionC: "option",
        optionD: "list",
        correctOption: "optionB"
    },

    {
        question: "What does HTML stand for?",
        optionA: "Hyper Tag Markup Language",
        optionB: "Hyper Text Markup Language",
        optionC: "Hyperlinks Text Mark Language",
        optionD: "Hyperlinking Text Marking Language",
        correctOption: "optionB"
    },

    {
        question: "HTML is what type of language ?",
        optionA: "Scripting Language",
        optionB: "Radio ButtonNetwork Protocol",
        optionC: "Radio ButtonProgramming Language",
        optionD: "Radio ButtonMarkup Language",
        correctOption: "optionA"
    },

    {
        question: "Which tag creates a check box for a form in HTML?",
        optionA: "input checkbox",
        optionB: "checkbox",
        optionC: "input type=checkbox",
        optionD: "input type=checkb",
        correctOption: "optionC"
    },

    {
        question: "What should be the first tag in any HTML document?",
        optionA: "html",
        optionB: "head",
        optionC: "title",
        optionD: "document",
        correctOption: "optionA"
    },


    {
        question: "What tag is used to display a picture in an HTML page?",
        optionA: "Picture",
        optionB: "Image",
        optionC: "Img",
        optionD: "Src",
        correctOption: "optionC"
    },

    {
        question: "What is the correct HTML tag for inserting a line break?",
        optionA: "br",
        optionB: "lr",
        optionC: "break",
        optionD: "b",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is not a browser ?",
        optionA: " Microsofts Bing",
        optionB: "Netscape Navigator",
        optionC: "Mozilla Firefox",
        optionD: "Opera",
        correctOption: "optionB"
    },

    {
        question: " Choose the correct HTML tag to make a text italic",
        optionA: "ii ",
        optionB: "italics",
        optionC: "italic",
        optionD: "i",
        correctOption: "optionC"
    },

    {
        question: "What does the acronym WWW stand for?",
        optionA: "World Wide Web",
        optionB: "Wide Wall Web",
        optionC: "Web World Wall",
        optionD: "Web Wide Wave",
        correctOption: "optionA"
    },

    {
        question: "The web is based on",
        optionA: "HTML",
        optionB: "PHP",
        optionC: "INFORMATION",
        optionD: "CSS",
        correctOption: "optionC"
    },

    {
        question: "What is the predominant markup language for web pages?",
        optionA: "CSS",
        optionB: "JS",
        optionC: "PHP",
        optionD: "HTML",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: " Choose the correct HTML tag for the largest heading",
        optionA: "H6",
        optionB: "H1",
        optionC: "H4",
        optionD: "H5",
        correctOption: "optionB"
    },

    {
        question: "To create a combo box (drop down) which tag will you use?",
        optionA: "select",
        optionB: "dropdown",
        optionC: "option",
        optionD: "list",
        correctOption: "optionB"
    },

    {
        question: "What does CSS stand for?",
        optionA: "Computing Style Sheet",
        optionB: "Creative Style System",
        optionC: "Creative  System style",
        optionD: "Cascading Style Sheet",
        correctOption: "optionD"
    },

    {
        question: "Which of these is a genuine tag keyword?",
    
        optionA: " Header",
        optionB: " Bold",
        optionC: " Body",
        optionD: "Image",
        correctOption: "optionA"
    },

    {
        question: "What is the correct tag for a line break?",
        optionA: "brk /",
        optionB: "line /",
        optionC: "bk /",
        optionD: "br ",
        correctOption: "optionD"
    }

]

let shuffledQuestions = [] 
function handleQuestions() { 
  
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}
document.getElementById("display-question").style.fontSize= "20px";

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            playerScore--
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

   
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}
function openStartModal(){
    document.getElementById("start-modal").style.display="flex";
}

function closeStartModal(){
    document.getElementById('start-modal').style.display = "none"
}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    openStartModal();
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}