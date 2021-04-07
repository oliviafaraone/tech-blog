
//LOGIN
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function () {
            document.location.replace('/dashboard');
        }).catch(error => console.log(error))

    }
}
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);



    document.getElementById("opt2").onclick = function changeInfo() {
               // Change text to sign in
               var signIn = document.getElementById("signIn");
               signIn.innerHTML = "Sign Up";
               var signIn = document.getElementById("opt1");
               signIn.innerHTML = "Sign Up!";
               var signIn = document.getElementById("opt2");
               signIn.innerHTML = "Log in instead";

               document.getElementById(loginForm).className = "signup-form";
               
    };

    //SIGN UP
    async function signupFormHandler(event) {
        event.preventDefault();
        const username = document.querySelector('#username-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            // check the response status
            if (response.ok) {
                console.log('success');
            } else {
                alert(response.statusText);
            }
        }

    }

   document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

