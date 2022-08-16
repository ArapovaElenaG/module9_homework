// подготовка данных
let jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   // парсим JSON строку
   const jsonObject = JSON.parse(jsonString);
   
   // получаем элементы
   const listArr = jsonObject.list;
   
   // создаем результирующий объект
   const result = { list: [
     {name: listArr[0].name,
      age: +listArr[0].age,
      prof: listArr[0].prof},
     {name: listArr[1].name,
      age: +listArr[1].age,
      prof: listArr[1].prof}
   ] 
   }
   
   console.log(result);