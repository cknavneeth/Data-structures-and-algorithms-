function heapify(arr,n,i){
    let largest=i

    let left=2*i+1
    let right=2*i+2

    if(left<n&&arr[largest]<arr[left]){
        largest=left
    }
    
    if(right<n&&arr[largest]<arr[right]){
        largest=right
    }

    if(largest!==i){
        let temp=arr[i]
        arr[i]=arr[largest]
        arr[largest]=temp

        heapify(arr,n,largest)
    }

}


function heapSort(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>=0;i--){
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp

        heapify(arr,i,0)
    }
    return arr
}



let array=[9,3,4,7,8,2,1]


console.log(heapSort(array))