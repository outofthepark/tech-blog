async function editFormHandler(event) {
    event.preventDefault();
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

  //This time, you'll need to capture the id of the post as well as the value of the post-title form element. The id will be included in the URL of the PUT request (e.g., /api/posts/${id}), but the title will need to be part of the body. Remember that the body will also need to be stringified.