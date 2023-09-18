const viewRecipeButtons = document.querySelectorAll('.btn-rec'); 
const recetaContainer = document.getElementById('receta-container');

viewRecipeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        recetaContainer.style.display = 'block';
    });
});
