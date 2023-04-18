const createContact = () => {
  const contact = document.createElement('section');
  contact.classList.add('contact_section');
  contact.classList.add('layout_padding');

  const container = document.createElement('div');
  container.classList.add('container');

  const h2 = document.createElement('h2');
  h2.classList.add('font-weight-bold');
  h2.innerText = "Contact Us";
  container.append(h2);

  const row = document.createElement('div');
  row.classList.add('row');
  container.append(row);

  const col = document.createElement('div');
  col.classList.add('col-md-8');
  col.classList.add('mr-auto');
  row.append(col);

  const form = document.createElement('form');
  col.append(form);

  const formContainer = document.createElement('div');
  formContainer.classList.add('contact_form-container');
  form.append(formContainer);

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  const divMt1 = document.createElement('div');
  divMt1.classList.add('mt-5');

  const divMt2 = document.createElement('div');
  divMt2.classList.add('mt-5');

  const inputName = document.createElement('input');
  inputName.type = "text";
  inputName.placeholder = "Name";

  const inputPhone = document.createElement('input');
  inputPhone.type = "text";
  inputPhone.placeholder = "Phone Number";

  const inputEmail = document.createElement('input');
  inputEmail.type = "text";
  inputEmail.placeholder = "Email";

  const inputMessage = document.createElement('input');
  inputMessage.type = "text";
  inputMessage.placeholder = "Message";

  const button = document.createElement('button');
  button.textContent = "send";
  button.type = "submit";

  formContainer.append(div1);
  div1.append(inputName);

  formContainer.append(div2);
  div2.append(inputPhone);

  formContainer.append(div3);
  div3.append(inputEmail);

  formContainer.append(divMt1);
  divMt1.append(inputMessage);

  formContainer.append(divMt2);
  divMt2.append(button);

  contact.append(container);

  button.addEventListener('click', () => {
    FS.event('Message Sent', {
      name_str: inputName.value,
      phone_str: inputPhone.value,
      email_str: inputEmail.value,
      message_str: inputMessage.value
    });
  });

  return contact;
}