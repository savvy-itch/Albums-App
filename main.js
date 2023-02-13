// eslint-disable-next-line no-undef
let db = [...albums];

const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
let selectedValues;

// register selected values on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  selectedValues = [];
  resultDiv.innerHTML = '';
  const data = new FormData(form);
  for (const entry of data) {
    let keyValue = [entry[0], entry[1]];
    selectedValues.push(keyValue);
  }

  // handle selecting every 'all' option
  if (selectedValues.every(elem => elem[1] === 'all')) {
    displayErrorMessage('Please choose some values');
    centerSingleElement();
  } else {
    // check db for matching values
    checkDB(selectedValues);
  }
})
form.addEventListener('submit', scrollToResults);

function displayErrorMessage(error) {
  let negativeResponse = document.createElement('p');
  negativeResponse.className = 'error-message';
  negativeResponse.innerHTML = `${error}`;
  resultDiv.append(negativeResponse);
}

function checkDB(array) {
  // store db indexes of all matches

  // function getFirstElement (array = [[null, null]], index = 0) {
  //   return array[index][1];
  // }
  // for (let i = 0; i < db.length; i++) {
  //   const mood = getFirstElement(array, 0);
  //   if (mood !== 'all' && db[i].mood === mood) {
  //     moodInd.push(i);
  //   }
  // }

  let moodInd = [];
  let speedInd = [];
  let heavinessInd = [];
  let noveltyInd = [];

  for (let i = 0; i < db.length; i++) {
    if (array[0][1] !== 'all' && db[i].mood === array[0][1]) {
      moodInd.push(i);
    }
    if (array[1][1] !== 'all' && db[i].speed === array[1][1]) {
      speedInd.push(i);
    }
    if (array[2][1] !== 'all' && db[i].heaviness === array[2][1]) {
      heavinessInd.push(i);
    }
    if (array[3][1] !== 'all' && db[i].novelty === array[3][1]) {
      noveltyInd.push(i);
    }
  }

  let numberOfCharacteristics = selectedValues.length;
  // ignore options with 'all' value
  if (moodInd.length === 0) {
    numberOfCharacteristics--;
  }
  if (speedInd.length === 0) {
    numberOfCharacteristics--;
  }
  if (heavinessInd.length === 0) {
    numberOfCharacteristics--;
  }
  if (noveltyInd.length === 0) {
    numberOfCharacteristics--;
  }


  let allIndexes = moodInd.concat(speedInd, heavinessInd, noveltyInd);
  let filtered = [];
  // count how many times each index appears
  for (let elem of allIndexes) {
    let count = 0;
    for (let el of allIndexes) {
      if (elem === el) {
        count++;
        // if index appeared in every array i.e. matches every characteristic
        if (count === numberOfCharacteristics) {
          filtered.push(elem);
        }
      }
    }
  }
  // get an array of unique matches 
  filtered = Array.from(new Set(filtered));

  // no matches
  if (filtered.length < 1) {
    displayErrorMessage('Sorry, no matches were found. Try again <i class="fa-regular fa-face-frown"></i>');
    centerSingleElement();
  }

  // display albums
  for (let i = 0; i < filtered.length; i++) {
    displayAlbum(filtered[i]);
  }
  centerSingleElement();
  checkStorageForListenedAlbums();
  checkLongTitles();
}

// remember to mark albums listened if they're in the storage
function checkStorageForListenedAlbums() {
  // if filtered album in db matches album in LS, add "listened" button
  let listenedAlbums = localStorage.getItem('title');
  if (listenedAlbums !== null) {
    let storedAlbumsArr = JSON.parse(listenedAlbums);
    let displayedDivs = [...resultDiv.querySelectorAll('.new-album')];

    displayedDivs.forEach(div => {
      for (let el of storedAlbumsArr) {
        // проверить, что быстрее - innerText или textContent
        if (div.querySelector('h4').innerText === el) {
          let divBtn = div.querySelector('.mark-listened-btn');
          divBtn.classList.add('undo-listened-btn');
          divBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>Mark as unlistened';
        } 
      }
    })
  }
}

function displayAlbum(i) {
  let newAlbum = document.createElement('div');
  newAlbum.className = 'new-album';
  newAlbum.innerHTML = `
      <button class="mark-listened-btn mark-btn"><i class="fa-solid fa-check"></i>Mark as listened</button>
      <img class="album-img" src=${db[i].coverUrl} alt="album cover">
      <h4>${db[i].title}</h4>
      <div class="album-links">
        <a href="${db[i].spotifyUrl}" target="_blank">
          <div class="album-icon">
            <img src="./images/spotify-icon.png" alt="spotify icon">
          </div>
        </a>
        <a href="${db[i].bandcampUrl}" target="_blank">
          <div class="album-icon">
            <img src="./images/bandcamp-icon3.png" alt="bandcamp icon">
          </div>
        </a>
      </div>`;
  resultDiv.append(newAlbum);
}

function centerSingleElement() {
  if (resultDiv.children.length === 1 && !resultDiv.classList.contains('result-center')) {
    resultDiv.classList.add('result-center');
  } else if (resultDiv.children.length > 1 && resultDiv.classList.contains('result-center')) {
    resultDiv.classList.remove('result-center');
  };
}

// Show/hide listened albums
resultDiv.addEventListener("click", function(e) {
  if (e.target && e.target.matches(".mark-listened-btn")) {
    const markBtn = e.target;
    markBtn.classList.toggle('undo-listened-btn');
    let currentAlbumTitle = markBtn.nextElementSibling.nextElementSibling.innerText;
    if (markBtn.classList.contains('undo-listened-btn')) {
      markBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>Mark as unlistened';
      addToLocalStorage(currentAlbumTitle);
    } else {
      markBtn.innerHTML = '<i class="fa-solid fa-check"></i>Mark as listened';
      removeFromLocalStorage(currentAlbumTitle);
    }
  }
});

// <i class="fa-solid fa-dice"></i>

function addToLocalStorage(title) {
  let listenedAlbums = localStorage.getItem('title');

  // if the list if empty, add current album
  if (listenedAlbums === null) {
    localStorage.setItem('title', JSON.stringify([title]));
  } else {
    const getCurrentTitle = localStorage.getItem('title');
    const currentTitle = JSON.parse(getCurrentTitle);
    currentTitle.push(title);

    localStorage.setItem('title', JSON.stringify(currentTitle));
  }
}

function removeFromLocalStorage(title) {
  let listenedAlbums = localStorage.getItem('title');
  let storedAlbumsArr = JSON.parse(listenedAlbums);
  // Once marked back as unlistened, delete album title from storage
  for (let elem of storedAlbumsArr) {
    if (title === elem) {
      storedAlbumsArr = storedAlbumsArr.filter(el => el !== title);
    }
  }
  localStorage.setItem('title', JSON.stringify(storedAlbumsArr));
}

const randomBtn = document.getElementById('random-btn');
const randomBtnIcon = randomBtn.querySelector('i');
randomBtn.addEventListener('mouseover', () => randomBtnIcon.classList.add('fa-shake'));
randomBtn.addEventListener('mouseout', () => randomBtnIcon.classList.remove('fa-shake'));
randomBtn.addEventListener('click', getRandomAlbum);
randomBtn.addEventListener('click', scrollToResults);

function getRandomAlbum() {
  let listenedAlbums = localStorage.getItem('title');
  let storedAlbumsArr = JSON.parse(listenedAlbums);
  let randomIndex = Math.floor(Math.random() * db.length);
  resultDiv.innerHTML = '';

  if (!listenedAlbums || !storedAlbumsArr.includes(db[randomIndex].title)) {
    displayAlbum(randomIndex);
    centerSingleElement();
  } else if (storedAlbumsArr.length === db.length) {
    // If every album in db is marked as listened
    displayErrorMessage('Sorry, no matches were found <i class="fa-regular fa-face-frown"></i>');
    centerSingleElement();
  } else {
    // if album is marked as already listened
    getRandomAlbum();
  }
}

// translate to results
function scrollToResults() {
  resultDiv.scrollIntoView({behavior:'smooth', block:'start'});
}

const clearBtn = document.getElementById('clear-all-btn');
const clearBtnIcon = clearBtn.querySelector('i');
clearBtn.addEventListener('mouseover', () => clearBtnIcon.classList.add('fa-shake'));
clearBtn.addEventListener('mouseout', () => clearBtnIcon.classList.remove('fa-shake'));
clearBtn.addEventListener('click', clearLocalStorage);

// remove all listened albums
function clearLocalStorage() {
  let listenedAlbums = localStorage.getItem('title');

  if (listenedAlbums !== null) {
    const confirmMsg = confirm('Are you sure you want to clear all your listened albums?');
    if (confirmMsg) { 
      localStorage.removeItem('title');
      let markBtns = [...resultDiv.querySelectorAll('.new-album > button')];
      markBtns.forEach(btn => {
        if (btn.classList.contains('undo-listened-btn')) {
          btn.classList.toggle('undo-listened-btn');
          btn.innerHTML = '<i class="fa-solid fa-check"></i>Mark as listened'
        }
      });
    }
  }
}

function checkLongTitles() {
  const albumDivs = [...document.querySelectorAll('.new-album')];
  albumDivs.forEach(div => {
    let albumTitle = div.querySelector('h4');
    if (albumTitle.textContent.length > 30) {
      albumTitle.style.fontSize = '1rem';
    }
  })
}
