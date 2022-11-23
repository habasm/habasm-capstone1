const speakers = [
  {
    img: 'img/Anya.png',
    fulname: 'Anya Schoolman',
    position: 'Executive Director',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about:
      'Anya has worked for decades on environmental projects and policy up and down the Western Hemisphere.',
  },
  {
    img: 'img/Alexis.png',
    fulname: 'Alexis Miller',
    position: 'Director of Community Impact',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about: '`Alexis supports the engagement efforts for Solar United Neighbors state programs in Virginia, West Virginia, Arizona, Indiana, Ohio, and Pennsylvania.`',
  },
  {
    img: 'img/aaron.png',
    fulname: 'Aaron Sutch',
    position: 'Atlantic Southeast Region Director',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about:
      'Aaron received a Dual Master of Arts in International Affairs and Natural Resources, specializing in International Energy Policy from American University School of International Service and United Nations University for Peace. ',
  },
  {
    img: 'img/Adrian.png',
    fulname: 'Adrian Keller',
    position: 'Arizona Program Associate',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about:
      ' His background in policy work and municipal government have provided insight into the benefits of building community partnerships from the bottom up in order to expand access to sustainable, affordable energy.',
  },
  {
    img: 'img/Angela.png',
    fulname: 'Angela DeMonbreun',
    position: 'Chief Operating Officer',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about:
      'Her experience includes project development, grassroots organizing, community engagement and policy advocacy focusing on capacity building.',
  },
  {
    img: 'img/Annie.png',
    fulname: 'Annie Wolf',
    position: 'Vice President of Community Impact',
    link: 'https://www.solarunitedneighbors.org/about-us/staff/',
    about:
      'Annie has spent her career connecting people to causes they care about through volunteering. ',
  },
];

const container = document.getElementById('speakers');

function data() {
  speakers.forEach((speaker) => {
    container.innerHTML += ` <div class="speakersGrid">
    <div class="gridImage">
      <img src="${speaker.img}" alt="${speaker.fulname}'s Portrait" />
    </div>
    <div class="speakerDetails">
      <h3>${speaker.fulname}</h3>
      <h4>${speaker.position}</h4>
      <p class="quotes">
        <i><a href="${speaker.link}">${speaker.about}</a></i>
      </p>
    </div>
  </div>`;
  });
}

window.onload = data();

// Hamburger Button

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    menu.style.top = '-10px';
    menu.style.opacity = 0;
    document.body.style.overflow = 'auto';
  } else {
    menu.classList.add('showMenu');
    menu.style.top = '50px';
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    menu.style.opacity = 1;
    document.body.style.overflow = 'hidden';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
