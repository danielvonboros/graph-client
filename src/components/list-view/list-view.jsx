import { ListItem } from "../list-item/list-item";

export function ListView(props) {
    
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
            props.graphs.map(graph => {
                return (<>
                        <div id={`c+${graph.id}`} key={`c+${graph.id}`} className="graph-container"></div>
                            <ListItem key={graph.id} graph={graph} id={graph.id} />
                        </>
                )
            })
        )
}