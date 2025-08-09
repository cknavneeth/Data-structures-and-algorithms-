function shortestPath(graph,start){
     let distance={}
     let queue=[start]
     let visited=new Set()

     for(let node in graph){
        distance[node]=Infinity
     }

     distance[start]=0

     while(queue.length>0){
        let current=queue.shift()
        visited.add(current)
        
        for(let neighbour of graph[current]){
            if(!visited.has(neighbour)){
                distance[neighbour]=distance[current]+1
                queue.push(neighbour)
                visited.add(neighbour)
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

console.log(shortestPath(graph,'A'))