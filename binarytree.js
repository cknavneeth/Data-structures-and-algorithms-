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
        return this.root===null
    }


    insert(value){
        let newNode=new Node(value)

        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertBinarytree(this.root,newNode)
        }
    }



    insertBinarytree(root,newNode){
        let queue=[root]

        while(queue.length>0){
            let current=queue.shift()
            
            if(current.left==null){
                current.left=newNode
                return
              }else{
                queue.push(current.left)
              }



              if(current.right==null){
                current.right=newNode
                return
              }else{
                queue.push(current.right)
              }
        }
         
    }



    //gonna delete a value
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


    //traversals
    inorder(root=this.root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }


    preOrder(root=this.root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root=this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(root=this.root){
        let queue=[root]

        while(queue.length>0){
            let current=queue.shift()
            console.log(current.value)

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }

    }






}

let bt=new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.insert(7)
bt.delete(3)

bt.levelOrder()
