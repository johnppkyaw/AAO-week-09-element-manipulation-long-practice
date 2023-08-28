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

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  const h2 = document.createElement('h2');
  h2.textContent = date;
  h2.setAttribute('class', 'picBelow')
  document.body.appendChild(h2);



  setInterval(function() {
    date = new Date();
    h2.textContent = date;
    hour = date.getHours();

    document.getElementById('clock').textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    countDown


  }, 1000);



  //Add About Me with unordered lists
  const aboutMe = [
    `I am from ${location[randomNumber]}.`,
    `It's currently <span id="clock"></span> in California`,
    "My background is healthcare.",
    "I am currently following AAO cirriculum to study software engineering.",
    "I am studying to become a full stack developer."
  ]
  listCreator('About Me', 'ul', aboutMe);

  console.log(document.getElementById('clock'))

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
    'Movies of horror, thriller, action, or comedy genere',
    'Stocks and crytocurrency',
    'Shoot \'em up mobile game called Hawk: Freedom Squadron',
    'Walking in a park',
    'Youtube/Reddit'
  ]
  listCreator('Hobbies and Interests', 'ul', hobbies);

  const contact = [
    "<a href=\"https://github.com/johnppkyaw\">Github</a>",
    "<a href=\"https://discordapp.com/users/352519523397795841\">Discord</a>"
  ]
  listCreator('Contact Me', 'ul', contact);

  //Bonus A
  const profilePic = document.createElement('div');
  profilePic.setAttribute('class', 'penguin');
  h2.insertAdjacentElement('afterend', profilePic);

  const likes = [
    "Burgers",
    "Self-checkout lanes",
    "Steaks",
    "Sets objects"
  ]
  listCreator('Likes', 'ul', likes);


  //List element creator with title
  function listCreator(title, ulOrOl, array) {
    //title
    const h3 = document.createElement('h3');
    h3.textContent = title;
    document.body.appendChild(h3);

    //list
    const ulOrol = document.createElement(ulOrOl);
    ulOrol.setAttribute('class', 'my-details')
    ulOrol.setAttribute('id', title.split(' ').join('-'))
    array.forEach(list => {
      const li = document.createElement('li');
      li.setAttribute('class', 'detail')
      li.innerHTML = list;
      ulOrol.appendChild(li);
    })
    document.body.appendChild(ulOrol);
  }

  //Bonus B
  //change profile pic
  const button = document.createElement('button');
  button.setAttribute('id', 'changePic');
  button.setAttribute('type', 'button');
  button.textContent="Click to change pic";
  button.style.display = "block";
  button.style.marginLeft = "auto";
  button.style.marginRight = "auto";
  profilePic.insertAdjacentElement('afterend', button);
  button.onclick = function() {
    let isPenguin = profilePic.classList.contains('penguin');
    if (isPenguin) {
      profilePic.classList.add('blueberry');
      profilePic.classList.remove('penguin');
    } else {
      profilePic.classList.add('penguin');
      profilePic.classList.remove('blueberry');
    }
  }

//Bonus C: Countdown
const countDown = document.createElement('div');
countDown.setAttribute('id', 'countdown');
document.body.appendChild(countDown);

setInterval(function() {
  //get current time in milliseconds
const currentTime = new Date().getTime();
//substract it from birthday
let timeDifference = new Date('2024-08-28 ').getTime() - currentTime;
let year = convertTime(timeDifference, 3.154e10)
let month = convertTime(timeDifference, 2.628e9)
let day = convertTime(timeDifference, 8.64e7)
let hr = convertTime(timeDifference, 3.6e6)
let min = convertTime(timeDifference, 60000)
let sec = Math.floor(timeDifference/1000)
document.getElementById('countdown').textContent = `${year} year ${month} month(s) ${day} day(s) ${hr} hour(s) ${min} minute(s) ${sec} second(s) until my birthday!`

//convert milliseconds to year, month, day, hr, min, sec
//if converted to any is < 1, then change current to 0
function convertTime(currentDifference, currUnitInMs) {
  let unitAmount = Math.floor(currentDifference/currUnitInMs);
  timeDifference -= unitAmount * currUnitInMs;
  return unitAmount;
}
}, 1000)

}




window.onload = loadMyProfile;
