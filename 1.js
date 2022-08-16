// подготовка данных
let xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// создаем экземпляр класса DOMParser
const parser = new DOMParser();

// парсим xml строку
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

// получаем элементы
const listNode = xmlDOM.querySelector('list');
const studentIvanovNode = listNode.querySelector('student');
const nameIvanovNode = studentIvanovNode.querySelector('name');
const firstIvanovNode = nameIvanovNode.querySelector('first');
const secondIvanovNode = xmlDOM.querySelector('second');
const ageIvanovNode = studentIvanovNode.querySelector('age');
const profIvanovNode = xmlDOM.querySelector('prof');

// получаем атрибуты элемента
const langNameIvanov = nameIvanovNode.getAttribute('lang');

const studentPetrovNode = studentIvanovNode.nextElementSibling;
const namePetrovNode = studentPetrovNode.querySelector('name');
const firstPetrovNode = namePetrovNode.querySelector('first');
const secondPetrovNode = namePetrovNode.querySelector('second');
const agePetrovNode = studentPetrovNode.querySelector('age');
const profPetrovNode = studentPetrovNode.querySelector('prof');

const langNamePetrov = namePetrovNode.getAttribute('lang');

// создаем результирующий объект
const result = { list: [
  {name: firstIvanovNode.textContent + secondIvanovNode.textContent,
   age: +ageIvanovNode.textContent,
   prof: profIvanovNode.textContent,
   lang: langNameIvanov},
  {name: firstPetrovNode.textContent + secondPetrovNode.textContent,
   age: +agePetrovNode.textContent,
   prof: profPetrovNode.textContent,
   lang: langNamePetrov}
] 
}

console.log(result);




