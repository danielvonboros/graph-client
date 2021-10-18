export function ListView(props) {
    
    console.log(props.graphs);

    if (props.graphs === undefined) {
        return <div>Loading ...</div>
    }

    return( 
            props.graphs.map(graph => {
                return (<div key={graph.id}>
                    <h1>{graph.name}</h1>
                        </div>
                )}))

}
// props.graphs.data.nodes.map(node => {return (<h2>{node.label}</h2>)}) 