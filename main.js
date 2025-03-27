// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the .hidden class to the error modal initially
document.getElementById('modal').classList.add('hidden');

// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      const modal = document.getElementById('modal');
      modal.classList.remove('hidden');
      modal.querySelector('#modal-message').innerText = error;
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listeners to all heart elements
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', handleHeartClick);
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
