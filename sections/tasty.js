const createTesty = () => {
  const testy = document.createElement('section');
  testy.classList.add('tasty_section');
  testy.innerHTML += `<div class="container_fluid">
  <h2>
    Very tasty fruits
  </h2>
</div>`;
  return testy;
}