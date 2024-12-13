(function (){
  const lat = 20.2741536; // Coordenadas de tu casa
  const lng = -97.9598598; // Coordenadas de tu casa
  const calle = "Mi Casa"; // Puedes personalizar el texto de la calle
  const titulo = "Mi Casa"; // Título de la propiedad o lugar

  const mapa = L.map('mapa').setView([lat, lng], 16)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  // Agregar el pin
  L.marker([lat, lng])
      .addTo(mapa)
      .bindPopup(calle)

})()
