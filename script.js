const teachers = document.getElementById('card');
const buttonMore = document.querySelector('#btn_more');
const teacherInfo = [
  {
    name: 'Ibrahim Alizada', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/Image/teacher-1.jpeg', alt: 'firstTeacher',
  },
  {
    name: 'Maryam Ahmadi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/Image/secondTeacher.jpg', alt: 'secondTeacher',
  },
  {
    name: 'Zahrah Amin Sourosh', skills: 'Bachelor of English language and percian language', details: 'Execute lessons efficiently using different styles of teaching depending on the content.', img: 'assets/Image/ThirdTeacher.jpg', alt: 'ThirdTeacher',
  },
  {
    name: 'Mohamddad Ali Jafari', skills: 'PHD of English language and percian language', details: 'Instruct students about the structure and content of the English language.', img: 'assets/Image/4thTeacher.jpg', alt: ' fourthTeacher',
  },
  {
    name: 'Basir Ghaznavi', skills: 'Bachelor of English language and percian language', details: 'Compose lesson plans in order to successfully incorporate the full duration of each lesson.', img: 'assets/Image/5thTeacher.jpg', alt: 'fifthTeacher',
  },
  {
    name: 'M Hashim Danish', skills: 'Bachelor of computer sience and English language', details: 'Teach basic English skills including reading, writing, and speaking.', img: 'assets/Image/6thTeacher.jpg', alt: 'SixthTeacher',
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
                <img src="${teacher.img}" alt="${teacher.alt}">
            </div>
            <div class="info-div">
                <h6>${teacher.name}</h6>
                <p class="small">${teacher.skills}</p>
                <hr class="hr1">
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
