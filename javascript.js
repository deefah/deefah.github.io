


// console.log(input1)
// console.log(input2)
// console.log(input3)
// console.log(input4)



// var str = $("#fname").val();

function deefah(){

    let input1 = document.querySelector('.input1').value;
    let input2 = document.querySelector('.input2').value;
    let input3 = document.querySelector('.input3').value;
    let input4 = document.querySelector('.input4').value;

    localStorage.setItem("name",input1)
    localStorage.setItem("address",input2)
    localStorage.setItem("email",input3)
    localStorage.setItem("comment",input4)


}

let name = localStorage.getItem('name');
let address = localStorage.getItem('address');
let email = localStorage.getItem('email');
let comment = localStorage.getItem('comment');


    let store1 = document.querySelector('#name');
    let store2 = document.querySelector('#address');
    let store3 = document.querySelector('#email');
    let store4 = document.querySelector('#comments');


if(name && address){
    if(email && comment){
        store1.innerHTML = `name: ${name} `;
        store2.innerHTML = `address: ${address} `;
        store3.innerHTML = `email: ${email} `;
        store4.innerHTML = `comment: ${comment} `;
        

    }
}