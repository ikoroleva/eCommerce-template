const createMap = () => {
  const map = document.createElement('section');
  map.classList.add('map_section');
  map.innerHTML += `<div id="map" class="h-100 w-100 ">
  <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
  </div>`;
  return map;
}