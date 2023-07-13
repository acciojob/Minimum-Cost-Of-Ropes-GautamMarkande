function calculateMinCost() {
  //your code here
	let inputstr = document.querySelector("#rope-lengths").value;
	let arrstr = inputstr.split(",");
	let arr = arrstr.map(Number);
  let minCost = 0;
  let sum = 0;
while(arr.length!==1){
    arr.sort((a,b)=>{
    return a-b;
    });
    let rope1 = arr.shift();
    let rope2 = arr.shift();
    sum +=rope1 + rope2;
    minCost  =  rope1 + rope2;
    arr.push(minCost);
}

//console.log(sum);
	const div = document.querySelector("#result");
	 div.innerText = sum;
}  
