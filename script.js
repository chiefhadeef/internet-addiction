


function addElement() {
    var addingElement = document.createElement('h2'); 
    var elementText = document.createTextNode('Spam'); 
    addingElement.appendChild(elementText); 
    document.body.appendChild(addingElement); 
}
