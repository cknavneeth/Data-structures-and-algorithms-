class Node{
    constructor(value){
         this.value=value
         this.left=null
         this.right=null
    }
}


class BinarySearch{
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
                return this.search(root.right,value)
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



    delete(value){
        this.root=this.deleteNode(this.root,value)
     }
     deleteNode(root, value) {
        if (!root) {
            console.log("Value not found:", value);
            return root;
        }
    
        if (value < root.value) {
            console.log("Going left from:", root.value);
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            console.log("Going right from:", root.value);
            root.right = this.deleteNode(root.right, value);
        } else {
            console.log("Found node to delete:", root.value);
    
            if (!root.left && !root.right) {
                console.log("No children, deleting:", root.value);
                return null;
            }
            if (!root.left) {
                console.log("Only right child, replacing:", root.value, "with", root.right.value);
                return root.right;
            } else if (!root.right) {
                console.log("Only left child, replacing:", root.value, "with", root.left.value);
                return root.left;
            }
    
            const successorValue = this.min(root.right);
            console.log("In-order successor of", root.value, "is", successorValue);
            root.value = successorValue;
            root.right = this.deleteNode(root.right, successorValue);
        }
        return root;
    }
    
     


}

let bst=new BinarySearch()

bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.search(15))

bst.delete(10)
console.log(bst.search(10))