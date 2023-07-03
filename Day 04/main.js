const words = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getPassword() {
  const chars = '0123456789/%?@#$%';
  const clength = chars.length;
  let password = '';

  while (password.length < 20) {
    password = password.concat(randomWord(chars.length));
    password = password.concat(chars[randomNumber(clength)]);
  }

  password = password.substring(0, 16);
  document.getElementById('password').value = password;

}

function randomNumber(e) {
  return Math.floor(Math.random() * e);
}

function randomWord() {
  const number = randomNumber(words.length);
  return words[number];
}

function copy() {
  var copyText = document.getElementById('password');
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Text Copied!");
}