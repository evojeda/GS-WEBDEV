alert("Bem Vindo");

function medidas(){
    const contador1 = document.getElementById("contador1");
    let valor1=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo1 =setInterval(()=>{
        valor1 +=1;

        contador1.innerHTML =+valor1;
        if(valor1 == 1256){
            //limpa o intervalo de tempo
            clearInterval(tempo1)
        }

    })

    // MEDIDOR 2
    const contador2 = document.getElementById("contador2");
    let valor2=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo2 =setInterval(()=>{
        valor2 +=1;

        contador2.innerHTML =+valor2;
        if(valor2 == 252){
            //limpa o intervalo de tempo
            clearInterval(tempo2)
        }

    })

    // MEDIDOR 3
    const contador3 = document.getElementById("contador3");
    let valor3=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo3 =setInterval(()=>{
        valor3 +=1;

        contador3.innerHTML =+valor3;
        if(valor3 == 1120){
            //limpa o intervalo de tempo
            clearInterval(tempo3)
        }
    })
    
    // MEDIDOR 4
    const contador4 = document.getElementById("contador4");
    let valor4=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo4 =setInterval(()=>{
        valor4 +=1;

        contador4.innerHTML =+ valor4;
        if(valor4 == 700){
            //limpa o intervalo de tempo
            clearInterval(tempo4)
        }

    })
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');

    emailError.textContent = '';
    phoneError.textContent = '';

    let valid = true;

    // Validação de e-mail
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    // Validação de número de telefone
    let phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Por favor, insira um número de telefone válido.';
        valid = false;
    }

    if (valid) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar o código para enviar os dados do formulário ao servidor
    }
});

var indexSlide = 0;
var time = 3000;
const images = ['./src/img/carrossel1.png','./src/img/carrossel2.png','./src/img/carrossel3.png'];

const slideShow = () => {
    const banner = document.getElementById('banner');
    banner.style.opacity = '0';

    setTimeout(() => {
        banner.style.transition = 'opacity 1s';
        banner.style.opacity = '1';
        banner.style.background = `url(${images[indexSlide]}) no-repeat center center/cover`;
    }, 350);

    indexSlide++;

    if (indexSlide === images.length) {
        indexSlide = 0;
    }

    setTimeout(slideShow, time);
};

slideShow();