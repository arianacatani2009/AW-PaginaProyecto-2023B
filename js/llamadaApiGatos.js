
    // Hacer una solicitud a la API utilizando fetch
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
      .then(response => response.json())
      .then(data => {
        // Actualizar dinámicamente las imágenes
        data.forEach((image, index) => {
          const imageUrl = image.url;
          document.querySelector(`.box-${index + 1} img`).src = imageUrl;
        });
      })
      .catch(error => {
        console.error('Error al obtener imágenes desde la API', error);
      });
