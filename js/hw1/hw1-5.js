// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами
// нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в
// указанную страну.Обязательно используй switch.Формат сообщения:
// 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
let price;
let message;
let countryName = prompt('В какую страну Вы желаете оформить доставку товара?');

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

if (countryName === null) {
    alert('Отменено пользователем!');
} else {
    countryName =
        countryName[0].toUpperCase(1) + countryName.slice(1).toLowerCase();

    switch (countryName) {
        case CHINA:
            price = 100;
            break;
        case CHILE:
            price = 250;
            break;
        case AUSTRALIA:
            price = 170;
            break;
        case INDIA:
            price = 80;
            break;
        case JAMAICA:
            price = 120;
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
    if (price > 0) {
        message = `Доставка в ${countryName} будет стоить ${price} кредитов.`;
    } else {
        message = 'В вашей стране доставка не доступна';
    }
    console.log(message);
}
