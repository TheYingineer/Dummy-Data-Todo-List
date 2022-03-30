    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = []
    // this allow it to create an array that will be capable to hold the entire list of array 

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    //tell it to go get all the info off their website


    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    //the logTodo button display the entire list from fetching info from the website here after you click on it.Here we declared it as a constant
    

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

    


    let User_input_ID_Array = []

    const matchuseridinfo = () => {
        // method 1
        let userid = document.getElementById('useridnumber').value
        User_input_ID_Array = arrayOfTodos.filter(todo => todo.userId == userid);

        // **************************

        // method 2
        // let usernewid = document.getElementById('usesrid#').value
        // for(i=0; i<arrayOfTodos.length; i++){
        //     if(arrayOfTodos[i].userId==usernewid){ //userId is from the Json page
        //         UserinputID.push(arrayOfTodos[i]) //writing the new line
        //     }
        // }

        // *********************
        // submitbutton()
        clearscreen() 
        new_Input_populate_list()
        //populate but use only userid 
        
    }
    
    function submitbutton () {
        userenterid = document.getElementById('useridnumber').value;
        document.getElementById('alert').innerHTML = 'The user input is: ' + userenterid;
    }

    grabnewtodolist = []
    const clearscreen = () => { 
        //(1) first select all of the LI HTML
        //(2) create a for loop to clear them from that array
        //(3rd) use .queryselectorall and .remove
        const grabnewtodolist = document.querySelectorAll('li')
        console.log(grabnewtodolist)

        grabnewtodolist.forEach(list => {
            list.parentNode.removeChild(list)
        })
        // for(i=0; i<grabnewtodolist.length; i++){
            // console.log(grabnewtodolist[i])
        // const ol =  document.querySelectorAll("#todo-list")
        // ol.removeChild(grabnewtodolist[i])
        // grabnewtodolist[i].parentNode.removeChild(grabnewtodolist[i])

            // const newLI = document.createElement('li')
            // console.log(newLI)

            // const NewLIcontent = document.createTextNode(grabnewtodolist[i].textContent)
            // console.log(NewLIcontent)

            // newLI.appendChild(NewLIcontent)
            // grabnewtodolist[i].appendChild(newLI) 
            // //can't get this one working :( 
           
            // //***************ASK************* */
            // var remove = grabnewtodolist.remove(newLI)
            // grabnewtodolist.appendChild(remove)
            // console.log(remove)
        // }
        console.log(grabnewtodolist)
    }

    const fetch_New_TODO = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => User_input_ID_Array = json)
    }


    const new_Input_populate_list = () => {    
        
        const inputid = document.getElementById('useridnumber').value
        console.log("user input value is:", inputid)
        console.log('BEFORE arrayOfTodos:', arrayOfTodos)
        arrayOfTodos = arrayOfTodos.filter(todo => {
            console.log('todo:', todo)
            console.log('todo.userId === parseInt(inputid):', todo.userId === parseInt(inputid))

            return todo.userId === parseInt(inputid)
        })
        console.log('AFTER arrayOfTodos:', arrayOfTodos)
        populateTodos()

        

    } 









//complete or not () 