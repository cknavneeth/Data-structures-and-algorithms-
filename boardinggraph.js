class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
           this.adjacencyList[vertex]=new Set()
        }    
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }


    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
    }

    deleteVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return false
        }

        for(let adjacent of this.adjacencyList[vertex]){
            this.adjacencyList[adjacent].delete(vertex)
        }

        delete this.adjacencyList[vertex]
    }


    Dfs(start,visited=new Set()){
        console.log(start)
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)){
                this.Dfs(neigh,visited)
            }
        }
    }


    Bfs(start){
        let queue=[start]
        let visited=new Set()
        visited.add(start)

        while(queue.length>0){
            let vertex=queue.shift()
            console.log(vertex)

            for(let neigh of this.adjacencyList[vertex]){
                if(!visited.has(neigh)){
                    visited.add(neigh)
                    queue.push(neigh)
                }
            }
        }
    }


    
}


function hasCycle(graph){
    let visited=new Set()

    for(let start in graph){
        if(!visited.has(start)){
        let queue=[[start,null]]
        visited.add(start)

        while(queue.length>0){
            let [current,parent]=queue.shift()

            for(let val of graph[current]){
                if(!visited.has(val)){
                    queue.push([val,current])
                }else {
                    if(val!==parent){
                        return true
                    }
                }
            }

        }
    }

}

    return false
}

let graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('B','A')
graph.addEdges('C','B')
graph.addEdges('C','A')
// graph.Dfs('A')
graph.Bfs('A')


const directedGraph = {
  A: ['B'],
  B: [],
  C: ['D'],
  D: []
};



console.log(hasCycle(directedGraph))