'use strict';

// js for index drop down

const contacts = document.querySelector('#contacts');
const findMeAlso = document.querySelector('#find_me_also');
const contactsOpen = document.querySelector('#contacts_open');
const findMeAlsoOpen = document.querySelector('#find_me_also_open');
const dropIcon = document.querySelectorAll('.dropDownIcon');

console.log(dropIcon);

const dropOpen = function (a, b, i) {
  a.addEventListener('click', function () {
    b.classList.toggle('none');
    dropIcon[i].classList.toggle('backChng');
  });
};

console.log(contacts.childNodes[0]);

dropOpen(contacts, contactsOpen, 0);

if (document.querySelector('body').classList.contains('contact_me')) {
  dropOpen(findMeAlso, findMeAlsoOpen, 1);
}

// js for list funtionality

const contactHeading = document.querySelector('.contact_heading');
const contacts1 = document.querySelector('#contacts>h2');
const findMeAlso1 = document.querySelector('#find_me_also>h2');
const contactMeContactForm = document.querySelectorAll(
  '.contact_me_contact_form'
);

const cutBtn = document.querySelector('.contact_form_cut_btn');

const formChange = function (a, b, x, y, m) {
  a.addEventListener('click', function (e) {
    contactHeading.innerHTML = `${b.innerHTML}
                `;
    console.log(contacts1.innerHTML);

    contactMeContactForm[x].classList.remove('none');
    contactMeContactForm[y].classList.add('none');
  });
};

formChange(contacts, contacts1, 0, 1);

formChange(findMeAlso, findMeAlso1, 1, 0);

// for snippet

const textSnip = document.querySelector('.snip>pre').textContent;

for (let i = 0; i < textSnip.length; i++) {
  if (textSnip[i] === ',') {
    textSnip[i];
    console.log(textSnip[i] === ',');
  }
}

// for send option funtionality

const messageDisplay = document.querySelector('.contact_form_main');
const sndDisplay = document.querySelector('.cnfrm_msg');
const sndBtn = document.querySelector('#send_message');
const newMsg = document.querySelector('#new_message');

const sendBtnDislayChng = function (a, b, c) {
  a.addEventListener('click', function () {
    b.classList.add('none');
    c.classList.remove('none');
  });
};

sendBtnDislayChng(sndBtn, messageDisplay, sndDisplay);
sendBtnDislayChng(newMsg, sndDisplay, messageDisplay);
