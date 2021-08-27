async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('#post-body-input').value;
    if(title == ''){
      document.alert('This post needs a title!')
      return;
    }else if(post_body == ''){
      document.alert('This post needs a body!')
      return;
    }
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          post_body: post_body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace(`/post/${id}`);

      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

  //TODO Test this
  //This time, you'll need to capture the id of the post as well as the value of the post-title form element. 
  //The id will be included in the URL of the PUT request (e.g., /api/posts/${id}), but the title will need to be part of the body. 
  //Remember that the body will also need to be stringified.