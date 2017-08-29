import React, { Component } from 'react';
import CardMovie from './CardMovie';
import Error404 from './Error404';
// import Paging from './Paging';
import MovieDbApi from '../utils/MovieDbApi';

class ListMovies extends Component {

    state = {
        listMovies: [],
        loading: false,
        pageSelected: 1,
        total_pages: ''
    }

    async loadApi() {
        const movieDbApi = new MovieDbApi(),
            listGenres = await movieDbApi.getGenres(),
            {results: listMovies, total_pages} = await movieDbApi.getMoviesUpcoming(this.state.pageSelected);

        this.setState({
            loading: false,
            listMovies: listMovies.map((movie) => {
                            return { ...movie, genre_names: movie.genre_ids.map((id) => {
                                return listGenres[id];
                            })};
                        }),
            total_pages: total_pages
        });
        console.log('load api');
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.loadApi();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('componentDidUpdate');
    //     if (this.state.pageSelected !== prevState.pageSelected) {
    //         console.log('update needed');
    //         this.loadApi();
    //     } else {
    //         console.log('update not needed');
    //     }
    //     // this.loadApi();
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        this.loadApi();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const
            {listMovies, pageSelected: pageSelectedPrev, loading: loadingPrev} = this.state,
            {pageSelected: pageSelectedNext, loading: loadingNext} = nextState;
    //     console.log('shouldComponentUpdate');
    //     console.log(this.state.listMovies.length, this.state.pageSelected, nextState.pageSelected);
    //     // Need to check the length of movies array because the call is asynchronous
         return (listMovies.length === 0 || pageSelectedPrev !== pageSelectedNext || loadingPrev !== loadingNext);
    //    return true;
    }

    changePage = (event) => {
        this.setState({ pageSelected: event.target.value, loading: true });
        // this.loadApi();
    }

    render() {
        console.log('render');
        const {listMovies, total_pages, loading} = this.state;

        console.log(loading);

        const divStyle = {
            backgroundColor: '#666',
            color: 'white'
        };

        const lstPages = [...Array(total_pages)].map((number, index) =>{
            let page = index+1;
            return <li key={page} onClick={this.changePage} value={page} style={this.state.pageSelected === page ? divStyle : {}}>{page}</li>
        });


        if (listMovies.length > 0) {
            return (
                <div>
                    <ul id="listPages">
                        {lstPages}
                    </ul>
                    {loading && <div>Loading ...</div>}
                    {loading === false && <ul id="listMovies">
                    {
                        listMovies.map((movie, key) => {
                            return <CardMovie key={key} {...movie} />
                        })
                    }
                    </ul>}
                </div>
            );
        } else {
            return <Error404 />
        }
    }
}

export default ListMovies;
