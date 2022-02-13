[Aplicação CloneFlix](https://wellytonsdj.github.io/cloneFlix/)


# NÃO FINALIZADO

## Todas informações aqui contidas são anotações feitas durante a criação da aplicação que ainda encontra-se imcompleta.

# Componentes: 

[]Header
[]Feature
[x]List

Api utilizada: 

[The Movie DB](https://www.themoviedb.org/u/Well989?language=pt-BR)

https://wellytonsdj.github.io/cloneFlix/

chave da api
84c9f2984b58d70b2d314ee9ba4888d3

exemplo de requisição da api
https://api.themoviedb.org/3/movie/550?api_key=84c9f2984b58d70b2d314ee9ba4888d3

token de leitura da api:
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGM5ZjI5ODRiNThkNzBiMmQzMTRlZTliYTQ4ODhkMyIsInN1YiI6IjYyMDg0NzdmMjZkYWMxMDBlNTJmZTVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6XO-A24DC-Us2p5_BCVbcWOKCiWQnsdp8nMks68ZcI

dentro do movie DB pra conseguir os codigos dos filmes sériees de tv, collections e afins...
https://developers.themoviedb.org/3/getting-started/daily-file-exports


tv networks: http://files.tmdb.org/p/exports/tv_network_ids_02_12_2022.json.gz
collections:  http://files.tmdb.org/p/exports/collection_ids_02_12_2022.json.gz
movies: http://files.tmdb.org/p/exports/movie_ids_02_12_2022.json.gz
MM_DD_YYYY.json.gz

tvSeries: http://files.tmdb.org/p/exports/tv_series_ids_02_12_2022.json.gz


## Observação importante!

Como a API moviedb não estava funcionando as 'tv networks' nem os 'movies' que seriam partes importantes do projeto, repliquei os dados que estavam funcionando, por isso há tantas repetições de dados.

No entanto, assim que encontrar outra API que forneça dados de filmes da mesma maneira o arquivo tmdb pode ser fácilmente excluido e substituido com os dados da nova API.