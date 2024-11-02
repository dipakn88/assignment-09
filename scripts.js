document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const rating = document.getElementById('rating').value;
    const watched = document.getElementById('watched').checked;
    
    addMovieToTable(title, director, rating, watched);
    
    // Clear form fields
    document.getElementById('movieForm').reset();
});

function addMovieToTable(title, director, rating, watched) {
    const tableBody = document.querySelector('#moviesTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${title}</td>
        <td>${director}</td>
        <td>${rating}</td>
        <td>${watched ? '✔️' : '❌'}</td>
    `;

    tableBody.appendChild(newRow);
}