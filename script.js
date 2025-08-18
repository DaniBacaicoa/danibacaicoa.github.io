/*
  script.js

  Handles the interactive behaviour of the light switch.  Clicking on the
  switch toggles a CSS class on the element so that the bulb appears
  illuminated and reveals the reading list overlay.  You can extend
  this script to perform other actions when the light is toggled, such
  as switching the entire page between light and dark themes.
*/

document.addEventListener('DOMContentLoaded', () => {
  const lightSwitch = document.getElementById('light-switch');
  const overlay = document.getElementById('reading-overlay');

  lightSwitch.addEventListener('click', () => {
    const isOn = lightSwitch.classList.contains('light-on');
    if (isOn) {
      lightSwitch.classList.remove('light-on');
      overlay.classList.remove('show');
    } else {
      lightSwitch.classList.add('light-on');
      overlay.classList.add('show');
    }
  });
});