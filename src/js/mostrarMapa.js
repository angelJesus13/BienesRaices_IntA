(function (){
    const lat = document.querySelector('#lat').textContent || 20.2741536;  // Coordenadas corregidas
    const lng = document.querySelector('#lng').textContent || -97.9598598;  // Coordenadas corregidas
    const calle = document.querySelector('#calle').textContent;
    const titulo = document.querySelector('#titulo').textContent;

    const mapa = L.map('mapa').setView([lat, lng], 16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Agregar el pin
    L.marker([lat, lng])
        .addTo(mapa)
        .bindPopup(calle)
})();
