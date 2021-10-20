import "./search-bar.css";

export function SearchBar() {
    return (
    <>
        <form className="search-field">
            <input type="text" id="filter" placeholder="Filter results" className="search-filter-wrapper">

            </input>
        </form>
    </>
    )
}