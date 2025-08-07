class Heap{
    constructor(){
        this.heap=[]
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]<this.heap[index]){
                this.swap(parentIndex,index)
                index=parentIndex
            }else{
                break
            }
        }
    }


    insertion(value){
          this.heap.push(value)
          this.heapifyUp()
    }


    deletion(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length==1){
            return this.heap,pop()
        }

        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return max
    }


    heapifyDown(){
        let index=0
        let length=this.heap.length
        let left=2*index+1
        let right=2*index+2

        let largest=index
        while(true){
            if(left<length&&this.heap[left]>this.heap[largest]){
                largest=left
            }
            if(right<length&&this.heap[right]>this.heap[largest]){
                largest=right
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

heap.insertion(10)
heap.insertion(20)
heap.insertion(30)

heap.deletion()



console.log(heap.heap)