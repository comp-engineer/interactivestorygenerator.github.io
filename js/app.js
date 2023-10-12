// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var storyParts = {
	subject: ["The cat", "A magician", "The robot"],
    verb: ["runs", "jumps", "flies"],
    adjective: ["red", "tall", "fast"],
    noun: ["apple", "dog", "car"],
    place: ["park", "mall", "school"]
};
var storyOutput = document.getElementById('storyOutput');

/* Functions */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function generatePart(part) {
    var randomIndex = Math.floor(Math.random() * storyParts[part].length);
    textToSpeak += storyParts[part][randomIndex] + " ";
    storyOutput.innerHTML = textToSpeak;
}

function playStory() {
    speakNow(textToSpeak);
}

function generateRandomStory() {
    textToSpeak = '';
    for (let part in storyParts) {
        generatePart(part);
    }
    playStory();
}

function resetStory() {
    textToSpeak = '';
    storyOutput.innerHTML = '';
}


