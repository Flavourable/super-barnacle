// script.js
document.addEventListener('DOMContentLoaded', function() {
    const championList = document.getElementById('champion-list');
    const championDetails = document.getElementById('champion-details');

    // Mock data (replace with API call)
    const champions = [
        { id: 1, name: 'Ashe', winRate: '54%', build: ['item1.png', 'item2.png', 'item3.png'] },
        { id: 2, name: 'Zed', winRate: '52%', build: ['item4.png', 'item5.png', 'item6.png'] },
        { id: 3, name: 'Lux', winRate: '53%', build: ['item7.png', 'item8.png', 'item9.png'] },
        // Add more champions as needed
    ];

    // Display champion list
    champions.forEach(champion => {
        const championCard = document.createElement('div');
        championCard.classList.add('champion-card');
        championCard.textContent = `${champion.name} - ${champion.winRate}`;
        championCard.addEventListener('click', () => showChampionDetails(champion));
        championList.appendChild(championCard);
    });

    function showChampionDetails(champion) {
        championDetails.innerHTML = `
            <h2>${champion.name}</h2>
            <p>Win Rate: ${champion.winRate}</p>
            <h3>Best Build:</h3>
            <div>
                ${champion.build.map(item => `
                    <div class="build-item">
                        <img src="images/${item}" alt="${item}">
                        <span>${item.replace('.png', '')}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
});
