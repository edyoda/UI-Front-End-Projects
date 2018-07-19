var submitBtn = document.getElementById('submitButton');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
submitBtn.addEventListener('click',addItem);
// Item Delete Event
itemList.addEventListener('click',delItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
//    console.log("hi");
    var itemName = document.getElementById('itemName').value;
//    console.log(itemName);
    
    // Create a li element 
    var li = document.createElement('li');
    
    // add classes to the li element
    li.className = "list-group-item";
    
    // create a textNode 
    var liText = document.createTextNode(itemName);
    
    // append the textNode in the li element
    li.appendChild(liText);
    
    // append the li element to the list
    document.getElementById('items').appendChild(li);    
    
    //create a button element
    var delBtn = document.createElement('button');
    
    // add classes to the button 
    delBtn.className = "btn btn-danger float-right btn-sm delete";
    
    // create a textNode for button element
    var btnText = document.createTextNode('X');
    
    // append the text node to the button element
    delBtn.appendChild(btnText);
    
    // append the button to the li element
    li.appendChild(delBtn);
}

// Function for Delete Item
function delItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure To Delete This Item ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Function for Filter Items
function filterItems(e){
    // Convert Text to Lower Case
    var text = e.target.value.toLowerCase();
    
    // Get all the li's
    var items = itemList.getElementsByTagName('li');
//    console.log(items);
    
    // Convert to an array, the HTML Collection which we got in above step which is stored in items
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
    
}




















