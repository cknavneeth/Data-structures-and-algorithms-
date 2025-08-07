//

function bfsShortestPath(graph,start){
    let queue=[start]

    let distance={}

    for(let node in graph){
        distance[node]=Infinity
    }

    distance[start]=0

    while(queue.length>0){
        let current=queue.shift()
        for(let neighbor of graph[current]){
            if(distance[neighbor]==Infinity){
                distance[neighbor]=distance[current]+1
                queue.push(neighbor)
            }
        }

    }
    return distance
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

console.log(bfsShortestPath(graph,'A'))