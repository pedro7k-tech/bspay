document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const whatsappInput = document.getElementById('whatsapp');

    // Máscara para WhatsApp
    whatsappInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obter valores
        const name = document.getElementById('name').value;
        const whatsapp = whatsappInput.value;
        const niche = document.getElementById('niche').options[document.getElementById('niche').selectedIndex].text;
        
        // Mostrar Overlay de Carregamento
        const overlay = document.getElementById('loadingOverlay');
        overlay.style.display = 'flex';

        // Redirecionar após simulação de processamento (2.5 segundos)
        setTimeout(() => {
            const targetNumber = '5545999204429';
            const message = `Olá! Quero migrar minha conta.`;
            const encodedMessage = encodeURIComponent(message);
            
            window.location.href = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
        }, 2500);
    });
});
