const hero = document.createElement('div');
hero.classList.add('hero_area');
document.body.append(hero);

hero.append(createHeader());
hero.append(createSlider());

document.body.append(createServices());
document.body.append(createFruits());
document.body.append(createTesty());
document.body.append(createClients());
document.body.append(createContact());
document.body.append(createMap());
document.body.append(createInfo());
document.body.append(createFooter());

