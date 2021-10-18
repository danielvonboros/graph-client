import { ListItem } from "../list-item/list-item";

export function ListView(props) {
    
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
            props.graphs.map(graph => {
                return (<ListItem graph={graph} />
                )
            })
        )
}