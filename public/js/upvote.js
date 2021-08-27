async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      
      if (response.ok) {
        document.location.reload();
      } else {
        //bad practice ://
        alert('You can only upvote an article once!')
      }
  }
  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);