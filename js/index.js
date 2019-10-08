const selectedQuestions = qAndA.sort( () => {return (Math.random() - Math.random()) }).slice(0, 5);
let score = 0;
let questionIndex = 0;

const gradeQuestions = (ans) => {
    if (ans == selectedQuestions[questionIndex].answer) {
        score += 10;
    }
    questionIndex += 1;

};


const renderSuccess = () => {
    console.log('final score is ' + score + ' on 50')
    $('.question-number').text('');
    $('.question-question').text('');
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');
    if (score >= 50) {
        $('<p>Congrats!!!</p>').appendTo('.question-question');
    }
    else {
        $('<p> Try Again!')
    }
}

const renderQuestion = (qIndex) => {
    let question = selectedQuestions[qIndex];
    $('.question-number').text('que' + (qIndex + 1));
    $('.question-question').text(question.question);
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');


    question.option.forEach((element, i) => {

        let opt = '.option' + (i + 1);
        let radioBut = $('<input type ="radio" name="answer" value=' + element + ' />');
        let radiolabel = $('<label for=' + element + '>' + element + '</label> + ');
        radioBut.appendTo(opt);
        radiolabel.appendTo(opt);
    });

    $(".question-options input:radio[name='answer']").click(function () {
        if (questionIndex == (selectedQuestions.length-1)) {
            gradeQuestions(this.value);

            renderSuccess();
        }
        else {
            gradeQuestions(this.value);
            renderQuestion(questionIndex);
        }

    });
};


$(document).ready(function () {
    renderQuestion(questionIndex);
});  
