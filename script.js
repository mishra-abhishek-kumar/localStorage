const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);
        
        const formData = {
            userName: `${nameInput.value}`,
            userEmail: `${emailInput.value}`
        };
        saveFormDataToLocalStorage(formData);

        nameInput.value = '';
        emailInput.value = '';
    }
}

function saveFormDataToLocalStorage(formData) {
    //Getting available data from localStorage Or creating blank array
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    //pushing new formData(userData) to the above creaated/available array
    storedFormData.push(formData);
    //Updating localStorage with new Object Array
    localStorage.setItem('formData', JSON.stringify(storedFormData));
}