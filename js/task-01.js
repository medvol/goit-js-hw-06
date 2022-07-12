const list = document.querySelector('#categories');
const listEl = Array.from(list.children);

console.log('Number of categories:', listEl.length);

console.log(listEl)

listEl.map(element => {
    const listTitleEl = element.querySelector('h2');
    const listEl = element.querySelectorAll('li');

    console.log(`Category: ${listTitleEl.textContent}`)
    console.log(`Elements: ${listEl.length}`)
        
    });