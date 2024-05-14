document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de clique ao botão de envio
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
  
        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const celular = document.getElementById('celular').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
  
        // Verifica se todos os campos foram preenchidos
        if (nome && celular && email && mensagem) {
            // Envia o e-mail usando a biblioteca smtp.js
            Email.send({
                Host: "smtp.gmail.com",
                Username: "arqdesingdeinteriores", // Coloque seu e-mail
                Password: "sua_senha", // Coloque sua senha
                To: "destinatario@example.com", // E-mail do destinatário
                From: email,
                Subject: `E-mail enviado por ${nome}`,
                Body: `Nome: ${nome}\nCelular: ${celular}\nE-mail: ${email}\nMensagem: ${mensagem}`

            })
            .then(function(response) {
                // Se o e-mail for enviado com sucesso, exibe uma mensagem
                alert('E-mail enviado com sucesso!');
                // Limpa os campos do formulário
                document.getElementById('nome').value = '';
                document.getElementById('celular').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensagem').value = '';
            })
            .catch(function(error) {
                // Se houver um erro no envio do e-mail, exibe uma mensagem de erro
                alert('Erro ao enviar o e-mail. Por favor, tente novamente.');
                console.error('Erro no envio do e-mail:', error);
            });
            
        } 
        else {
            // Se algum campo estiver em branco, exibe um alerta
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
  });


    function openWhatsApp() {
        // Número de telefone para o qual você deseja enviar mensagens
        var phoneNumber = '+55(31)994512892'

        // Texto da mensagem que você deseja enviar
        var message = 'Olá! Gostaria de obter mais informações.';

        // URL para o WhatsApp com o número de telefone e a mensagem
        var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

        // Abrir a janela do WhatsApp
        window.open(url);
    }  


    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona um evento de clique ao botão de envio
        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do formulário
      
            // Obtém os valores dos campos do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
      
            // Verifica se todos os campos foram preenchidos
            if (nome && celular && email && mensagem) {
                // Envia o e-mail usando a biblioteca smtp.js
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "arqdesingdeinteriores", // Coloque seu e-mail
                    Password: "sua_senha", // Coloque sua senha
                    To: "destinatario@example.com", // E-mail do destinatário
                    From: email,
                    Subject: `E-mail enviado por ${nome}`,
                    Body: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
    
                })
                .then(function(response) {
                    // Se o e-mail for enviado com sucesso, exibe uma mensagem
                    alert('E-mail enviado com sucesso!');
                    // Limpa os campos do formulário
                    document.getElementById('nome').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('mensagem').value = '';
                })
                .catch(function(error) {
                    // Se houver um erro no envio do e-mail, exibe uma mensagem de erro
                    alert('Erro ao enviar o e-mail. Por favor, tente novamente.');
                    console.error('Erro no envio do e-mail:', error);
                });
                
            } 
            else {
                // Se algum campo estiver em branco, exibe um alerta
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
      });
