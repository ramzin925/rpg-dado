function rolarDado() {
    const dado = document.getElementById('dado');
    const resultado = document.getElementById('resultado');

    //Add animação de rotação 
    dado.style.transform = 'rotate(360deg)';

    //Remover animação após rotação
    setTimeout(() => {
        dado.style.transform = 'rotatee(0deg)';
    }, 1000);


    //Resultados gerados aleatórios entre 1 e 6
    const dadoResultado = Math.floor(Math.random() * 6) + 1;

    //Resultado depois a animação 
    setTimeout(() => {
        dado.textContent = `${dadoResultado}`;
        resultado.textContent = `Resultado: ${dadoResultado}`;
    }, 1000);
}