//trieeee

class TrieNode{
    constructor(){
        this.child=new Array(26).fill(null)
        this.wordEnd=true
    }
}

function insertKey(root,key){
    let curr=root

    for(let c of key){
        let index=c.charCodeAt(0)-97
        if(curr.child[index]==null){
            let newNode=new TrieNode()
            curr.child[index]=newNode
        }
        curr=curr.child[index]
    }
    curr.wordEnd=true
}


//for searching
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


//gonna delete the word

function deleteKey(root,key){
    let curr=root

    for(let c of key){
        let index=c.charCodeAt(0)-'a'.charCodeAt(0)
        if(curr.child[index]==null){
            console.log("word not found")
            return
        }
        curr=curr.child[index]
    }
    if(curr.wordEnd){
        curr.wordEnd=false
        console.log("search for this word will lead to getting false")
    }
    return curr.wordEnd
}


function longestPrefix(root=this.root){
    let prefix=''
    let curr=root

    let children=0
    let nextIndex;

    while(true){
        for(let i=0;i<26;i++){
            if(curr.child[i]!==null){
                children++
                nextIndex=i
            }
        }
        if(children!==1){
            break
        }
        prefix+=String.fromCharCode(nextIndex+'a'.charCodeAt(0))
        curr=curr.child[nextIndex]
    }
    return prefix
}

let root=new TrieNode()

let arr=["dodoo","there",'doaju','dodid']
for(let key of arr){
    insertKey(root,key)
}


deleteKey(root,"do")


console.log(searchKey(root,"do"))

longestPrefix()