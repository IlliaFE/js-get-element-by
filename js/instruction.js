// методы взаимодействия с DOM
 
 
 
// усторевшие но устоявшиеся //
 
// обращаемся к документу.
 

// 1) по айди.
// 1) по айди. пиется в ковычках. шарп указывать не надо т.к. и так ясно из названия что мы ищем по id.
const box = document.getElementById('айди');
 
 
// 2) по классу.
// 2) по классу. пишется в ковычках. точку селектора указывать не надо т.к. и так ясно что из названия что мы ищем по классовому селектору.
const box = document.getElementsByClassName('селектор');


// 3) по обычному тэгу.
// 3) по обычному тэгу. пишется в ковычках. просто указать имя тэга, НО, их возьмет ВСЕ тэги с таким имемен на странице и вернет в переменную псевдомассив состоящий из коллекции одинаковых тегов.
const box = document.getElementsByTagName('тэг');
// что бы забрать таким способом только один элемент по тэгу(два способа):
//1 способ) надо создать всевдомассив(как выше) со всеми тегами, вывести его в консоль, посчитать под каким индексом нужный элемент(например, в коллекции он 4, значит индекс 5), и переписать вот так: 
const box = document.getElementsByTagName('тэг')[5];
// возьмет только 4 элемень из коллекции всевдомассива под этим тэгом.
//2 способ) получить коллекцию всевдомассива, НО, при использовании в коде везде подставлять индекс нужного элемента к которому хотим обратиться. пример получения и использования:
const box = document.getElementsByTagName('тэг');
console.log(box[5]);
//получили весь псевдомассив, но в работу даем только элемент с 5 индексом из этого массива.




// более актуальные методы //

// обращаемся к документу.

// 4) всех и любого
// универсальная вещь. может забрать сразу все элементы по селектору, или тэгу, или айди. можно даже по потомку и т.д. типа div>p, ul>li.list
// как можно ещё это сделать, вот ссылка 
// https://learn.javascript.ru/css-selectors
// но из-за того что в названии querySelectorAll не сказано какой элемент мы хотим взять, то тут уже надо указывать # для айди и . для селектора, что бы код понял, что именно мы берем. 
// const box = document.querySelectorAll('#box');
// const box = document.querySelectorAll('li.list');
const box = document.querySelectorAll('');
// так же возвращает в переменную псевдомассив, но уже не коллекцию, а Nodelist. что дает нам возможность использовать метод forEach() к этому всевдомассиву.




 // 5) только первый
//заберет только первый элемент по указаному именованию. много span'ов на странице?
// const box = document.querySelector('span');
// запишет в переменную только один. самый первый спэн на странице.
const box = document.querySelector('');




// небольшой типс:  
// название getelemenTbyid говорит о том, что по айдишнику мы забераем один элемент
// а название getelementSbytagname говорит о множественном числе.