function addingEventListener() {
    const input = document.getElementById('button');
  
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  addingEventListener(); // Call the function to attach the event listener  