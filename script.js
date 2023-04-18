function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");
	const rows = prompt("Input number of rows");
	const cols = prompt("Input number of columns");
	
	
	for(let i = 0; i<rows; i++){
		const newrow = table.insertRow(i)
		 for(let j=0; j<cols; j++){			 
			 const cell = newrow.insertCell(j);
			 cell.innerText = "Row-"+i+"Column-"+j;
		 }
	}
	
  
}
