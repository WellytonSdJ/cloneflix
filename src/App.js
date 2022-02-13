import { useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegar lista TOTAL
      let list = await Tmdb.getHomeList()      
      setMovieList(list)

      //pegar filme da lista
      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  return (
    <div className="page">
      header <br/>
      destaque WORKING<br/>
      lista OK <br/>
      {featuredData && 
        <FeatureMovie title={featuredData.title} item={featuredData}/>
      }

      <section className="lists">
      {
        movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))
      }
      </section>
    </div>
  );
}

export default App;
