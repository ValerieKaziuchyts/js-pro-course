const welcomePhrase = document.getElementById('welcomePhrase');

(function whatTime() {
  const arr = Date().split(' ');
  const time = arr[4].split(':');

  if (time[0] >= 6 && time[0] < 10) {
    welcomePhrase.innerHTML = 'Good morning!';
  } else if (time[0] >= 10 && time[0] < 18) {
    welcomePhrase.innerHTML = 'Good afternoon!';
  } else {
    welcomePhrase.innerHTML = 'Good evening!';
  }
}());

function cssDisplay(value, ...block) {
  for (let i = 0; block.length > i; i += 1) {
    block[i].style.display = value;
  }
}

function nightTheme() {
  const arr = Date().split(' ');
  const time = arr[4].split(':');

  if (time[0] >= 18) {
    document.body.style.background = 'linear-gradient(to bottom, #083F66, #149CA8 40%, #003848)';
    orangeMountains.style.display = 'none';
    pinkMountains.style.display = 'none';
    blueMountains.style.visibility = 'visible';
    violetMountains.style.visibility = 'visible';
    sun.src = '../assets/img/Moon.png';
    cssDisplay('none', cloud1, cloud2, cloud3, cloud4, cloud5);
    backgroundCircle.src = '../assets/img/Ellipse%202-blue.png';
    weather.src = '../assets/img/icons8-%D1%82%D1%83%D0%BC%D0%B0%D0%BD-%D0%BD%D0%BE%D1%87%D1%8C%D1%8E-100.png';
    shootingStar.style.visibility = 'visible';
    stars.style.visibility = 'visible';
  } else {
    document.body.style.background = 'linear-gradient(to bottom, #093E60 3%, #368796, #E59797 39%, #FBE57F 60%)';
    orangeMountains.style.visibility = 'visible';
    pinkMountains.style.visibility = 'visible';
    blueMountains.style.display = 'none';
    violetMountains.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', nightTheme);
