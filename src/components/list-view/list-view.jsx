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
                )
            })
        )
}