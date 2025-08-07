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
       let newnode=new Node(value)

       if(this.isEmpty()){
        this.root=newnode
       }else{
         this.insertNode(this.root,newnode)
       }
    }


    insertNode(root,newnode){
        if(newnode.value<root.value){
            if(root.left==null){
                root.left=newnode
            }else{
                this.insertNode(root.left,newnode)
            }
        }else if(newnode.value>root.value){
            if(root.right==null){
                root.right=newnode
            }else{
                this.insertNode(root.right,newnode)
            }
        }
    }


    search(value,root=this.root){
        if(!root){
            return false
        }else{
            if(root.value==value){
               return true
            }else if(value<root.value){
               return  this.search(value,root.left)
            }else if(value>root.value){
               return this.search(value,root.right)
            }
        }
    }


    minBst(root=this.root){
        if(!root.left){
           return root.value
        }else{
            return this.minBst(root.left)
        }
    }

    maxBst(root=this.root){
        if(!root.right){
            return root.value
        }else{
            return this.maxBst(root.right)
        }
    }

    inorder(root=this.root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    preorder(root=this.root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    postorder(root=this.root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
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


    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }

            if(!root.left)return root.right
            if(!root.right)return root.left

            const successorValue=this.min(root.right)

            root.value=successorValue

            root.right=this.deleteNode(root.right,successorValue)
        }

        return root
    }


    min(root){
        if(!root.left){
           return root.value
        }else{
            return this.min(root.left)
        }
    }


}

// function validateBst(root){
//     return isValidate(root,-Infinity,Infinity)
// }

// function isValidate(node,min,max){
//     if(!node){
//         return true
//     }

//     if(node.val<=min||node.val>=max){
//         return false
//     }

//     return isValidate(node.left,min,node.val)&&isValidate(node.right,node.val,max)
// }


function validateBst(root){
    return isValidateBst(root,-Infinity,Infinity)
}

function isValidateBst(node,min,max){
    if(!node){
        return true
    }

    if(node.value<=min&&node.value>=max){
        return false
    }

    return isValidateBst(node.left,min,node.value)&&isValidateBst(node.right,node.val,max)
}



let bst=new BinarySearch()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(6)
bst.insert(20)



console.log(validateBst(bst))