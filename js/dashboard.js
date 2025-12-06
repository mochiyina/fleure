

document.addEventListener('DOMContentLoaded', function () {

    initProductCategoryChart();
    initCategoryChart();


    initBestsellerScroll();
});


function initProductCategoryChart() {
    const ctx = document.getElementById('productCategoryChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Roses', 'Tulips', 'Lilies', 'Orchids', 'Mixed', 'Sunflowers'],
            datasets: [{
                data: [25, 15, 12, 18, 20, 10],
                backgroundColor: ['#F9CDD5','#7A8450','#E8B4B8','#A4B494','#D4A5A5','#FFD700'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Product Distribution by Category' }
            },
            layout: { padding: { top: 10, bottom: 10, left: 10, right: 10 } }
        }
    });
}

function initCategoryChart() {
    const ctx = document.getElementById('categoryChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Roses', 'Tulips', 'Lilies', 'Orchids', 'Mixed', 'Sunflowers'],
            datasets: [{
                data: [25, 15, 12, 18, 20, 10],
                backgroundColor: ['#F9CDD5','#7A8450','#E8B4B8','#A4B494','#D4A5A5','#FFD700'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Product Categories' }
            }
        }
    });
}

function initBestsellerScroll() {
    const track = document.getElementById('bestsellerTrack');
    const prevBtn = document.getElementById('bestsellerPrev');
    const nextBtn = document.getElementById('bestsellerNext');

    if (!track || !prevBtn || !nextBtn) return;

    const cardWidth = track.querySelector('.bestseller-card')?.offsetWidth || 250;
    const gap = 16; 

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -cardWidth - gap, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    });


}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'logout.php';
    }
}
