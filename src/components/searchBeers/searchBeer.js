import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import Beer from './items'


export default class SearchBeer extends React.Component {
    state = {
        beers: [],
        page: 0
    }

    // getBeers = event => {
    //     event.preventDefault()
    //     let pageNum = this.state.page
    //     pageNum += 1
        

    //     SearchBeerService.getPaginatedBeers(pageNum)
    //         .then(res => {
    //             this.setState({ beers: res, page: pageNum })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    getBeers = () => {
        let pageNum = this.state.page
        pageNum += 1
        

        SearchBeerService.getPaginatedBeers(pageNum)
            .then(res => {
                this.setState({ beers: res, page: pageNum })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getBeers()
    }

    renderNextButton() {
        return (
            <>
            <input type="button" value="More Brewskis" onClick={this.getBeers} />
            </>
        )
    }

    render() {
        console.log(this.state)
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <form className="searchDatabase" onSubmit={this.getBeers} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" value="Search" />
            </form>
            <Beer brewskis={this.state.beers}/>
            {this.state.page > 0
            ? this.renderNextButton()
            : null}
            </section>
        )
    }
}