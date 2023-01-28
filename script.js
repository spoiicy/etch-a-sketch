
let grid_size = prompt("Enter the size of grid");


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
