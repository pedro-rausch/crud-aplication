var userIndex = 0;
var inputName, inputUsername;
const usersList = [];
var updateStateButton = {
    isOn: false,
    id: null
};

class User {
    constructor(id, name, username){
       this.id = id;
       this.name = name; 
       this.username = username;       
    }
}

function getInput(){
    inputName = document.querySelector('#input-name');
    inputUsername = document.querySelector('#input-username'); 
}

function clearInputField(){
    inputName.value = "";
    inputUsername.value = "";
}

const sendData = document.querySelector('#add-button');
sendData.onclick = (event) => { 
    event.preventDefault();
    getInput(); 

    if(updateStateButton.isOn){
       updateUser(inputName, inputUsername); 
       clearInputField();
       return;
    }
    addUser(inputName, inputUsername);  
    clearInputField();
};

function addUser(userName, userUsername){
    newUser = new User(userIndex, userName.value, userUsername.value);  
    usersList.push(newUser);

    let table = document.querySelector('table');
    table.innerHTML += `
        <tr id="${newUser.id}">
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.username}</td>
            <td><button id="${newUser.id}" onclick = "removeUser(${newUser.id})">Delete</button></td>
            <td><button id="${newUser.id}" onclick = "atualizeUpdateState(${newUser.id})">Update</button></td>
        </tr>
    `;    
   userIndex += 1;
}

function removeUser(userId){
    usersList[userId].remove;
    document.getElementById(userId).remove();
}

function atualizeUpdateState(id){
    updateStateButton.isOn =  true;    
    updateStateButton.id = id; 
}

function updateUser(newName, newUsername){
    if(newName.value === ""){
        newName = usersList.find((user)=>{
            return user.id === updateStateButton.id;
        }).name;
    } 
    else {
        newName = newName.value;
        currentIndex = usersList.findIndex((user) => user.id == updateStateButton.id);
        usersList[currentIndex].name = newName;
    }

    if(newUsername.value === ""){
        newUsername = usersList.find((user)=>{
            return user.id === updateStateButton.id;
        }).username;
    }
    else {
        newUsername = newUsername.value;
        currentIndex = usersList.findIndex((user) => user.id == updateStateButton.id);
        usersList[currentIndex].username = newUsername;
    }
    
    document.getElementById(updateStateButton.id).innerHTML = `
        <td>${updateStateButton.id}</td>
        <td>${newName}</td>
        <td>${newUsername}</td>
        <td><button id="${updateStateButton.id}" onclick = "removeUser(${updateStateButton.id})">Delete</button></td>
        <td><button id="${updateStateButton.id}" onclick = "atualizeUpdateState(${updateStateButton.id})">Update</button></td>
    `;  
    updateStateButton.isOn = false;
}









/*
const addUser = document.querySelector('#add-button');
addUser.onclick = (event) => { 
    event.preventDefault() 
    const name = document.querySelector('#input-name');
    const username = document.querySelector('#input-username');    
    newUser = new User(userIndex, name.value, username.value);  
    usersList.push(newUser);

    let table = document.querySelector('table');
    table.innerHTML += `
        <tr id="${newUser.id}">
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.username}</td>
            <td><button id="${newUser.id}" onclick = "remove(${newUser.id})">Delete</button></td>
            <td><button id="${newUser.id}" onclick = "forceNewInput(${newUser.id})">Delete</button></td>
        </tr>
    `;    
   userIndex += 1;
};*/
