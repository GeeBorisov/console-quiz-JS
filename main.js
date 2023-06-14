(function() {
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function() {
        console.log("%c" + this.question, "background: #424242; color: #FAFAFA");
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ". " + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callback) {
        let innerScore;
        if(answer === this.correct) {
            console.log("%c Правильный ответ!", "background: #66BB6A; color: #FAFAFA");
            innerScore = callback(true);
        } else {
            console.log("%c Не верный ответ. Попробуйте еще раз.", "background: #EF5350; color: #FAFAFA");
            innerScore = callback(false);
        }
        this.displayScore(innerScore);
    };

    Question.prototype.displayScore = function(score) {
        console.log("%c Ваш счет равен:" + score, "background: #F88C00; color: #FAFAFA");
    }
    
    let q1 = new Question("JavaScript самый лучший язый программирования",["да", "нет"], 0);
    let q2 = new Question("This внутри метода всегда ссылается на:",["Window", "Document", "Объект"], 2);
    let q3 = new Question("Что такое scope в JavaScript",["Документ с разметкой", "Все методы внутри объекта", "Движок JS", "Область видимости"], 3);
    
    let questions = [q1, q2, q3];

    function score() {
        let scoreValue = 0;
        return function(correct) {
            if(correct) {
                scoreValue++;
            }
            return scoreValue;
        }
    }

    let keepScore = score();

    function nextQuestion() {
        let n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestion();
        
        let answer = prompt("Введите номер верного ответа:");
        
        questions[n].checkAnswer(parseInt(answer), keepScore);

        if (answer !== "exit" && answer !== null) {
            nextQuestion();
        }

    }
    nextQuestion();
})();





