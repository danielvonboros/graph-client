import React, { useEffect } from 'react';

import G6 from '@antv/g6';

import "./list-item.css"

export function ListItem(props){

    console.log(props.graph.data, props.id);

    const ref = React.useRef(null)
    let graph = null
  
    useEffect(() => {
      if(!graph) {
        const minimap = new G6.Minimap()
  
        graph = new G6.Graph({
          container: `c+${props.id}`,
          width: 400,
          height: 500,
          plugins: [minimap],
          modes: {
            default: ['drag-canvas', 'zoom-canvas']
          },
          defaultNode: {
            type: 'circle',
            labelCfg: {
              style: {
                fill: '#000000A6',
                fontSize: 10
              }
            },
            style: {
              stroke: '#72CC4A',
              width: 150
            }
          },
          defaultEdge: {
            type: 'line'
          },
          layout: {
            type: 'force',
            preventOverlap: true,
            linkDistance: d => {
              if (d.source.id === 'node0') {
                return 100;
              }
              return 30;
            },
          },
          nodeStateStyles: {
            hover: {
              stroke: 'red',
              lineWidth: 3
            }
          },
          edgeStateStyles: {
            hover: {
              stroke: 'blue',
              lineWidth: 3
            }
          }
        })
      }
      
      graph.data(props.graph.data)
    
    graph.render()
  
      graph.on('node:mouseenter', evt => {
        graph.setItemState(evt.item, 'hover', true)
      })
  
      graph.on('node:mouseleave', evt => {
        graph.setItemState(evt.item, 'hover', false)
      })
  
      graph.on('edge:mouseenter', evt => {
        graph.setItemState(evt.item, 'hover', true)
      })
  
      graph.on('edge:mouseleave', evt => {
        graph.setItemState(evt.item, 'hover', false)
      })
  
    }, [])
  

    if (props.graph.data === undefined) {
        return <div>Loading ...</div>
    }

    return <div ref={ref}></div>

  }