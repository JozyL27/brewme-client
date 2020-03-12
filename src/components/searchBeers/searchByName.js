import React from 'react'

export default function SearchByName(props) {
    console.log(props.byName)
        return (
            <>
            <form className="searchDatabase" onSubmit={props.byName} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" value="Search" />
            </form>
            </>
        )
}