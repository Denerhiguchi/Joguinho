document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const genreButtons = document.querySelectorAll('.genre-btn');
    const movieList = document.getElementById('movie-list');
    const recentReleases = document.getElementById('recent-releases');
    const movies = document.querySelectorAll('.movie');

    const filterMovies = () => {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedGenre = document.querySelector('.genre-btn.active')?.getAttribute('data-genre') || 'all';

        movies.forEach(movie => {
            const title = movie.getAttribute('data-title')?.toLowerCase() || '';
            const genre = movie.getAttribute('data-genre') || '';
            const releaseDate = new Date(movie.getAttribute('data-release') || '1970-01-01');

            const matchesSearch = title.includes(searchQuery);
            const matchesGenre = selectedGenre === 'all' || genre === selectedGenre;

            if (matchesSearch && matchesGenre) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    };

    searchInput.addEventListener('input', filterMovies);

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            genreButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterMovies();
        });
    });

    // Initial filtering
    filterMovies();
});
