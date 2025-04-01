document.getElementById('loginForm').addEventListener('submit', async (event) => {
   
    event.preventDefault(); // Анти субмішн при не коректному заповнені

    // Пошта і пароль з сайту
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // POST запит до сервера
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        
        const result = await response.text();
        if (response.ok) { // Перевірка успіху
            alert(result); 
            window.location.href = 'main_parent.html'; //Переадресація
        } else {
            alert(result); // повідомлення помилки
        }
    } catch (error) { //для випадків коли прям біда і нічо не фуричить
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
});