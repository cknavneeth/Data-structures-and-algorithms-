class TrieNode{
    constructor(){
        this.child=new Array(26).fill(null)
        this.wordEnd=true
    }
}

function insertKey(root,char){
    let curr=root
    for(let ch of char){
        let index=ch.charCodeAt(0)-'a'.charCodeAt(0)

        if(curr.child[index]==null){
            let newnode=new TrieNode()
            curr.child[index]=newnode
        }
        curr=curr.child[index]
    }
}


function searchWord(root,char){
       let curr=root
       for(let ch of char){
        let index=ch.charCodeAt(0)-'a'.charCodeAt(0)

        if(curr.child[index]==null){
            return false
        }
        curr=curr.child[index]
       }
    return true
}

let root=new TrieNode()

let arr=['dog','doctor','doberman']

for(let val of arr){
    insertKey(root,val)
}


function longestCommonPrefix(root){
     let curr=root
     let prefix=''
     

     while(true){
        let children=0
        let nextIndex=-1
        for(let i=0;i<26&&children<2;i++){
        if(curr.child[i]!==null){
            children++
            nextIndex=i
        }
     }

       if(children!==1){
          
          break;
       }

       prefix+=String.fromCharCode(nextIndex+'a'.charCodeAt())
       curr=curr.child[nextIndex]
     }
     return prefix
     
}



function Delete(root,word){
    return deleteHelper(root,word,0)
}

function deleteHelper(node,word,index){

    if(!node){
        return false
    }


    if(index==word.length){
        if(!node.wordEnd)return false
        node.wordEnd=false
        return node.child.every(item=>item==null)
    }

    const charIndex=word[index].charCodeAt(0)-'a'.charCodeAt(0)

    const charToDelete=deleteHelper(node.child[charIndex],word,index+1)


    if(charToDelete){
        node.child[charIndex]=null
        return node.child.every(item=>item==null)
    }

}

console.log(searchWord(root,'dog'))

// console.log(longestCommonPrefix(root))

Delete(root,'dog')

console.log(searchWord(root,'dog'))