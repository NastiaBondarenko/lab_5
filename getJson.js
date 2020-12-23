const link = 'https://my-json-server.typicode.com/NastiaBondarenko/db';
const link2 = 'https://my-json-server.typicode.com/NastiaBondarenko/db2';

export default const promisedAction = getContent(`${link2}/action`);
export default const promisedCategory = getContent(`${link}/category`);
export default const promisedPizza = getContent(`${link}/pizza`);
export default const promisedIngridients = getContent(`${link}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}
