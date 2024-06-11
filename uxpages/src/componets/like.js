document.addEventListener("DOMContentLoaded", () => {
    loadLikes();
  });
  
  function likePost(postId) {
    const likeCountSpan = document.querySelector(`#${postId} .like-count`);
    let likeCount = parseInt(likeCountSpan.textContent, 10);
  
    // Incrementar o número de likes
    likeCount++;
    likeCountSpan.textContent = likeCount;
  
    // Salvar o número de likes no local storage
    localStorage.setItem(postId, likeCount);
  }
  
  function loadLikes() {
    const posts = document.querySelectorAll(".card-clients");
  
    posts.forEach(post => {
      const postId = post.id;
      const likeCountSpan = post.querySelector(".like-count");
  
      // Recuperar o número de likes do local storage
      const likeCount = localStorage.getItem(postId) || 25;
      likeCountSpan.textContent = likeCount;
    });
  }
  