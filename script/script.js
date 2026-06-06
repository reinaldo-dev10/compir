function mostrarMensagem(){
    alert('Bem-vindo ao projeto Raízes em Movimento!');
}

const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event){
    event.preventDefault();

    mensagem.innerHTML = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    mensagem.style.marginTop = '20px';
    mensagem.style.color = 'green';

    form.reset();
});

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        btnTopo.classList.add('show');
    }else{
        btnTopo.classList.remove('show');
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});
