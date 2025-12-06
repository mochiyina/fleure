document.addEventListener('DOMContentLoaded', function () {
    console.log("About page loaded");


const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025'],
        datasets: [{
            label: 'Monthly Sales',
            data: [1200, 1500, 1000, 1700, 1600, 1800],
            backgroundColor: '#7A8450'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return 'RM ' + context.parsed.y; 
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'RM ' + value;
                    }
                }
            }
        }
    }
});

});


function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'logout.php';
    }
}
