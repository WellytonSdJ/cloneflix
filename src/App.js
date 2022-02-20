import { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegar lista TOTAL
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //pegar filmes aleatórios para o features
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, chosen.media_type);
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => { window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false) };
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeatureMovie title={featuredData.title} item={featuredData} />
      }

      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>

      }

    </div>
  );
}

export default App;
