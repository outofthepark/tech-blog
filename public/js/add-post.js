function discardDraft() {
  document.querySelector('input[name="post-title"]').value = '';
  document.querySelector('#post-body-input').value = '';
  document.querySelector('.my-posts').hidden = false;
  document.querySelector('.new-post-form').hidden = true;
  document.querySelector('.create-new-post').hidden = false;
}

function showForm(){
  document.querySelector('.my-posts').hidden = true;
  document.querySelector('.new-post-form').hidden = false;
  document.querySelector('.create-new-post').hidden = true;
}

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('#post-body-input').value;
    if(title == ""){
      alert('This post needs a title!')
      return;
    }else if(post_body == ""){
      alert('This post needs a body!')
      return;
    }
    
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.querySelector('.my-posts').hidden = false;
      document.querySelector('.new-post-form').hidden = true;
      document.querySelector('.create-new-post').hidden = false;
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.discard').addEventListener('click', discardDraft);
  document.querySelector('.create-new-post').addEventListener('click', showForm);
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  