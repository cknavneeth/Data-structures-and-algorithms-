class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryFirstSearch{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insert (value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }


    insertNode(root,newNode){
          if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
          }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
          }


    }


    search(root=this.root,value){
       if(!root){
        return false
       }else{
        if(root.value==value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
           return  this.search(root.right,value)
        }
       }
    }


    inorder(root=this.root){
       if(root){
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
       }
    }


    min(root=this.root){
         if(!root.left){
            return root.value
         }else{
           return this.min(root.left)
         }

    }
    max(root=this.root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }

    }


    findKthsmallest(k){
         let count=0
         let result=null
         function inOrderTraversal(root){

            if(!root||result!==null){
                return
            }
              
            inOrderTraversal(root.left)
            count++

            if(count==k){
              result=  root.value
            }

            inOrderTraversal(root.right)

         }

         inOrderTraversal(this.root)
         return result?result:null
    }
}

let bst=new BinaryFirstSearch()

bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(4)
bst.insert(7)
bst.insert(6)
bst.insert(8)

bst.inorder()
console.log("search chyy",bst.search(7))

console.log('min ada',bst.min())

console.log("max ada",bst.max())

console.log( bst.findKthsmallest(3))

