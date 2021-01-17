const task = document.querySelector('.task')
const append = document.querySelector('.append')

//  add new list
let i = 1;
const add = document.querySelector('.append').addEventListener('click', function() {
    const newLabel = document.createElement('label')
    const newInput = document.createElement('input')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class','data')
    newLabel.setAttribute('for', 'label-'+i)
    newLabel.setAttribute('class','xixi')
    newInput.setAttribute('id','label-'+i)
    newInput.setAttribute('type','checkbox')
    const newText = prompt('Masukan list baru')
    if(newText != undefined && newText != '') {
        newLabel.innerHTML = newText;
        newDiv.appendChild(newInput)
        newDiv.appendChild(newLabel)
        task.insertBefore(newDiv, append)
        i++;
    }
})

// list hover
task.addEventListener('click',function(e) {
    if(e.target.classList.contains('data')){
        e.target.classList.toggle('centang')
    }
    if(e.target.tagName == 'LABEL'){
        e.target.parentNode.classList.toggle('centang')
    }
})

// delete list
const deleting = document.querySelector('.delete')
deleting.addEventListener('click',function() {
    const labell = document.querySelectorAll('.centang')
    labell.forEach(function(e){
        task.removeChild(e)
    })
})