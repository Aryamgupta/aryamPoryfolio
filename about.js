'use strict';

// js for index drop down

const listItem = document.querySelectorAll('.contact_me_contacts_open>h6 ');
const listItem1 = document.querySelector('.techno_list');
console.log(listItem1);

const displays = document.querySelectorAll('.about_content');
const h = document.querySelector('.contact_Name');
console.log(listItem);

const resposivetitle = document.querySelector('.about_cont>h6');

const chngDisplays = function () {
  for (let a = 0; a < 3; a++) {
    listItem[a].addEventListener('click', () => {
      displays.forEach(item => item.classList.add('none'));
      displays[a].classList.remove('none');
      let z = `${h.textContent} / ${listItem[a].textContent.slice(1)}`;
      document.querySelector('.contact_heading').textContent = z;
      resposivetitle.innerHTML = `//${h.textContent} <span>/ ${listItem[
        a
      ].textContent.slice(1)}</span>`;
    });
  }
};

chngDisplays();

listItem1.addEventListener('click', () => {
  displays.forEach(item => item.classList.add('none'));
  displays[3].classList.remove('none');

  resposivetitle.innerHTML = `//${listItem1.textContent} `;
});

h.addEventListener('click', () => {
  resposivetitle.innerHTML = `//${h.textContent} `;
});
