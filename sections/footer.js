const createFooter = () => {
  const footer = document.createElement('section');
  footer.classList.add('container-fluid');
  footer.classList.add('footer_section');

  footer.innerHTML += `<p>
  Copyright &copy; 2019 All Rights Reserved By
  <a href="https://html.design/">Free Html Templates</a>
</p>`;
  return footer;
}
