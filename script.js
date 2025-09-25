document.addEventListener('DOMContentLoaded', function() {
    // Animasi sederhana untuk statistik (meskipun 0, bisa diubah)
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transition = 'opacity 1s ease-in-out';
    });

    // Fade in saat load
    setTimeout(() => {
        stats.forEach(stat => {
            stat.style.opacity = '1';
        });
    }, 500);

    // Efek hover pada section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Alert sederhana untuk demo interaksi (bisa dihapus)
    console.log('Website SMK Negeri 7 Batam loaded successfully!');
});