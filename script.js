let btn = document.getElementById('add')
btn.addEventListener('click', function () {
  let ul = document.getElementById('list');
  let list = ul.innerHTML;
  let inp = document.getElementById('inp').value;
  list += `<li class="yellow">${inp}<button>Delete</button></li>`
  ul.innerHTML = list;

  let refresh = document.getElementById('inp');
  refresh.value = '';
});

let ul = document.getElementById('list');
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('green');
  }
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('li').remove();
  }
});