const guess = document.getElementById('guess');
const guessSubmit = document.getElementById('guess-submit');
const answer = document.getElementById('answer');

guessSubmit.addEventListener('click', (e) => {
  if (guess.value === answer.innerHTML) {
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
  answer.style.display = 'block';
});
