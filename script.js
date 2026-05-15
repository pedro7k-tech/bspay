document.addEventListener('DOMContentLoaded', () => {
    // Redirecionar após simulação de processamento rápido (1.5 segundos)
    setTimeout(() => {
        const targetNumber = '5545999204429';
        const message = 'Olá! Gostaria de falar com o suporte.';
        const encodedMessage = encodeURIComponent(message);
        
        window.location.href = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
    }, 1500);
});
