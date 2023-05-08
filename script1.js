// select elements from the DOM
const chatContainer = document.getElementById('chat-container');
const questionInput = document.getElementById('question-input');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');

// add event listener to submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  // get the user's question from the input field
  const question = questionInput.value;
  
  // create a new element for the user's question
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerText ='Hello! How can I assist you?...';
  
  // add the user's question to the chat container
  chatContainer.appendChild(questionElement);
  
  // TODO: send the user's question to the server and get the response
  
  // create a new element for the server's response
  const answerElement = document.createElement('div');
  answerElement.className = 'answer';
  answerElement.innerText = answer; // TODO: replace with the actual response
  
  // add the server's response to the chat container
  //chatContainer.appendChild(answerElement);
  
  // clear the input field
  questionInput.value = '';
});

// add event listener to clear button
clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  // remove all elements from the chat container
  while (chatContainer.firstChild) {
    chatContainer.removeChild(chatContainer.firstChild);
  }
});
