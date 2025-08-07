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

    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }


    insertNode(root,newNode){
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



    preOrder(root=this.root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    


    levelOrder(){
        let queue=[this.root]

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
bt.insert(10)
bt.insert(20)
bt.insert(15)

bt.preOrder()

bt.levelOrder()

