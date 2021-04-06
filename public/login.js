
//LOGIN
  async function loginFormHandler(event) {
    event.preventDefault();
  
    // Change text to sign in
    // var signIn = document.getElementById("signIn");
    // signIn.innerHTML = "Login";
    // var signIn = document.getElementById("opt1");
    // signIn.innerHTML = "Login!";
    // var signIn = document.getElementById("opt2");
    // signIn.innerHTML = "Sign up instead";

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  //  document.getElementById("opt2").addEventListener('submit', signupFormHandler())

  }
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);



//document.getElementById("opt2").onclick = function() {signupFormHandler()};

  //SIGN UP
async function signupFormHandler(event) {
    event.preventDefault();

    // Change text to sign in
    // var signIn = document.getElementById("signIn");
    // signIn.innerHTML = "Sign Up";
    // var signIn = document.getElementById("opt1");
    // signIn.innerHTML = "Sign Up!";
    // var signIn = document.getElementById("opt2");
    // signIn.innerHTML = "Log in instead";
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //console.log(response);
            // check the response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
    //document.getElementById("opt2").onclick = function() {loginFormHandler(event)};
    //document.getElementById("opt2").addEventListener('submit', loginFormHandler())

  }
  
  // document.querySelector('.signup-form').addEventListener('submit', signupFormHandler());
  // document.querySelector('.signup-form').addEventListener('submit', signupFormHandler());

