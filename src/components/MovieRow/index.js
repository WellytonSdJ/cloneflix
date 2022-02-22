import React, {useState} from 'react';
import './index.css'
import nBefore from '../../assets/navigate_before.svg'
import nNext from '../../assets/navigate_next.svg'

function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0){
      x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2); // botão avança
    let listW = items.results.length * 150; // pegar tamanho total da lista, vezes o tamanho cada item (150)
    if ( (window.innerWidth - listW) > x) { //se a diferença da tela da tela do usuário e do tamanho da lista for maior que X....
      x = (window.innerWidth - listW) - 60 ;  // VOLTE PARA o tamanho da tela menos a lista. MENOS 60 que é o padding para a direita e para a esquerda
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <span class="navigate">
          <img src={nBefore} alt="navigate before" />
        </span>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <span class="navigate">
          <img src={nNext} alt="navigate next" />
        </span>
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) =>
            <div className="movieRow--item" key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;