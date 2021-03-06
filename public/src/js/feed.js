var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';

  if(defferedPrompt) {
    defferedPrompt.prompt()

    defferedPrompt.userChoice.then(choice => {
      console.log(choice.outcome)

      if(choice.outcome === 'dismissed') {
        console.log("User Cancelled installation")
      } else {
        console.log("User added to home screen")
      }
    })

    defferedPrompt = null
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
