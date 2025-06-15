import{a as u,S as d,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const f="50865810-65dd075ae8c3362400e1c5e2f";function m(t){return u("https://pixabay.com/api/",{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(({data:r})=>r).catch(r=>{throw console.log(r),r})}function p(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:o,comments:s,downloads:l})=>`
      <li class="list-item">
      <a href="${i}">
      <img src="${r}" alt="${n}" width="360"/>
      </a>
       <div class="info">
          <p>Likes ${e}</p>
          <p>Views ${o}</p>
          <p>Comments ${s}</p>
          <p>Downloads ${l}</p>
        </div>
        
      </li>  
        `).join("")}function y(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){const t=document.querySelector(".loader");t&&t.classList.remove("hidden")}function g(){const t=document.querySelector(".loader");t&&t.classList.add("hidden")}const c=document.querySelector(".input-text"),L=document.querySelector(".form"),q=document.querySelector(".gallery"),S=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});async function b(t){t.preventDefault();const r=c.value.trim();if(y(),h(),r===""){a.show({title:"Warning",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}try{const i=await m(r);if(i.hits.length===0){a.show({title:"Hey",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=p(i.hits);q.insertAdjacentHTML("beforeend",n),S.refresh()}catch(i){console.error("Fetch error:",i)}finally{g(),c.value=""}}L.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
