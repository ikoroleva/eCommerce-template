const createMap = () => {
  const map = document.createElement('section');
  map.classList.add('map_section');
  map.innerHTML += `<div id="map" class="h-100 w-100 ">
  </div>`;
  return map;
}