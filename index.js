/** @format */

const allQuestions = document.querySelectorAll('.main-item');
allQuestions.forEach(function (mainItem) {
  mainItem.addEventListener('click', function () {
    const answerOutput = mainItem.querySelector('.active');
    const arrow = mainItem.querySelector('.arrow');
    console.log(answerOutput);
    answerOutput.classList.toggle('shown');
    arrow.classList.toggle('rotate');
  });
});
