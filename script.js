// Select the HTML elements
const questionInput = document.getElementById("question-input");
const submitBtn = document.getElementById("submit-btn");
const chatContainer = document.getElementById("chat-container");

// Add event listener to the submit button
submitBtn.addEventListener("click", async () => {
  // Get the question from the input field
  const question = questionInput.value;

  // Clear the input field
  questionInput.value = "";

  // Send the question to the server for processing
  const response = await fetch(`/api/ask?q=${question}`);

  // Get the answer from the response
  const answer = await response.json();

  // Append the answer to the chat container
  const answerElement = document.createElement("div");
  answerElement.classList.add("answer");
  answerElement.textContent = answer.answer;
  chatContainer.appendChild(answerElement);

  // Convert the answer to speech
  const audioResponse = await fetch(`/api/tts?q=${answer.answer}`);
  const audioBlob = await audioResponse.blob();
  const audioUrl = URL.createObjectURL(audioBlob);

  // Play the speech
  const audioElement = new Audio(audioUrl);
  audioElement.play();
});
