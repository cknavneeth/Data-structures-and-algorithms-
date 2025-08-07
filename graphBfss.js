class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        this.adjacencyList[vertex]=[]
    }

    addEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].includes(vertex2)&&
            this.adjacencyList[vertex2].includes(vertex1)
        )
    }

    dfs(start,visited=new Set()){
          console.log('this is dfs',start)
          visited.add(start)

          for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                this.dfs(neighbor,visited)
            }
          }
    }



    bfs(start){
        let queue=[start]
        let visited=new Set()
        visited.add(start)

        while(queue.length>0){
            let current=queue.shift()
            visited.add(current)
            console.log("this is bfs",current)
            
            for(let neighbor of this.adjacencyList[current]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

    


}


let graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('B','C')

graph.dfs('A')

graph.bfs('A')