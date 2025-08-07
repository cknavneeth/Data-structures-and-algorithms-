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
       this.adjacencyList[vertex1].add(vertex2)
       this.adjacencyList[vertex2].add(vertex1)
    }


    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"-->"+[...this.adjacencyList[vertex]])
        }
    }


    dfs(start,visited=new Set()){
         console.log(start)
         visited.add(start)

         for(let neighbor in this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
         }
    }
}

let graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.dfs('A')