// Features
let bookmarking = document.querySelector('#bookmarking'),
    searching = document.querySelector('#searching'),
    sharing = document.querySelector('#sharing');
    tabs = document.querySelector('.feature-tabs');

let bookmarkContent = document.querySelector('.bookmark');





tabs.addEventListener('click', function(e) {
  let searchClick = searching.contains(event.target);
  let shareClick = sharing.contains(event.target);
  let bookClick = bookmarking.contains(event.target);
  if(!searchClick) {
    searching.classList.remove('current');
  }
  if(!shareClick){
    sharing.classList.remove('current');
  }
  if(!bookClick){
    bookmarking.classList.remove('current');
  }
})


bookmarking.addEventListener('click', function(e) {
  e.preventDefault();
  if(bookmarking.contains(e.target)){
    bookmarking.classList.add('current');
  }

  bookmarkContent.innerHTML =
  `
    <div class="left-side">
      <img src="/images/illustration-features-tab-1.svg" alt="Feature">
    </div>
    <div class="right-side">
      <h2>Bookmark in one click</h2>
      <p class="opacity-6">
        Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.
      </p>
      <a class="btn "href="#">More Info</a>
    </div>
  `
});



searching.addEventListener('click', function(e) {
  e.preventDefault();

  if(searching.contains(e.target)){
    searching.classList.add('current');
  }

  bookmarkContent.innerHTML = 
  `
    <div class="left-side">
      <img src="/images/illustration-features-tab-2.svg" alt="Feature">
    </div>
    <div class="right-side">
      <h2>Intelligent search</h2>
      <p class="opacity-6">
        Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.
      </p>
      <a class="btn "href="#">More Info</a>
    </div>
  `
})

sharing.addEventListener('click', function(e) {
  e.preventDefault();

  if(sharing.contains(e.target)){
    sharing.classList.add('current');
  }

  bookmarkContent.innerHTML = 
  `
  <div class="left-side">
      <img src="/images/illustration-features-tab-3.svg" alt="Feature">
  </div>
  <div class="right-side">
    <h2>Share your bookmarks</h2>
    <p class="opacity-6">
      Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.
    </p>
    <a class="btn "href="#">More Info</a>
  </div>
  `
})
