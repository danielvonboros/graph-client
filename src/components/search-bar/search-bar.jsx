import "./search-bar.css";

export function SearchBar() {
    return (
    <>
        <form className="search-field">
            <div className="search-filter-wrapper">
            <label type="search" className="search-label">
                Filter:
            </label>
            <input type="text" id="filter">

            </input>
            </div>
        </form>
    </>
    )
}