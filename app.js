// Define UI Variables
const form = document.querySelector('#task-form');
// The ul
const taskList = document.querySelector('.collection')
// The filter
const filter = document.querySelector('#filter');
// Clear Butto
const clearBtn = document.querySelector('.clear-tasks')
// The task input
const taskInput = document.querySelector('#task');




// Load all event listerners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}



// create Add task(addTask)
function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task')
  }

// Create an li element 
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icom html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);

//Append the li to the ul
taskList.appendChild(li);

//Clear the input
taskInput.value = '';


  e.preventDefault();
}


function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();
    }
    // console.log(e.target);
  }
}


function clearTasks(e) {
  // This clears everything BUT slower compared to looping through the taskList

 // taskList.innerHTML = ''; // Or

 while(taskList.firstChild) {
   taskList.removeChild(taskList.firstChild);
 }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //we can use a forEach loop because querySelectorAll returns a NodeList
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}