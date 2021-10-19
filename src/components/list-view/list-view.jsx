import { ListItem } from "../list-item/list-item";
import "./list-view.css"

export function ListView(props) {
    
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
        <div className="list-container">
            {props.graphs.map(graph => {
                return (
                        <div className="graph-container-outer">
                        <h2 className="heading2-light">{graph.name}</h2>
                        <div id={`c+${graph.id}`} key={`c+${graph.id}`} className="graph-container"></div>
                            <ListItem className="list-item" key={graph.id} graph={graph} id={graph.id} />
                        </div>
                )
        })}
        </div>
        )
}