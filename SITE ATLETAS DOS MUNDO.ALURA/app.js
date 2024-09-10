

document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search-section button');
    const searchInput = document.querySelector('.search-section input[type="text"]');
    const results = document.querySelectorAll('.item-resultado');

  
    function searchAthlete() {
        const query = searchInput.value.toLowerCase().trim();


        results.forEach(result => {
            result.style.display = 'none';
        });

        if (query === "") {
            alert("Por favor, digite o nome de um atleta para buscar.");
            return;
        }

   
        let found = false;
        results.forEach(result => {
            const athleteName = result.querySelector('h2 a').textContent.toLowerCase();
            if (athleteName.includes(query)) {
                result.style.display = 'block';
                found = true;
            }
        });

        if (!found) {
            alert("Nenhum atleta encontrado. Tente outro nome.");
        }
    }

    searchButton.addEventListener('click', searchAthlete);

   
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchAthlete();
        }
    });
});
