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
             let newNode=new TrieNode()
             curr.child[index]=newNode
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

//here iam finding the longest prefix
function findingTheLongestPrefix(root){
    let curr=root
    let prefix=''
    let children=0
    let nextIndex=-1


    while(true){
        children=0
        for(let i=0;i<26;i++){
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


//function deletion
// function deleteKey(root,key){
//     let curr=root

//     for(let c of key){
//         let index =c.charCodeAt(0)-'a'.charCodeAt(0)
//         if(curr.child[index]==null){
//             console.log('word not found')
//             return
//         }
//         curr=curr.child[index]
//     }
//     if(curr.wordEnd){
//         curr.wordEnd=false
//         console.log('deleted successfully')
//     }
//     return curr.wordEnd
// }


function deleting(root,word){
   deleteHelper(root,word,0)
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

    let charIndex=word[index].charCodeAt(0)-'a'.charCodeAt(0)

    const charneedtodelete=deleteHelper(node.child[charIndex],word,index+1)

    if(charneedtodelete){
        node.child[charIndex]=null
        return !node.wordEnd&&node.child.every(item=>item==null)

    }

    return false

}







let root=new TrieNode()

let arr=["dog", "doctor", "dock"]

for(let word of arr){
    insertKey(root,word)
}

console.log(searchKey(root,'dog'))
deleting(root,'dog')
console.log(searchKey(root,'doctor'))