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

    img.onload = function () {
        // Ajustar o tamanho do canvas
        canvas.width = img.width;
        canvas.height = img.height;
    
        // Limpar canvas e desenhar a nova imagem
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    
        // Obter as coordenadas corretas do mouse no canvas
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        // Configurar pincel
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;
    
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
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

