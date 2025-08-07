class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
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
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }

        if(newNode.value>root.value){
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }


    searchKey(root,value){
       if(!root){
        return false
       }else{
        if(root.value==value){
            return true
        }else if(value<root.value){
             return this.searchKey(root.left,value)
        }else{
            return this.searchKey(root.right,value)
        }
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


    kthSmallest(k){
        let count=0
        let result=null
        function inorderTraversal(root){

            if(!root||result!==null){
                return
            }

            inorderTraversal(root.left)

            count++
            if(count==k){
                result=root.value
                return
            }

        inorderTraversal(root.right)

        }

        inorderTraversal(this.root)
        return result?result:null

    }


}

let bst=new BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(4)
bst.insert(7)
bst.insert(6)
bst.insert(8)

console.log(bst.searchKey(20))

console.log(bst.min())

console.log(bst.max())

console.log(bst.kthSmallest(3))