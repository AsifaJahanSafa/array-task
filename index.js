// get friends array using while loop
const friends=['Elon','Warren','Mark', 'Bill'];
let i=0;
while(i<friends.length){
    console.log(i,":",friends[i]);
    i++
}

// reverse friends array using while loop
let n=0;
let reverse=[];
while(n<friends.length){
    console.log(friends[n]);
    reverse.unshift(friends[n]);
   n++
}

console.log(reverse)