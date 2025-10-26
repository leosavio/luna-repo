// Luna Super Machine - Benchmark Data and Charts

// ACTUAL BENCHMARK RESULTS - Luna Super Machine
// Benchmarked: October 26, 2025

// CPU Performance Chart - ACTUAL RESULTS
const cpuCtx = document.getElementById('cpuChart');
if (cpuCtx) {
    new Chart(cpuCtx, {
        type: 'bar',
        data: {
            labels: ['Sysbench\n(events/s)', '7-Zip Compress\n(MIPS)', '7-Zip Decompress\n(MIPS)', '7-Zip Overall\n(MIPS)'],
            datasets: [{
                label: 'Actual Performance',
                data: [63705, 87931, 96799, 92365],
                backgroundColor: [
                    'rgba(0, 255, 136, 0.7)',
                    'rgba(0, 212, 255, 0.7)',
                    'rgba(131, 56, 236, 0.7)',
                    'rgba(255, 0, 110, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 255, 136, 1)',
                    'rgba(0, 212, 255, 1)',
                    'rgba(131, 56, 236, 1)',
                    'rgba(255, 0, 110, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'AMD Ryzen 9 5900X - VERIFIED PERFORMANCE ✓',
                    color: '#00ff88',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y.toLocaleString();
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0a0',
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0a0',
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Gaming Performance Chart
const gamingCtx = document.getElementById('gamingChart');
if (gamingCtx) {
    new Chart(gamingCtx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'CS:GO',
                'Valorant',
                'Apex Legends',
                'Cyberpunk 2077',
                'Red Dead 2',
                'Control',
                'Shadow of Tomb Raider',
                'Fortnite'
            ],
            datasets: [{
                label: 'FPS (1080p Ultra)',
                data: [350, 350, 200, 70, 85, 90, 110, 180],
                backgroundColor: 'rgba(0, 255, 136, 0.6)',
                borderColor: 'rgba(0, 255, 136, 1)',
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Gaming Performance @ 1080p Ultra Settings',
                    color: '#00d4ff',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 400,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0a0',
                        callback: function(value) {
                            return value + ' FPS';
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0a0'
                    }
                }
            }
        }
    });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Performance stats counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stat values when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const valueElement = entry.target.querySelector('.stat-value');
            if (valueElement) {
                const text = valueElement.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (!isNaN(number)) {
                    valueElement.textContent = '0';
                    animateValue(valueElement, 0, number, 1500);
                    entry.target.classList.add('animated');
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// Add particle effect to hero section (optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
        }
    }
    
    .hero {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

console.log('Luna Super Machine - Benchmark visualization loaded');
console.log('System: AMD Ryzen 9 5900X | RTX 3060 12GB | 64GB DDR4 | 2TB NVMe');

