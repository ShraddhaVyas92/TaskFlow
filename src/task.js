
async function fetchTaskData() {
    try {
        const response = await fetch('https://dummyjson.com/todos'); // Alternative public API
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Task Data:', data.todos);
        
        displayTasks(data.todos);
    } catch (error) {
        console.error('Error fetching task data:', error);
    }
}

function displayTasks(tasks) {

    
    const taskContainer = document.getElementById('taskContainer');
    const taskList = document.createElement('ul');
    taskContainer.appendChild(taskList);

    tasks.forEach(task => {
        const listItem = document.createElement('li');
       // const Add=document.createElement('button');
        listItem.textContent = `${task.todo}`;
       // Add.textContent = 'Add';
        listItem.classList.add(task.completed ? 'completed' : 'pending');
        taskList.appendChild(listItem);
        //taskList.appendChild(Add);
    });
}
// Call the function
fetchTaskData();
