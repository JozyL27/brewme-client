import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import Beer from './items'
import SearchByName from './searchByName'


export default class SearchBeer extends React.Component {
    state = {
        beers: [],
        page: 0,
        error: null
    }

    getBeers = () => {
        this.setState({ error: null })
        let pageNum = this.state.page
        pageNum += 1
        

        SearchBeerService.getPaginatedBeers(pageNum)
            .then(res => {
                this.setState({ beers: res, page: pageNum })
            })
            .catch(error => {
                this.setState({ error: error })
            })
    }

    previousPage = () => {
        this.setState({ error: null })
        let pageNum = this.state.page
        pageNum -= 1
        

        SearchBeerService.getPaginatedBeers(pageNum)
            .then(res => {
                this.setState({ beers: res, page: pageNum })
            })
            .catch(error => {
                this.setState({ error: error })
            })
    }

    getByName = event => {
        event.preventDefault()
        this.setState({ error: null })
        let beerName = event.target.search.value
        console.log(beerName)

        SearchBeerService.getByName(beerName)
        .then(res => {
            this.setState({ beers: res })
        })
        .catch(error => {
            this.setState({ error: error })
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

    renderPreviousButton() {
        return (
            <>
            <input type="button" value="Previous Brewskis" onClick={this.previousPage} />
            </>
        )
    }

    render() {
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <SearchByName byName={this.getByName}/>
            <Beer brewskis={this.state.beers}/>
            {this.state.page > 1
            ? this.renderPreviousButton()
            : null}
            {this.state.page > 0
            ? this.renderNextButton()
            : null}
            </section>
        )
    }
}