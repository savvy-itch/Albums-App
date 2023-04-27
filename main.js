// eslint-disable-next-line no-undef
const db = [...albums];

const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
let selectedValues;

// register selected values on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  selectedValues = Array.from(new FormData(form));
  resultDiv.innerHTML = '';

  // handle selecting every 'all' option
  if (selectedValues.every(elem => elem[1] === 'all')) {
    displayErrorMessage('Please choose some values');
    centerSingleElement();
  } else {
    // check db for matching values
    checkDB(selectedValues);
  }
});
form.addEventListener('submit', scrollToResults);

function displayErrorMessage(error) {
  let negativeResponse = document.createElement('p');
  negativeResponse.className = 'error-message';
  negativeResponse.innerHTML = `${error}`;
  resultDiv.append(negativeResponse);
}

function checkDB(array) {
  const filteredIndexes = db.reduce((indexes, album, i) => {
    // iterate over each characteristic (mood, speed, etc.)
    for (const [key, value] of array) {
      if (value !== 'all' && album[key] !== value) {
        return indexes; // if any characteristic doesn't match, return the current indexes
      }
    }
    return [...indexes, i]; // if all characteristics match, add the index to the filteredIndexes array
  }, []);

  if (filteredIndexes.length < 1) {
    displayErrorMessage('Sorry, no matches were found. Try again <i class="fa-regular fa-face-frown"></i>');
    centerSingleElement();
  }

  filteredIndexes.forEach((index) => {
    displayAlbum(index);
  });

  centerSingleElement();
  checkStorageForListenedAlbums();
  checkLongTitles();
}

function checkStorageForListenedAlbums() {
  // if filtered album in db matches album in LS, add "listened" button
  let listenedAlbums = localStorage.getItem('title');
  if (listenedAlbums !== null) {
    let storedAlbumsArr = JSON.parse(listenedAlbums);
    let displayedDivs = [...resultDiv.querySelectorAll('.new-album')];

    displayedDivs.forEach(div => {
      for (let el of storedAlbumsArr) {
        if (div.querySelector('h4').textContent === el) {
          let divBtn = div.querySelector('.mark-listened-btn');
          divBtn.classList.add('undo-listened-btn');
          divBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>Mark as unlistened';
        } 
      }
    });
  }
}

function displayAlbum(i) {
  const album = db[i];
  const newAlbum = document.createElement('div');
  newAlbum.className = 'new-album';
  newAlbum.innerHTML = `
      <button class="mark-listened-btn mark-btn"><i class="fa-solid fa-check"></i>Mark as listened</button>
      <img class="album-img" src=${album.coverUrl} alt="album cover">
      <h4>${album.title}</h4>
      <div class="album-links">
        <a href="${album.spotifyUrl}" target="_blank">
          <div class="album-icon">
            <img src="./images/spotify-icon.png" alt="spotify icon">
          </div>
        </a>
        <a href="${album.youtubemusicUrl}" target="_blank">
          <div class="album-icon">
            <img src="./images/youtube-music-icon.png" alt="youtube music icon">
          </div>
        </a>
      </div>`;
  resultDiv.appendChild(newAlbum);
}

function centerSingleElement() {
  if (resultDiv.children.length === 1 && !resultDiv.classList.contains('result-center')) {
    resultDiv.classList.add('result-center');
  } else if (resultDiv.children.length > 1 && resultDiv.classList.contains('result-center')) {
    resultDiv.classList.remove('result-center');
  }
}

// Toggle mark listened albums button
resultDiv.addEventListener("click", function(e) {
  if (e.target.matches(".mark-listened-btn")) {
    const markBtn = e.target;
    markBtn.classList.toggle('undo-listened-btn');
    let currentAlbumTitle = markBtn.nextElementSibling.nextElementSibling.textContent;
    if (markBtn.classList.contains('undo-listened-btn')) {
      markBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>Mark as unlistened';
      addToLocalStorage(currentAlbumTitle);
    } else {
      markBtn.innerHTML = '<i class="fa-solid fa-check"></i>Mark as listened';
      removeFromLocalStorage(currentAlbumTitle);
    }
  }
});

function addToLocalStorage(title) {
  const listenedAlbums = localStorage.getItem('title') ?? '[]';
  const storedAlbumsArr = JSON.parse(listenedAlbums);
  storedAlbumsArr.push(title);
  localStorage.setItem('title', JSON.stringify(storedAlbumsArr));
}

function removeFromLocalStorage(title) {
  const listenedAlbums = localStorage.getItem('title') ?? '[]';
  const storedAlbumsArr = JSON.parse(listenedAlbums);
  const index = storedAlbumsArr.indexOf(title);

  if (index !== -1) {
    storedAlbumsArr.splice(index, 1);
    localStorage.setItem('title', JSON.stringify(storedAlbumsArr));
  }
}

const randomBtn = document.getElementById('random-btn');
const randomBtnIcon = randomBtn.querySelector('i');
randomBtn.addEventListener('mouseover', () => randomBtnIcon.classList.add('fa-shake'));
randomBtn.addEventListener('mouseout', () => randomBtnIcon.classList.remove('fa-shake'));
randomBtn.addEventListener('click', getRandomAlbum);
randomBtn.addEventListener('click', scrollToResults);

function getRandomAlbum() {
  const listenedAlbums = localStorage.getItem('title') ?? '[]';
  const storedAlbumsArr = JSON.parse(listenedAlbums);
  const randomIndex = Math.floor(Math.random() * db.length);
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
  const listenedAlbums = localStorage.getItem('title');

  if (!listenedAlbums) {
    return;
  }
  const confirmMsg = confirm('Are you sure you want to clear all your listened albums?');
  if (!confirmMsg) {
    return;
  } 
  localStorage.removeItem('title');

  const markBtns = Array.from(document.querySelectorAll('.new-album > button.undo-listened-btn'));
  markBtns.forEach(btn => {
    btn.classList.remove('undo-listened-btn');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>Mark as listened';
  });
}

// Shrink font-size for long titles
function checkLongTitles() {
  const albumDivs = [...document.querySelectorAll('.new-album')];
  albumDivs.forEach(div => {
    let albumTitle = div.querySelector('h4');
    if (albumTitle.textContent.length > 30) {
      albumTitle.style.fontSize = '1rem';
    }
  });
}