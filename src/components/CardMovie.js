import React, { Component } from 'react';

class CardMovie extends Component {

    handleClick = () => {
        console.log('this is:', this);
        console.log('title is:', this.props.original_title);
    }

    render() {
        const divStyle = {
            display: '-webkit-box',
            height: 'calc(14px* 1.3 * 6)',
            fontSize: '14px',
            lineHeight: '1.3',
            WebkitLineClamp: '6',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const {poster_path, id, original_title, vote_average, release_date, genre_names, overview} = this.props;

        let lstGenres = '';
        genre_names.map((genre) =>
            lstGenres += (lstGenres === '') ? genre : ', '+genre
        );

        return (
            <li className="cardMovie" onClick={this.handleClick}>
                <div className="image">
                    <img data-sizes="auto" alt="Doctor Who" sizes="185px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} />
                </div>
                <div className="content">
                    <p className="info">
                        <a className="title" href={`/tv/${id}`} title={original_title} alt={original_title}>{original_title}</a>
                        <span className="vote_average">{vote_average}</span>
                    </p>

                    <p className="meta">
                        <span className="release_date">{release_date}</span>
                        <span className="genres">{lstGenres}</span>
                    </p>

                    <p className="overview" style={divStyle}>{overview}</p>

                    <p className="view_more"><a id={`/tv/${id}`} className="result" href={`/tv/${id}`} title={original_title} alt={original_title}>Plus d'infos</a></p>
                </div>
            </li>
        );
    }
}

export default CardMovie;
