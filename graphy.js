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

    display(){
        for(let vertex in this.adjacencyList){
             console.log(vertex,'=>',[...this.adjacencyList[vertex]])
            
        }
    }

    deleteVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return false
        }
        for(let ver in this.adjacencyList[vertex]){
            this.adjacencyList[vertex].delete(ver)
        }
        delete this.adjacencyList[vertex]
    }


    deleteEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1].delete(vertex2)
        }

        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }


    Depth(start,visited=new Set()){
        console.log(start)
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)){
                this.Depth(neigh,visited)
            }
        }
    }

    Breadth(start){
       let queue=[start]
       let visited=new Set()
       visited.add(start)

       while(queue.length>0){
           let vertex=queue.shift()
           console.log(vertex)

           for(let neigh of this.adjacencyList[vertex])
           if(!visited.has(neigh)){
             visited.add(neigh)
             queue.push(neigh)
           }
       }
    }


}

let graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('C','B')
graph.display()
console.log(graph.hasEdge('A','B'))
graph.Depth('A')
graph.Breadth('A')


function graphcycle(graph){

    let visited=new Set()

    for(let start in graph){
       
        
        let queue=[[start,null]]
        visited.add(start)

        while(queue.length>0){

            const [current,parent]=queue.shift()

            visited.add(current)

            for(let neigh of graph[current]){
                if(!visited.has(neigh)){
                   queue.push([neigh,current])
                }else if(neigh!==parent){
                    return true
                }
            }
        }

        return false
    }
}
    
    const graph1 = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C']
};

console.log(graphcycle(graph1))


function hasSelfLoop(graph){
    for(let node in graph){
        if(graph[node].includes(node)){
            return true
        }
    }
    return false
}

const graph2={
    A:['A'],
    B:['A','C'],
    C:['A','B']
}

console.log('self loop',hasSelfLoop(graph2))