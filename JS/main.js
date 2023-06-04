$(document).ready(function() {
            $('#carousel-imagens').slick({
                autoplay: true,
            });

            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle();
            })

            $('#telefone').mask('(00) 00000-0000',)
            $('#cpf').mask('000.000.000-00')
            $('#cep').mask('00000-000')
            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    cpf: {
                        required: true,
                    },
                    endereco: {
                        required: true
                    },
                    cep: {
                        required: true
                    }
                },
                messages: {
                    nome: 'Por favor, escreva seu nome'
                },
                submitHandler: function(form) {
                    console.log(form)
                },
                invalidHandler: function(evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    console.log(camposIncorretos) 
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            })

            $('.lista-loja button').click(function() {
                const destino = $('#contato');
                const listaLoja = ($(this).parent().find('h3').text());
                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000)
            })
        })