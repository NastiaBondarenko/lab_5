const link = 'https://my-json-server.typicode.com/NastiaBondarenko/db';
const link2 = 'https://my-json-server.typicode.com/NastiaBondarenko/db2';

export const promisedAction = getContent(`${link2}/action`);
export const promisedCategory = getContent(`${link}/category`);
export const promisedPizza = getContent(`${link}/pizza`);
export const promisedIngridients = getContent(`${link}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}

