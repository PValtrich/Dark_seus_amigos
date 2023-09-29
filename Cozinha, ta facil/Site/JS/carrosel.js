const images = document.querySelectorAll('.image-esquerda');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].style.left = '-100%'; // Move a imagem atual para a esquerda
            currentImageIndex = (currentImageIndex + 1) % images.length; // Avança para a próxima imagem
            images[currentImageIndex].style.left = '0'; // Exibe a próxima imagem
        }

        // Inicia o carrossel com um intervalo de 3 segundos (3000 milissegundos)
        setInterval(showNextImage, 3000);