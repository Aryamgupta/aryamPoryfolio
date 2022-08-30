// implemention of scroll open button
'use strict';

// for input of projects

const listHolder = document.querySelector('.project_list_holder');
const arrProjectNames = [
  'Akshargyan',
  'Parmarth',
  'DD Garments',
  'Banking App',
  'Dice Game',
  'Guess My Number',
  'Calculator',
  'To-Do List',
  'Minute Medicare',
  'Techtac66',
];
arrProjectNames.forEach(function (projectName, i) {
  let currListItem = document.createElement('div');
  currListItem.classList.add('project_card');
  currListItem.setAttribute('name', projectName.toLocaleLowerCase());
  currListItem.setAttribute('pNum', i);
  currListItem.innerHTML = `<div
                class="project_list_image"
                style="background-image: url(projects/${i}.png)"
              ></div>
              <p>${projectName}</p>`;
  listHolder.appendChild(currListItem);
});

const projectInfo = {
  0: 'Akshargyan lorem ipsum dolor sitsadasdadas asdasdasdsadasd',

  1: ' parmarth sdadadadasd asdadadad sdadsa asdad',
  2: 'sdasdasd asdsad asdasd asdsad asdsad',
  3: 'lorem ipsum dolor sitsadasdadas asdasdasdsadasd',

  4: 'sdadadadasd asdadadad sdadsa asdad',
  5: 'sdasdasd asdsad asdasd asdsad asdsad',
  6: 'lorem ipsum dolor sitsadasdadas asdasdasdsadasd',

  7: 'sdadadadasd asdadadad sdadsa asdad',
  8: 'sdasdasd asdsad asdasd asdsad asdsad',
  9: 'asdadsad asdads asdasd asdasd asdsad',
};

const projectsLinks = {
  0: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_childelementcount',
};

const projectScreenImage = document.querySelector(
  '.screen_image_container>img'
);
const projectScreenName = document.querySelector('.screen_image_container>a');

const listToScreen = function (num) {
  projectScreenImage.setAttribute('src', `projects/${num}.png`);
  projectScreenName.innerText = arrProjectNames[num];
  projectDes.innerText = projectInfo[num];
  projectScreenName.setAttribute('href', projectsLinks[num]);
};

const listItem = document.querySelectorAll('.project_card');
const projectTitleCont = document.querySelector('.project_des_title_container');
const projectTitle = document.querySelectorAll('.project_title');
const projectDes = document.querySelector('.project_detail_des>p');
const desHeight = document.querySelector('.project_indi_des').clientHeight;
const slideCloseBtn = document.querySelectorAll('.project_cut');

document.querySelector('.project_list_holder').style.height =
  desHeight - 61 + 'px';

const addBorders = function (val) {
  projectTitle.forEach(function (item) {
    item.style.borderBottom = `${1}px solid #1e2d3d`;
  });
  projectTitle[val].style.borderBottom = '0';
};

listItem.forEach(function (i) {
  i.addEventListener('click', function (e) {
    let val = i.getAttribute('pNum') % 3;
    console.log(`${1}px solid #1e2d3d`);

    projectTitle[val].innerHTML = `${i.getAttribute('name').toUpperCase()}`;

    addBorders(val);

    let nu;
    arrProjectNames.forEach(function (projectName, x) {
      if (i.getElementsByTagName('p')[0].innerText == projectName) {
        nu = x;
      }
    });
    listToScreen(nu);
    console.log(projectInfo.i);
  });
});

projectTitle.forEach(function (project, i) {
  project.addEventListener('click', function (e) {
    console.log('dasdds');
    addBorders(i);
    let ind;
    arrProjectNames.forEach((ele, i) => {
      if (arrProjectNames[i].toLowerCase() == project.innerText.toLowerCase()) {
        ind = i;
      }
    });
    console.log(ind);

    listToScreen(ind);
  });
});
