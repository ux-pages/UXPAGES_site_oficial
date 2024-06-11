async function checkDomainAvailability() {
    const domainInput = document.getElementById("domain-name").value.trim();
    const availabilityResult = document.getElementById("availability-result");
    const availabilityNegative = document.getElementById("availability-negative");

    // Limpar mensagens anteriores
    availabilityResult.innerHTML = '';
    availabilityNegative.innerHTML = '';

    // Verificar se o campo de domínio não está vazio
    if (domainInput === '') {
        alert("Por favor, insira um domínio.");
        return;
    }

    // Verificar se o domínio inserido tem pelo menos 5 caracteres (sem contar a extensão)
    const domainWithoutExtension = domainInput.split('.')[0];
    if (domainWithoutExtension.length < 5) {
        alert("Por favor, insira um domínio válido com pelo menos 5 caracteres antes da extensão.");
        return;
    }

    // Verificar se o domínio inserido contém uma das extensões desejadas
    const allowedExtensions = ['.com', '.com.br', '.store', '.online', '.tech', '.net.br'];
    const isValidExtension = allowedExtensions.some(ext => domainInput.endsWith(ext));
    if (!isValidExtension) {
        alert("Por favor, insira um domínio com uma das seguintes extensões: .com, .com.br, .store, .online, .tech, .net.br");
        return;
    }

    const apiUrl = 'https://domain-checker7.p.rapidapi.com/whois';
    const options = {
        method: 'GET',
        url: apiUrl,
        params: { domain: domainInput },
        headers: {
            'X-RapidAPI-Key': 'da5242dd7cmsh51cf85cdd7c50a9p15ec76jsnd2f90295f56a',
            'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        if (response.data.available) {
            availabilityResult.classList.remove('hidden');
            availabilityResult.innerHTML = `
                <div class="result">
                    <img src="pictures/icons/check.png" alt="Ícone de verificação" width="20px" height="20px" onerror="this.style.display='none'">
                    <p>Domínio Disponível</p>
                </div>
                <div class="domain-result">
                    <div class="area-one">
                        <img src="pictures/icons/check.png" alt="" width="20px" height="20px" onerror="this.style.display='none'"> ${domainInput}
                    </div>
                    <div class="area-two">
                        <p>R$ 59.90 Por Ano</p>
                    </div>
                    <div class="area-three">
                        <button>QUERO ESTE DOMÍNIO</button>
                    </div>
                </div>`;
        } else {
            availabilityResult.classList.add('hidden');
            availabilityResult.innerHTML = '';
            alert(`O domínio ${domainInput} não está disponível.`);
        }
    } catch (error) {
        console.error('Erro ao verificar a disponibilidade do domínio:', error);
        alert("Ocorreu um erro ao verificar a disponibilidade do domínio. Por favor, tente novamente mais tarde.");
    }
}

document.getElementById("check-domain-button").addEventListener("click", checkDomainAvailability);
