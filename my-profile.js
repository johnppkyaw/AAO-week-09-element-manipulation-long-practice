const loadMyProfile = () => {

  const randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);

  //DATA
  const firstName = ["John", "Pyae", "Penguin", "Blueberry"];
  const location = ["New York", "California", "Texas", "Colorado"]

  //Add H1
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'firstName')
  h1.setAttribute('class', 'name')
  h1.textContent = firstName[randomNumber];
  document.body.appendChild(h1);

  //Add About Me with unordered lists
  const aboutMe = [
    `I am from ${location[randomNumber]}.`,
    "My background is healthcare.",
    "I am currently following AAO cirriculum to study software engineering.",
    "I am studying to become a full stack developer."
  ]
  listCreator('About Me', 'ul', aboutMe);

  //Skills
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Python',
    'Github',
  ]
  listCreator('Skills', 'ol', skills);

  const educationAndWork = [
    "Bachelor of Science in Biochemistry",
    "Doctor of Medicine",
    "Production Builder",
    "Medical Documentation Specialist",
    "Scribe Training Specialist"
  ]
  listCreator('Education and Work experience', 'ul', educationAndWork);

  const hobbies = [
    'Movies of horror, thriller, action, or comedy genere.',
    'Stocks and crytocurrency.',
    'Shoot \'em up mobile game called Hawk: Freedom Squadron.',
    'Walking in a park',
    'Youtube/Reddit'
  ]
  listCreator('Hobbies and Interests', 'ul', hobbies);

  const contact = [
    "<a href=\"https://github.com/johnppkyaw\">Github</a>",
    "<a href=\"https://discordapp.com/users/352519523397795841\">Discord</a>"
  ]
  listCreator('Contact Me', 'ul', contact);

  //List element creator with title
  function listCreator(title, ulOrOl, array) {
    //title
    const h3 = document.createElement('h3');
    h3.textContent = title;
    document.body.appendChild(h3);

    //list
    const ulOrol = document.createElement(ulOrOl);
    ulOrol.setAttribute('class', 'my-details')
    array.forEach(list => {
      const li = document.createElement('li');
      li.setAttribute('class', 'detail')
      li.innerHTML = list;
      ulOrol.appendChild(li);
    })
    document.body.appendChild(ulOrol);
  }

}

window.onload = loadMyProfile;
