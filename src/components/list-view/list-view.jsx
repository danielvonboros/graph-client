import { ListItem } from "../list-item/list-item";
import "./list-view.css"

export function ListView(props) {
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
        <div className="list-container">
            {props.graphs.filter( function (graphs) {
                if (props.searchInput !== '') return graphs.name.toLowerCase().includes(props.searchInput.toLowerCase())
                 else {return graphs}
            }).map(graphs => {
                return (
                        <div key={`gco_${graphs.id}`}  className="graph-container-outer">
                        <h2 key={`h2_${graphs.id}`} className="heading2-light">{graphs.name}</h2>
                        <div id={`c+${graphs.id}`} key={`gc_${graphs.id}`} className="graph-container"></div>
                            <ListItem className="list-item" key={graphs.id} graph={graphs} id={graphs.id} />
                        </div>
                )
        })}
        </div>
        )
}