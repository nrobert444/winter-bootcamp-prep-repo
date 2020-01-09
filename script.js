 const helloText =
 document.getElementById('the-name');

 const myInput = document.getElementById('myInput');

 const button = document.getElementById('submit');

 const changeName = () => {
     helloText.textContent = myInput.value;
 };

button.addEventListener('click', changeName);


//const myName = prompt('What is your name?');

//helloText.textContent = myName;

//helloText.textContent = "greetings";
//helloText.style.color = 'green';


/*for (let i=0; i < 15; i ++){
    if (i < 10){
        console.log('fizz');
    } else if (i >= 10 ) {
        console.log('buzz');
    }
} */