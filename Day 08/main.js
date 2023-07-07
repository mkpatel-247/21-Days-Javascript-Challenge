const emojis = ["😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "🤗", "🤩",
  "😎", "🥳", "😍", "😱", "🤓", "😷", "🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵", "😶‍🌫️", "🥵", "🥶", "😳", "🤪", "😵", "🥴",
  "😵‍💫", "😠", "😡", "🤮", "🤢", "🤒", "😷", "🤬", "🤧", "😇", "🥳"];

const btn = document.getElementById('emoji-btn');

btn.addEventListener('mouseover', function () {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});

btn.addEventListener('mouseover', function () {
  btn.innerHTML = emojis[Math.floor(Nath.random() * emojis.length)];
});