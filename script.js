import { cards } from "./data.js";

const getLayout = document.querySelector(".layout");

const mappedCards = cards
  .map((card, index) => {
    return `<div class="card card-${card["order"]}" key=${index}> 
               <div class="image-container">
                <svg class="shadow" viewBox="0 0 156 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse id="shadow" cx="78" cy="36.5" rx="78" ry="36.5" fill="#07123C" fill-opacity="0.19"/>
                </svg>
                <img alt="${card["imageAlt"]}" src="${card["imageSrc"]}" />
               </div>
               <span class="item-title">${card["imageAlt"]}</span>
            </div>`;
  })
  .join("");

getLayout.innerHTML = mappedCards;
