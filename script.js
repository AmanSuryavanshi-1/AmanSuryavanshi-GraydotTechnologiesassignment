// Function called when a drag operation starts
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.style.opacity = "0.4";
}

// Function called when a drag operation ends
function dragEnd(event) {
  event.target.style.opacity = "1";
}

// Function called when a drop event occurs
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var draggableElement = document.getElementById(data);
  event.target.appendChild(draggableElement);
  draggableElement.style.opacity = "1";
  document.getElementById("successMessage").style.display = "block";
  setTimeout(function() {
    document.getElementById("successMessage").style.display = "none";
  }, 1000); // Hide the delete message after 1 second
  document.getElementById("dropText").style.display = "none"; // Hide the drop text

}
// Function to handle delete item event
function deleteItem(event) {
  var item = event.target.parentNode;
  var container = item.parentNode;
  container.removeChild(item);
  document.getElementById("deleteMessage").style.display = "block";
  setTimeout(function() {
    document.getElementById("deleteMessage").style.display = "none";
  }, 1000); // Hide the delete message after 1 second
}

// Function called to allow elements to be dropped
function allowDrop(event) {
  event.preventDefault();
}

// Function called to reset the containers
function resetContainers() {
  var firstContainer = document.getElementById("firstContainer");
  var secondContainer = document.getElementById("secondContainer");
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
  while (secondContainer.firstChild) {
      firstContainer.appendChild(secondContainer.firstChild);
  }
}

