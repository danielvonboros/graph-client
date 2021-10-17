import {FetchData} from '../fetch-data/fetch-data';
import { NavBar } from '../nav-bar/nav-bar';
import { SearchBar } from '../search-bar/search-bar';

export function MainView() {
    return (
        <>
            <NavBar />
            <FetchData />
            <SearchBar />
        </>
    )
}