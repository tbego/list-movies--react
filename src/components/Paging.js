import React, { Component } from 'react';

class Paging extends Component {
    state = {
        pageSelected: 1,
    }

    changePage = (event) => {
        this.setState({ pageSelected: event.target.value });
    }

    render() {
        const divStyle = {
            backgroundColor: 'red'
        };

        const lstPages = [...Array(this.props.totalPages)].map((number, index) =>{
            return <li key={index} onClick={this.changePage} value={index} style={this.state.pageSelected === index ? divStyle : {}}>{index}</li>
        });
        return (
            <div className="paging">
                <ul>
                    {lstPages}
                </ul>
            </div>
        );
    }
}

export default Paging;
