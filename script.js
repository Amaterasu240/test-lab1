var form = document.getElementById('registrationForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Сховати всі попередні помилки
    var allErrors = document.getElementsByClassName('error-message');
    for (var i = 0; i < allErrors.length; i++) {
        allErrors[i].style.display = 'none';
    }
    document.getElementById('successMessage').style.display = 'none';
    
    var valid = true;
    
    // Перевірка імені
    var nameValue = nameInput.value.trim();
    if (nameValue === '') {
        document.getElementById('nameError').textContent = 'Поле "Ім\'я" не може бути порожнім';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }
    
    // Перевірка email
    var emailValue = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '') {
        document.getElementById('emailError').textContent = 'Поле "Email" не може бути порожнім';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!emailPattern.test(emailValue)) {
        document.getElementById('emailError').textContent = 'Невірний формат email';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }
    
    // Перевірка пароля
    var passwordValue = passwordInput.value;
    if (passwordValue === '') {
        document.getElementById('passwordError').textContent = 'Поле "Пароль" не може бути порожнім';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (passwordValue.length < 6) {
        document.getElementById('passwordError').textContent = 'Пароль має бути мінімум 6 символів';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }
    
    // Перевірка повтору пароля
    var confirmPasswordValue = confirmPasswordInput.value;
    if (confirmPasswordValue === '') {
        document.getElementById('confirmPasswordError').textContent = 'Підтвердіть пароль';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        document.getElementById('confirmPasswordError').textContent = 'Паролі не збігаються';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }
    
    // Якщо всі перевірки пройдені
    if (valid === true) {
        document.getElementById('successMessage').style.display = 'block';
        form.reset();
    }
});