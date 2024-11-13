const canvas = document.getElementById("coloring-canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color-picker");
const brushSize = document.getElementById("brush-size");

let painting = false;
let currentImage = null;
// Função para iniciar o colorir a imagem selecionada
function startColoring(imageSrc) {
    // Mostrar a área de colorir
    document.getElementById('coloring-area').style.display = 'block';

    // Obter o canvas e seu contexto
    const canvas = document.getElementById('coloring-canvas');
    const ctx = canvas.getContext('2d');

    // Carregar a imagem selecionada
    const img = new Image();
    img.src = imageSrc;

    img.onload = function() {
        // Ajustar o tamanho do canvas para a imagem
        canvas.width = img.width;
        canvas.height = img.height;

        // Desenhar a imagem no canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
    };

    // Definir o comportamento para desenhar no canvas
    let painting = false;
    let brushSize = document.getElementById('brush-size').value;
    let currentColor = document.getElementById('color-picker').value;

    // Função para começar a pintar
    function startPosition(e) {
        painting = true;
        draw(e);
    }

    // Função para parar de pintar
    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    // Função para desenhar
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;

        // Ajustar a posição do mouse para a posição do canvas
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    // Adicionar os eventos de mouse
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    // Atualizar a cor do pincel
    document.getElementById('color-picker').addEventListener('input', function() {
        currentColor = this.value;
    });

    // Atualizar o tamanho do pincel
    document.getElementById('brush-size').addEventListener('input', function() {
        brushSize = this.value;
    });
}

