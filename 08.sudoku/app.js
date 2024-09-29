const getCell = [... document.getElementsByClassName('cell-q')]
console.log(getCell)

const getcells = [... document.getElementsByClassName('cell-s')]
console.log(getcells[0])

let list1 = [8,7,6,5,4,3,2,1,9,5,4,3,2,1,9,8,7,6,1,9,2,7,6,8,4,3,5,1,9,8,4,3,2,7,6,5,7,6,5,1,9,8,4,3,2,3,2,4,6,5,7,9,8,1,3,2,1,6,5,4,9,8,7,9,8,7,3,2,1,6,5,4,5,4,6,8,7,9,2,1,3,1,1,1,1,1,1,1]

let list2 = [8,"",6,"",4,"","",1,9,"",4,3,"",1,9,"",7,"",1,"",2,"",6,"",4,"",5,"","",8,4,"",2,"",6,"",7,"",5,"",9,"",4,"",2,3,"",4,6,"",7,9,"",1,3,"",1,6,"",4,"",8,7,"",8,"",3,2,"",6,"",4,"",4,"",8,7,"",2,"",3]

getCell.forEach((ele, i)=>{
    ele.innerHTML = list2[i]
})


getcells.forEach((ele, id) => {
    ele.innerHTML = list1[id]
});