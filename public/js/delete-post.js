async function deleteFormHandler(event) {
    event.preventDefault();
    console.log('got here');

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

  //When the button is clicked, you'll need to capture the id of the post and use fetch() to make a DELETE request to /api/posts/:id. 
  //If the request is successful, redirect the user using document.location.replace('/dashboard/'). 
  //Refer to the upvote.js and comment.js files for a reminder of how to get the id and make the request.