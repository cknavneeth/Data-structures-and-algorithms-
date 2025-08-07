class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

}

class BinaryTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insertNode(value){
        let newNode=new Node(value)

        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertagain(this.root,newNode)
        }
   }


   //insert agian
   insertagain(root,newNode){
    let queue=[root]

    while(queue.length>0){
        let curr=queue.shift()
        if(curr.left==null){
            curr.left=newNode
            return
        }else{
          queue.push(curr.left)
        }


        if(curr.right==null){
            curr.right=newNode
            return
        }else{
            queue.push(curr.right)
        }
    }
   }


   //deleting a node

   delete(value){
    if(this.isEmpty()){
        return false
    }
    let queue=[this.root]
    let nodetodelete=null
    let lastnode=null

    while(queue.length>0){
        lastnode=queue.shift()
         
        if(lastnode.value==value){
            nodetodelete=lastnode
        }

        if(lastnode.left){
            queue.push(lastnode.left)
        }
        if(lastnode.right){
            queue.push(lastnode.right)
        }
    }


    if(nodetodelete){
        nodetodelete.value=lastnode.value
        this.removeDeepest(lastnode)
    }else{
        console.log("value not found")
    }
}


removeDeepest(deepest){
    let queue=[this.root]

    while(queue.length>0){
        let current=queue.shift()

        if(current.left==deepest){
            current.left=null
            return
        }else if(current.left){
            queue.push(current.left)
        }


        if(current.right==deepest){
             current.right=null
             return
        }else if(current.right){
            queue.push(current.right)
        }
    }
}


   levelOrder(root=this.root){
      let queue=[root]

      while(queue.length>0){
        let curr=queue.shift()
        console.log(curr.value)

        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
      }
   }

}


let bt=new BinaryTree()

bt.insertNode(10)
bt.insertNode(20)
bt.insertNode(30)

bt.delete(20)

bt.levelOrder()

   
