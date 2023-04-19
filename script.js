const teachers = document.getElementById('card');
const buttonMore = document.querySelector('#btn_more');
const teacherInfo = [
  {
    name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-1.jpeg',
  },
  {
    name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-2.jpeg',
  },
  {
    name: 'Khodadad Sourosh', skills: 'Bachelor of English language and percian language', details: 'Execute lessons efficiently using different styles of teaching depending on the content.', img: 'assets/images/teacher-3.jpeg',
  },
  {
    name: 'Abel Mawi', skills: 'PHD of English language and percian language', details: 'Instruct students about the structure and content of the English language.', img: 'assets/images/teacher-4.jpeg',
  },
  {
    name: 'Mahram Ali Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/images/teacher-5.jpeg',
  },
  {
    name: 'Ahmadreza Azad', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/images/teacher-6.jpeg',
  },
];

function removeChildInfo() {
  while (teachers.hasChildNodes()) {
    teachers.removeChild(teachers.firstChild);
  }
}

let count = 0;
let number = 0;
function teacherInfors() {
  const screenWidth = window.innerWidth;
  teacherInfo.forEach((teacher) => {
    const card1 = document.createElement('div');
    if (count >= 2 && number === 0 && screenWidth < 768) {
      return;
    }
    card1.innerHTML = `
            <div class="images-div">
                <img src="${teacher.img}" alt="">
            </div>
            <div class="info-div">
                <h6>${teacher.name}</h6>
                <p class="small">${teacher.skills}</p>
                <p>${teacher.details}</p>
            </div>`;
    count += 1;
    card1.classList.add('cards');
    teachers.appendChild(card1);
  });
}

buttonMore.addEventListener('click', () => {
  if (number === 0) {
    removeChildInfo();
    number += 1;
    teacherInfors();
  }
});
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    removeChildInfo();
    if (number === 0) {
      number += 1;
      teacherInfors();
    }
    if (number !== 0) {
      teacherInfors();
    }
  } else if (screenWidth < 768) {
    removeChildInfo();
    number = 0;
    count = 0;
    teacherInfors();
  }
});

teacherInfors();
