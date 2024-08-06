function init() {
  let karta = new ymaps.Map("id__map", {
    center: [55.75666270643997, 37.63078378750721],
    zoom: 13,
  });

  let sitoPianoMetka = new ymaps.Placemark(
    [55.77163373753056, 37.681723877058936],
    {},
    {
      iconLayout: "default#image", // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
      iconImageHref: "images/beer.png", // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
      iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
      iconImageOffset: [-22, -30], // отступ от центра
    }
  );

  let chickoRico = new ymaps.Placemark(
    [55.76860886656986, 37.6826654119861],
    {},
    {
      iconLayout: "default#image", // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
      iconImageHref: "images/beer.png", // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
      iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
      iconImageOffset: [-22, -30], // отступ от центра
    }
  );

  karta.controls.remove("searchControl"); // удаляем поиск
  karta.controls.remove("geolocationControl"); // удаляем геолокацию
  karta.controls.remove("trafficControl"); // удаляем контроль трафика
  karta.controls.remove("typeSelector"); // удаляем тип
  karta.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  karta.controls.remove("zoomControl"); // удаляем контрол зуммирования
  karta.controls.remove("rulerControl"); // удаляем контрол правил
  // karta.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  karta.geoObjects.add(sitoPianoMetka);
  karta.geoObjects.add(chickoRico);

  const sitoPiano__modal = document.querySelector(".sitoPiano__modal");
  const chickoRicko__modal = document.querySelector(".chickoRicko__modal");
  const cross = document.querySelector(".modal__cross"); // sito piano
  const crossChicko = document.querySelector(
    ".chickoRico__swiper-container .modal__cross"
  ); // chicko

  cross.addEventListener("click", () => {
    sitoPiano__modal.classList.remove("active");
  });

  crossChicko.addEventListener("click", () => {
    chickoRicko__modal.classList.remove("active");
  });

  sitoPianoMetka.events.add("click", () => {
    sitoPiano__modal.classList.add("active");
  });

  chickoRico.events.add("click", () => {
    chickoRicko__modal.classList.add("active");
  });

  new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 1000,
    direction: "horizontal",
    loop: true,
    speed: 900,
    // // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}

ymaps.ready(init);

// const man = new Object({
//     name: 'Max',
//     age: 35
// })

// Object.prototype.sayLastName = function() {
//     console.log('lololoshka')
// }

// man.sayLastName()

// const oleg = Object.create(man)

// console.log(oleg.age)

// console.log('Starting program')

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Wait pleaseee')

//         const programm = {
//             year: 2004,
//             model: 'bmw',
//             class: 'deluxe'
//         }
//         resolve(programm) // сюда можем передать наш объект чтобы потом передать его в then
//     }, 2000)
// })

// p.then((ourProgramm) => {
//     return new Promise (function(resolve, reject){
//         setTimeout(()=> {
//             ourProgramm.modified = true
//             console.log('Program is working')
//             resolve(ourProgramm)
//         }, 2000)
//     })
// })
// .then(programma => {
//     programma.forGirls = 'yeas'
//     console.log('finish', programma)
//     return programma
// })
// .catch(error => console.error('ОШИБКА!!', error)) // можно в любое место поставить но лучше в конец чтоб лишнюю "красноту" в консоли убрать
// .finally(() => console.log('Finally'))

function f() {
  const condition = true;
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve("success");
      }, 10000);
    } else {
      reject("error");
    }
  });
}

// f().then((res) => console.log(res)) // или такой варик

// или такой
async function f2() {
  console.log(await f());
}

f2();

// const f2 = async async => {
//     console.log(1)
//     console.log(await f())
//     console.log(2)
// }
//  f2()

// function delay(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'
// const urlka = () =>  fetch(url).then(response => response.json()).then(data => console.log(data))

// delay(2000)
// .then(() => console.log('helllooooo'))
// .then(() => delay(5000))
// .then(() => urlka())
// .catch(e => console.error('MISTAKE', e))

const url = "https://jsonplaceholder.typicode.com/users";

// делаем запрос по адресу
const xhr = new XMLHttpRequest();

//метод open откроет новое(?) соединение с сервером
xhr.open("GET", url); // нам нужно получить данные с сервера(поэтому это get запрос)

// чтобы обработать данные можем обратиться к xhr и важро это сделать перед отправкой запроса!!
//ОЧЕНЬ ВАЖНО ("потому что в начале мы дожны добавить новый слушатель")

// xhr.responseType = "json"; // аболютно тоже самое что JSON.parse(xhr.response) !!!!

xhr.onload = function () {
  if (xhr.status >= 400) {
    console.error(xhr.response);
    {
      /**могут быть ошибки от сервера типа нет такого юзера
    или ошибка авторизации (404 или 401 ошибка) то тогда чтоб 
    обходить такие ошибки делаем условие /** */
    }
  } else {
    console.log(JSON.parse(xhr.response)); //если все ок
  }
}; // пока мы не вызовем JSON.parse() у нас данные будут в формате строки!!!

//как обработать ошибки? тут ошибки от нас как я поняла, не самые глобальные как выше написано
xhr.onerror = () => {
  console.log(xhr.response);
};

// теперь нужно отправить запрос
xhr.send();




const url2 = "https://jsonplaceholder.typicode.com/users";
function sendRequest(method, urlWeNeed,) {
  return new Promise((resolve, reject) => {
    const xhr2 = new XMLHttpRequest();

    xhr2.open(method, urlWeNeed, body = null);

    // xhr2.responseType = 'json' // аболютно тоже самое что JSON.parse(xhr.response) !!!!
    xhr2.setRequestHeader('Content-Type', 'application/json' )

    xhr2.onload = function () {
      if (xhr2.status >= 400) {
        reject(xhr2.response);
      } else {
        resolve(JSON.parse(xhr.response)); //если все ок
      }
    };

    xhr2.onerror = () => {
      console.log(xhr2.response);
    };

    xhr2.send(JSON.stringify(body));
  });
}

sendRequest('POST', url2, {
    name: 'LIZA',
    age: 23
})
  .then((data) => console.log(data)) //чтобы в консоли все появилось!!
  .catch((err) => console.log(err));


// sendRequest("GET", url2)
//   .then((data) => console.log(data)) //чтобы в консоли все появилось!!
//   .catch((err) => console.log(err));




const url3 = "https://jsonplaceholder.typicode.com/users"

const lol = () => fetch(url3)
.then(res => res.json())
.then(res => console.log(res))
lol()

//другой варик с fetch

function sendRequestNew (method, url, body1 = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body1),
        headers: headers
    })
    .then(response => response.json())
    .catch(er => console.log('Что-то не так', er))
}

const body1 = {
    name: 'liza',
    age:23
}

sendRequestNew ('POST', url3, body1)
.then(lizaa => {
    lizaa.lastName = 'Anfinogentova'
    lizaa.hasABoyFriend = false
    return lizaa
}) // тут я так понимаю можно дополнять наш объект который мы отправили на сервер
.then(data => console.log(data))
.catch(err => console.log('ОШИБКА', err))