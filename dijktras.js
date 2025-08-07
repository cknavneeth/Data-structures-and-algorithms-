//dijktras algorithm in graph

function algorithm(graph,start){
    let distance={}
    let priorityQueue=[]
    let visited=new Set()

    for(let node in graph){
        distance[node]=Infinity
    }

    priorityQueue.push({node:start,distance:0})

      while(priorityQueue.length>0){
        priorityQueue.sort((a,b)=>a.distance-b.distance)
        let current=priorityQueue.shift()

        if(visited.has(current.node)){
            continue
        }


        visited.add(current.node)

        for(let neighbor in graph[current.node]){
            let weight=graph[current.node][neighbor]
            let newDistance=distance[current.node]+weight

            if(newDistance<distance[neighbor]){
               distance[neighbor]= newDistance
               priorityQueue.push({node:neighbor,distance:newDistance})
            }
        }
      }
      return distance
}

const weightedGraph = {
    A: { B: 1, C: 4 },
    B: { A: 1, D: 2, E: 5 },
    C: { A: 4, F: 3 },
    D: { B: 2 },
    E: { B: 5, F: 1 },
    F: { C: 3, E: 1 }
};

console.log(algorithm(weightedGraph,'A'))