import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
// import Beer from './items'



export default class SearchBeer extends React.Component {
    state = {
        beers: [],
        page: 0,
        error: null
    }

    // getBeers = () => {
    //     this.setState({ error: null })
    //     let pageNum = this.state.page
    //     pageNum += 1
        

    //     SearchBeerService.getPaginatedBeers(pageNum)
    //         .then(res => {
    //             this.setState({ beers: res, page: pageNum })
    //         })
    //         .catch(error => {
    //             this.setState({ error: error })
    //         })
    // }

    // previousPage = () => {
    //     this.setState({ error: null })
    //     let pageNum = this.state.page
    //     pageNum -= 1
        

    //     SearchBeerService.getPaginatedBeers(pageNum)
    //         .then(res => {
    //             this.setState({ beers: res, page: pageNum })
    //         })
    //         .catch(error => {
    //             this.setState({ error: error })
    //         })
    // }

    // componentDidMount() {
    //     this.getBeers()
    // }

    getByName = event => {
        event.preventDefault()
        this.setState({ error: null })
        let beerName = event.target.search.value
        beerName = beerName.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        encodeURIComponent(beerName)

        SearchBeerService.getByName(beerName)
        .then(res => {
            this.setState({ beers: res })
        })
        .catch(error => {
            this.setState({ error: error })
        })
    }

    // renderNextButton() {
    //     return (
    //         <>
    //         <input type="button" value="More Brewskis" onClick={this.getBeers} />
    //         </>
    //     )
    // }

    // renderPreviousButton() {
    //     return (
    //         <>
    //         <input type="button" value="Previous Brewskis" onClick={this.previousPage} />
    //         </>
    //     )
    // }

    render() {
        console.log(this.state.beers)
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <form className="searchDatabase" onSubmit={this.getByName} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" />
            </form>

            {this.state.beers.name && 
            <div>{this.state.beers.name}
            <p>{this.state.beers.descript}</p>
            <span>{this.state.beers.abv}</span>
            </div>}
            {/* {this.state.beers.length > 1 && 
            <Beer brewskis={this.state.beers}/>} */}
            {/* {this.state.page > 1
            ? this.renderPreviousButton()
            : null}
            {this.state.page > 0
            ? this.renderNextButton()
            : null} */}
            </section>
        )
    }
}