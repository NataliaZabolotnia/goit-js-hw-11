import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay-api";
import {createGallery} from "./js/render-functions"
import {clearGallery} from "./js/render-functions"
import {showLoader} from "./js/render-functions"
import {hideLoader} from "./js/render-functions"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const input=document.querySelector(".input-text");
const form=document.querySelector(".form");
const gallery=document.querySelector(".gallery");

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});


async  function handlesubmit(event){
event.preventDefault();
const query=input.value.trim();


clearGallery(); 
showLoader(); 

if (query === "") {
    iziToast.show({
        title: 'Warning',
        color: 'red',
        position: "topRight" ,
        message: 'Sorry, there are no images matching your search query. Please try again!'
    });
    return;
}




try {
    const data = await getImagesByQuery(query);
    if (data.hits.length=== 0) {
        iziToast.show({
            title: 'Hey',
            color: 'red',
            position: "topRight" ,
            message: 'Sorry, there are no images matching your search query. Please try again!'       
        });
        return;
}


const markup = createGallery(data.hits);
gallery.insertAdjacentHTML("beforeend", markup);
lightbox.refresh(); 
} catch (error) {
    console.error("Fetch error:", error);
}
finally {
    hideLoader();
    input.value="";
}
}
form.addEventListener("submit",handlesubmit);