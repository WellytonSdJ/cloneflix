import React from 'react';
import './index.css'

function FeatureMovie({ item }) {
  let checkDate = () => { // quando é filme ele puxa release quando série ele puxa first_air_date, por isso o condicional 
    if(item.first_air_date){
      return item.first_air_date
    } else {
      return item.release_date
    }
  }
  let firstDate = new Date(checkDate());

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview; //ajuste no tamanho do texto a ser mostrado;
  if(description.length > 200) {
    description = description.substring(0, 200)+'...';
  }


  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      {console.log('item ->', item)}
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">
            {item.original_name ? item.original_name : item.original_title }
            </div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            {item.number_of_seasons >= 1 && <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>}
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/'${item.id}`} className="featured--watchbutton">► Assistir</a>
            <a href={`/list/add${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>

          </div>
          <div className="featured--genres">
            <strong>
              Gêneros:
            </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>

  );
}

export default FeatureMovie;