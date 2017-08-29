export default class MovieDbApi {

    static API_URL = '';
    static API_KEY = '';
    static API_LANGUAGE = 'fr-FR';

    getGenres = () => {
        const urlGenres = `${MovieDbApi.API_URL}genre/movie/list?api_key=${MovieDbApi.API_KEY}&language=${MovieDbApi.API_LANGUAGE}`;
        return fetch(urlGenres)
            .then((response) => {
            return response.json().then((data) => {
                let tableGenres = {};
                data.genres.forEach((genre) => {
                    tableGenres[genre.id] = genre.name;
                });
                return tableGenres;
            })
        });
    };

    getMoviesUpcoming = (page) => {
        const urlUpComing = `${MovieDbApi.API_URL}movie/upcoming?api_key=${MovieDbApi.API_KEY}&language=${MovieDbApi.API_LANGUAGE}&page=`+page;
        return fetch(urlUpComing)
            .then((response) => {
            return response.json().then((data) => {
                return data;
            });
        });
    };
}
