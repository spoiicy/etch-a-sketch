


let grid_size = prompt("Enter the size of grid");
if(grid_size>100){
    alert('Enter a number less than 100');
    location.reload();
}

let container = document.querySelector('.container');

for(let i = 0;i<grid_size;i++){

    let parent_grid_element = document.createElement('div');
    parent_grid_element.classList.add('parent-grid-element');
    container.appendChild(parent_grid_element);
    
    for(let j = 0 ;j<grid_size;j++){
    
        let child_grid_element_div = document.createElement('div');
        child_grid_element_div.classList.add('child-grid-element');      
        parent_grid_element.appendChild(child_grid_element_div);
    
    }
}




let grid_elements = document.querySelectorAll('.child-grid-element');
grid_elements.forEach((element) => {
    addEventListener('mouseover', function(e){

        if(e.target.className == 'child-grid-element') {
            e.target.style.background = "#" +Math.floor(Math.random()*16777215).toString(16);
        }
        
    });
});

