const addToForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");



//We need to generate this template to reuse it!
const generateTmpl = (userInput) => {

    const html = `
    <li class="itemlist list-group-item d-flex justify-content-between align-items-center">
            <span>${userInput}</span>
            <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

}


addToForm.addEventListener('submit', e => {

    e.preventDefault();
    const userInput = addToForm.add.value.trim();

    if(userInput.length > 2)
    {
        generateTmpl(userInput);
        addToForm.reset();
    }
});
//Deleting todos
list.addEventListener('click', (e) => {

    if(e.target.classList.contains("delete"))
    {
        e.target.parentElement.remove();
    }

});

//Function to search,writing it outside to make function reusable

const filter = (temp) => {
    Array.from(list.children) //Array of todos
    .filter((todoItem) => !todoItem.textContent.includes(temp)) //We want to keep items in array if then dont include temp
    .forEach((todoItem) => todoItem.classList.add('filtered'))
    //Contains elements that match so we can remove others
    Array.from(list.children) 
    .filter((todoItem) => todoItem.textContent.includes(temp)) //We want to keep items in array if then dont include temp
    .forEach((todoItem) => todoItem.classList.remove('filtered'))
};

//searching todos

search.addEventListener('keyup', () => {

    const temp = search.value.trim();
    filter(temp);

});

list.addEventListener('click',function(e)
{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
},false);

