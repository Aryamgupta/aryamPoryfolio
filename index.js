// implemention of scroll open button
'use strict';

const meta = document.createElement('meta');
meta.setAttribute('content', 'width=device-width,initial-scale=1');
meta.setAttribute('name', 'viewport');
document.querySelector('head').appendChild(meta);


// for header and  footer in each package

const maincontent = document.querySelector('.maincontent');

const header = `<section class="header_section">
        <div class="headc">
          <a><li class="item_1 list_item">aryam-gupta</li></a>

          <button class="header_btn" id="toggle_btn">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>

        <div class="list_open">
          <a href = "index.html" ><div class="last_item list_item">_hello</div></a>
          <a href = "about.html"><div class="list_item">_about-me</div></a>

          <a href = "projects.html" ><div class="list_item">_projects</div></a>
          
          <a href = "contact-me.html"><div class="list_item">_contact-me</div></a>
        </div>
      </section>`;

const footer = ` <section class="footer_section">
        <div class="social_footer">
          <p>find me in:</p>
          <a>
            <img src="images/footer/twt_inactive.png" />
          </a>
          <a>
            <img src="images/footer/facebook_inactive.png" />
          </a>
        </div>
        <div class="git_footer">
          <a>
            <p>Aryamgupta</p>
            <img src="images/footer/git_inactive.png" />
          </a>
        </div>
      </section>`;

maincontent.insertAdjacentHTML('afterbegin', header);
maincontent.insertAdjacentHTML('beforeend', footer);

console.log('fdfddf');

// for header

const divOpen = document.querySelector('.list_open');

const toggltBtn = document.getElementById('toggle_btn');
const btnBacked = document.querySelectorAll('.header_btn > div');
const wflastele = document.querySelectorAll('.list_open>a');

const openFunc = function () {
  divOpen.classList.toggle('toggle_open');
  btnBacked[0].classList.toggle('btn_chng1');
  btnBacked[1].classList.toggle('btn_chng2');
  btnBacked[2].classList.toggle('btn_chng3');
  // btnBacked.classList.toggle('btn_chng');
};

// js for border of selected navbar

const body = document.querySelector('body');

const addBorderBottom = function () {
  if (body.classList.contains('index')) {
    wflastele[0].classList.add('border_bottom');
  } else if (body.classList.contains('about-me')) {
    wflastele[1].classList.add('border_bottom');
  } else if (body.classList.contains('project')) {
    wflastele[2].classList.add('border_bottom');
  } else if (body.classList.contains('contact_me')) {
    wflastele[3].classList.add('border_bottom');
  }
};

console.log(body.classList.contains('index'));

addBorderBottom();

toggltBtn.addEventListener('click', openFunc);

// js for game

const quesField = document.querySelector('.ques');
const ansInput = document.querySelector('.game_ans');
const gameBtn = document.querySelector('.game_btn');
const skipBtn = document.querySelector('.skip_btn');
const won = document.querySelector('.won');
const restrt = document.querySelector('.restrt');
const gameContent = document.querySelector('.game_content');
const game = document.querySelector('.game');
const viewAfterGame = document.querySelector('.about_in_game');

let evlAns;

const createQues = function () {
  ansInput.value = '';
  let a = Math.round(Math.random() * (1000 - 0) - 0);
  let b = Math.round(Math.random() * (100 - 0) - 0);
  const operator = ['+', '-', '*', '%'];

  let i = Math.round(Math.random() * (3 - 0) - 0);

  const randomExp = `${a} ${operator[i]} ${b}`;
  console.log(randomExp);

  quesField.innerHTML = randomExp;

  if (i === 0) {
    evlAns = a + b;
  } else if (i === 1) {
    evlAns = a - b;
  } else if (i === 2) {
    evlAns = a * b;
  } else if (i === 3) {
    evlAns = a % b;
  }

  console.log(evlAns);
};

createQues();

const quesAnsCheck = function () {
  return ansInput.value == evlAns;
};

const sreenToWin = function () {
  won.classList.remove('none');
  restrt.classList.remove('none');
  gameContent.classList.add('none');
};

const screenToView = function () {
  game.classList.add('none');
  viewAfterGame.classList.remove('none');
};

const toPlayScreen = function () {
  won.classList.add('none');
  restrt.classList.add('none');
  gameContent.classList.remove('none');
  createQues();
};

gameBtn.addEventListener('click', function () {
  if (quesAnsCheck()) {
    sreenToWin();
    ansInput.value = '';
    won.innerText = 'WELL DONE';
    restrt.setAttribute('value', 'Open');
  } else {
    sreenToWin();
    ansInput.value = '';
    won.innerText = 'GAME OVER!';
    restrt.setAttribute('value', 'Restrt');
  }
});

skipBtn.addEventListener('click', function () {
  screenToView();
});

// console.log();

restrt.addEventListener('click', function () {
  if (this.getAttribute('value') == 'Restrt') {
    toPlayScreen();
  } else if (this.getAttribute('value') == 'Open') {
    screenToView();
  }
});

// const links = document.querySelectorAll('a');
// a.forEach(function (a, i) {
//   a[i].setAttribute('target', '_blank');
// });
