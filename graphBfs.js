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


    hasEdge(vertex1,vertex2){
        return(this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
    }


    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"-->"+[...this.adjacencyList[vertex]])
        }
    }

    deleteVertex(vertex){
        if(!this.adjacencyList[vertex]){
           return false
        }
        //forst remove the edges of this vertex
        for(let adjacentVertex of this.adjacencyList[vertex]){
               this.adjacencyList[adjacentVertex].delete(vertex)
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


    Bfs(start){
       let queue=[start]
       let visited=new Set()
       visited.add(start)

       while(queue.length>0){
        let vertex=queue.shift()
        console.log(vertex)

        for(let neighbor of this.adjacencyList[vertex]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
       }
    }




    bfss(start){
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


    dfss(start,visited=new Set()){
        console.log(start)
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)){
                this.dfss(neigh,visited)
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


graph.display()

graph.Bfs('C')