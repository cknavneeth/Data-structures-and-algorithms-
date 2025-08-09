class TrieNode{
   constructor(){
      this.child=new Array(26).fill(null)
      this.wordEnd=false
   }
}

function insertKey(root,key){
    let curr=root

    for(let c of key){
        let index=c.charCodeAt(0)-'a'.charCodeAt(0)

        if(curr.child[index]==null){
            let newnode=new TrieNode()
            curr.child[index]=newnode
        }
        curr=curr.child[index]
    }
    curr.wordEnd=true
}



function searchKey(root,key){
    let curr=root

    for(let c of key){
        let index=c.charCodeAt(0)-'a'.charCodeAt(0)
        if(curr.child[index]==null){
            return false
        }
        curr=curr.child[index]
    }
    return curr.wordEnd
}


function longestCommonPrefix(root){
    let curr=root
    let prefix=''
    

    while(true){
        let children=0
        let nextIndex=0
     for(let i=0;i<26&&children<2;i++){
        if(curr.child[i]!==null){
            children++
            nextIndex=i
        }
    }
        if(children!==1){
            break;
        }

        prefix+=String.fromCharCode(nextIndex+'a'.charCodeAt(0))
        curr=curr.child[nextIndex]
    
    }

    
    return prefix
    
}

let root=new TrieNode()

let array=['dog','donkey','doctor']
for(let item of array){
    insertKey(root,item)
}

console.log(searchKey(root,'dog'))
console.log(longestCommonPrefix(root))