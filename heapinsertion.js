class Heap{
    constructor(){
        this.heap=[]
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }


    insertNode(value){
          this.heap.push(value)
          this.heapify()
    }

    heapify(){
        let index=this.heap.length-1

        while(index>0){
            let parentIndex=Math.floor(index/2)-1
            if(this.heap[parentIndex]<this.heap[index]){
                this.swap(parentIndex,index)
                index=parentIndex
            }else{
                break
            }
        }
    }


    deleteNode(){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length==1){
            this.heap.pop()
        }
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return max
    }

    heapifyDown(){
        let index=0
        let length=this.heap.length
        let largest=index

        let leftChild=2*index+1
        let rightChild=2*index+2

        while(true){
            if(leftChild<length&&this.heap[leftChild]>this.heap[index]){
                  largest=leftChild
            }

            if(rightChild<length&&this.heap[rightChild]>this.heap[index]){
                largest=rightChild
            }
            if(largest!==index){
                this.swap(largest,index)
                index=largest
            }else{

                break
            }
        }
    }
}

let heap=new Heap()

heap.insertNode(40)
heap.insertNode(30)
heap.insertNode(60)

heap.deleteNode()

console.log(heap.heap)

