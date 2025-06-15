export function createGallery(images) {
    return images.map(({webformatURL,largeImageURL,tags ,likes,views,comments,downloads,})=>`
      <li class="list-item">
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" width="360"/>
      </a>
       <div class="info">
          <p>Likes ${likes}</p>
          <p>Views ${views}</p>
          <p>Comments ${comments}</p>
          <p>Downloads ${downloads}</p>
        </div>
        
      </li>  
        `).join("");}
export function clearGallery(){
    const gallery=document.querySelector(".gallery");
     gallery.innerHTML = "";
}
export function showLoader(){
   const loader=document.querySelector(".loader");
   if (loader) loader.classList.remove("hidden");
}
export function hideLoader(){
    const loader=document.querySelector(".loader");
   if (loader) loader.classList.add("hidden");
}