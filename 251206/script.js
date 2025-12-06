var outputElement = document.getElementById('target');

// event Hander function
function handlerDOMFunction() {
    outputElement.textContent = 'Handler - DOM Clicked';
}

// event Listener function
function listenerFunction() {
    outputElement.textContent = 'Listener Clicked';
}

document.getElementById('handlerDOM').onclick = handlerDOMFunction;
document.getElementById('listener').addEventListener('click', listenerFunction);

var listenerButton = document.getElementById('listener');

// another event listener
listenerButton.addEventListener('click', function() {
    outputElement.textContent += ' + Another Listener Clicked';
});