//Change to post form when button is clicked
document.getElementById('new-post-form').addEventListener('click', function() {
    //alert("button was clicked");
    document.location.replace('/dashboard/create');
  });

//Add Post
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_con = document.querySelector('input[name="post_con"]').value;
  
    // const response = await fetch(`/dashboard/create`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title,
    //     post_con
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    fetch('/api/posts',{
        //'/dashboard/create', {
        method: 'POST',
      body: JSON.stringify({
        title,
        post_con
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
        document.location.replace('/dashboard');
        alert(response.statusText);
    }).catch(error => console.log(error))

  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
  }
  
   document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
