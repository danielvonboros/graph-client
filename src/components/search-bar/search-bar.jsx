import "./search-bar.css";

export function SearchBar(props) {
    
    return (
    <>
        <form className="search-field">
            <input type="text" id="filter" placeholder="Filter results" className="search-filter-wrapper" onChange={event => {props.onSearchInput(event.target.value)}}>

            </input>
        </form>
    </>
    )
}