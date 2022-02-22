const API_KEY = '84c9f2984b58d70b2d314ee9ba4888d3';
const API_BASE = 'https://api.themoviedb.org/3/';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'originals',
        title: 'Originais',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'action',
        title: 'Ação',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'horror',
        title: 'Terror',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'romance',
        title: 'Romance',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
    },
    // {
    //     slug: 'principal',
    //     title: 'Principal',
      //   items: await basicFetch(`/movie/550?api_key=${API_KEY}`)
      // }
    ]
  },
  getMovieInfo: async (movieId, type) =>{
    let info = {};

    if(movieId){
      switch(type){
        case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
            info = null;
            break;
      }
    }


    return info;
  }
}

// https://api.themoviedb.org/3/movie/550?api_key=84c9f2984b58d70b2d314ee9ba4888d3