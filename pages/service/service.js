const hero = document.createElement('div');
hero.classList.add('hero_area');
hero.classList.add('sub_pages');
document.body.append(hero);

hero.append(createHeader());

document.body.append(createServices());
document.body.append(createInfo());
document.body.append(createFooter());