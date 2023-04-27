# Albums App
#### Description:
Frontend web app that gives music recommendation based on user's input

By simply selecting some of the general characteristics of an album (such as mood, speed, heaviness, novelty) you get the appropriate matches displayed. It consists of 3 pages.

## Files
### index.html
This file contains the home page layout. It consists of nav bar and main section.
The nav bar has a logo that is a link to the home page and 4 links to other pages. The links for Sign In and Sign Up pages are currently decorational. 
The main section has 2 elements - text div (which has all the headings and a button that links to another page) and image div that has the page's main image.

### style.css
This file contains general styles applied to all the pages.
### index.css
This file contains styles exclusive to index.html.
### app.js
This file is responsible for one thing only - toggling CSS class that enables dropdown menu on small screen when menu button is clicked. Applies to all pages.
### background.js
The file is responsible for animated circles background of the home page. It's made using canvas API. A certain amount balls (using classes) of random size, color, placement and velocity is being rendered on each frame of the animation. Their position is updated every frame, creating an illusion of movement. The mount of balls is changing depending on screen resolution.

### about.html
This page provides basic text instructions of using the website. Beside its own styles, this page also inherits the same layout of nav bar and its script, styles of other pages.

### about.css
This file contains styles exclusive to about.html.

### main.html
This page represents the core functionality of this app where user can interact with it. It has a form of radio button groups each of which represent a characteristic of an album. On submitting the form, user receives dynamically generated "albums" matching his query. Each album can be marked as listened or unlistened. The list of all possible interactions:
- search for albums matching selected values;
- get a random album (excluding already listened ones);
- mark every album as unlistened at once.

### main.css
Contains styles exclusive to main.html

### db.js
Includes an array of objects that contain all the data necessary for displaying.  

### main.js
Provides main functionality and logic behind the main.html.
On form submit the script checks the database for matching values and then dynamically displays the results on the page.
Some of the corner cases prevention:
- At least one of the characteristics should be changed (default - "all") or error message will be displayed;
- if nothing matches user's input or every album marked as listened, then error message will be displayed;

User can get a random album. It's implemented by a recursive function that gets and checks a random album in db until it satisfies the condition of not being marked as listened.

When user marks an album as listened, its title is saved in local storage so that these results will always (if using the same browser) be marked as listened. By pressing the same button again the album gets removed from local storage and is marked back as unlistened.

When user presses "Clear All" button, the data in local storage gets deleted which effectively causes all the albums to get marked as unlistened. 