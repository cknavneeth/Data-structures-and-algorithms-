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
            this.adjacencyList[vertex1]=new Set()
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2]=new Set()
        }
        this.adjacencyList[vertex1].add(vertex1)
        this.adjacencyList[vertex2].add(vertex1)

    }


    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
        }
    }



}


let graph=new Graph()


graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('B','C')
graph.display()