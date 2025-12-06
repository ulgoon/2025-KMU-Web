var outputElement = document.getElementById('target');

// Handler function for DOM0 event handler
function handlerDOMFunction() {
    outputElement.textContent = 'Handler - DOM Clicked';
}

// Listener function for addEventListener
function listenerFunction() {
    outputElement.textContent = 'Listener Clicked';
}

document.getElementById('handlerDOM').onclick = handlerDOMFunction;
document.getElementById('listener').addEventListener('click', listenerFunction);

var listenerButton = document.getElementById('listener');

listenerButton.addEventListener('click', function() {
    outputElement.textContent += ' + Another Listener Clicked';
});