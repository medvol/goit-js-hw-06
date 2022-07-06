const listEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.length);


console.log(listEl)

listEl.forEach(element => {
    const listTitleEl = element.querySelector('h2');
    const listEl = element.querySelectorAll('li');

    console.log(`Category: ${listTitleEl.textContent}`)
    console.log(`Elements: ${listEl.length}`)
        
    });