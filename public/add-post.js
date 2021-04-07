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

    fetch('/api/posts',{
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
       // alert(response.statusText);
    }).catch(error => console.log(error))


  }
  
   document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
