import { ListItem } from "../list-item/list-item";
import "./list-view.css"

export function ListView(props) {
    
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
        <div className="list-container">
            {props.graphs.filter((graph) => {
                if(props.searchInput !== '') {const newGraphs = props.graphs.name.toLowerCase().includes(props.searchInput.toLowerCase())
                return newGraphs} else {return graph}
            }).map(graph => {
                return (
                        <div key={`gco_${graph.id}`}  className="graph-container-outer">
                        <h2 key={`h2_${graph.id}`} className="heading2-light">{graph.name}</h2>
                        <div id={`c+${graph.id}`} key={`gc_${graph.id}`} className="graph-container"></div>
                            <ListItem className="list-item" key={graph.id} graph={graph} id={graph.id} />
                        </div>
                )
        })}
        </div>
        )
}