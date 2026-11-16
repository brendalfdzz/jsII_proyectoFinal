import View from './View.js';
const icons = new URL('../../img/icons.svg', import.meta.url).href;

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = "No recipes found for your query";
    _message = '';

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(recipe) {
        return `
            <li class="preview">
                <a class="preview__link" href="#${recipe.id}">
                <figure class="preview__fig">
                    <img src="${recipe.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${recipe.title}</h4>
                    <p class="preview__publisher">${recipe.publisher}</p>
                    <div class="preview__user-generated">
                        <svg>
                            <use href="${icons}#icon-user"></use>
                        </svg>
                    </div>
                </div>
                </a>
            </li>
        `;
        
    }
}

export default new ResultsView();