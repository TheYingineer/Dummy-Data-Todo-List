    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = []
    // this allow it to create an array that will be capable to hold the entire list of array 


    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    //tell it to go get all the info off their website


    //************************************* */

    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    //the logTodo button display the entire list from fetching info from the website here after you click on it.Here we declared it as a constant
    
    //**************************************** */


    const populateTodos = () => {
        const todolist = document.getElementById('todo-list')

        for(i=0; i<arrayOfTodos.length; i++){
       
            const Mynewbulletlist = document.createElement('li')

            const Newgathercontent = document.createTextNode(arrayOfTodos[i].title)


            //to put contents back in list and the entire list, you need to use appendChild:            
            Mynewbulletlist.appendChild(Newgathercontent) //putting content into newliEment

            todolist.appendChild(Mynewbulletlist)//putting the li that holds the contents into the todolist
        
        }
    }
    //The populateTodos button will relist all of the new gather info from the website and relist on the browser
    