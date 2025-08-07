class Trienode{
    constructor(){
        this.child=new Array(26).fill(null)
        this.wordend=true
    }



    insertkey(root,key){
        let curr=root
        for(let s of key){
            let index=s.charCodeAt()-'a'.charCodeAt()
            if(curr.child[index]==null){
                let newNode=new Trienode()
                curr.child[index]=newNode
            }
            curr=curr.child[index]
        }
        curr.wordend=true
    }

    searchkey(root,key){
        let curr=root
        for(let s of key){
            let index=s.charCodeAt()-'a'.charCodeAt()
            if(curr.child[index]==null){
                return false
            }
            curr=curr.child[index]
        }
        return true;
    }


}

let root =new Trienode()

const array=['apple','developer']
for(let s of array){
    root.insertkey(root,s)
}

let arr=['apple','why']
for(let s of arr){
    console.log(root.searchkey(root,s))
}