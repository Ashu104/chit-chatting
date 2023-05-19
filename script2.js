const chatContainer = document.getElementById('chat-container');
const questionInput = document.getElementById('question-input');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');

document.getElementById('question-input').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
    submitBtn.click(); // Trigger the click event on the submit button
    questionInput.value = ''; // Clear the input value
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const question = questionInput.value;
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerText = question;
  
  chatContainer.appendChild(questionElement);
  
  fetch('/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: question })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
    })
    .catch(error => {
      // Handle any errors that occur during the request
    });

  questionInput.value = ''; // Clear the input value
});
