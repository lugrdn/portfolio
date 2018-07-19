function ask() {
    if (question.value == '') {
        const answerText = document.getElementById("answerText");
        answerText.innerHTML = 'Please ask a question';
    }
    else {
        const answerText = document.getElementById("answerText");
        var answer;
        var answerList = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes - definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy, try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Dont count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',
        ]
        answer = Math.floor(Math.random() * Math.floor(20));
        answerText.innerHTML = answerList[answer];
    }
}