class Node{
    constructor(val){
        this.value=val
        this.left=null
        this.right=null
    }
}

class BinarySearch{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(val){
        let node=new Node(val)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertElement(this.root,node)
        }
    }

    insertElement(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertElement(root.left,node)
            }
        }else if(node.value>root.value){
            if(root.right==null){
                root.right=node
            }else{
                this.insertElement(root.right,node)
            }
        }
    }

    search(root=this.root,val){
        if(!root){
            return false
        }else{
            if(root.val==val){
                return true
            }else if(val<root.value){
                return this.search(root.left,val)
            }else if(val>root.value){
                return this.search(root.right,val)
            }
        }
    }


    findKthSmallest(k,root=this.root){
        let count=0
        let result=null

        function inorder(root){
            if(!root||result!==null){
                return 
            }

                inorder(root.left)
                count++
                if(k==count){
                  result=root.value
                  return
                }
                inorder(root.right)
        }
        inorder(root)
        return result
    }

    depth(root=this.root){
        if(!root){
            return 0
        }
        let left=this.depth(root.left)
        let right=this.depth(root.right)

        return Math.max(left,right)+1
    }


}


let bst=new BinarySearch()
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(7)
bst.insert(30)
bst.insert(15)
console.log(bst.search(20))
console.log(bst.findKthSmallest(2))
console.log('Depth of the Tree',bst.depth())