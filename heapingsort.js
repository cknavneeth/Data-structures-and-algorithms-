function heapify(arr,n,i){
    let largest=i

    let leftChild=2*i+1
    let rightChild=2*i+2

    if(leftChild<n&&arr[leftChild]>arr[largest]){
        largest=leftChild
    }

    if(rightChild<n&&arr[rightChild]>arr[largest]){
        largest=rightChild
    }

    if(largest!==i){
        let temp=arr[i]
        arr[i]=arr[largest]
        arr[largest]=temp

        heapify(arr,n,largest)
    }
}



function heapsort(arr){
    let n=arr.length

    for(let i=Math.floor((n-1)/2);i>=0;i--){
        heapify(arr,n,i)
    }


    for(let i=n-1;i>=0;i--){
        let temp=arr[i]
        arr[i]=arr[0]
        arr[0]=temp

        heapify(arr,i,0)
    }
    return arr
}


let arr=[11,3,5,8,12,9]

console.log(heapsort(arr))