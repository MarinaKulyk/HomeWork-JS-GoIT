// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins.

// Добавляемый логин должен:
// 1. проходить проверку на длину от 4 до 16-ти символов включительно
// 2. быть уникален, то есть отсутствовать в массиве logins

// Разбей задачу на подзадачи с помощью функций.
// 0. Проверку на отсутствие аргументов или на правильный тип аргументов
// делать не нужно.

// 1. Напиши функцию isLoginValid(login), в которой проверь количество
// символов параметра login и верни true или false в зависимости от того,
// попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов
// включительно.

// 2. Напиши функцию isLoginUnique(allLogins, login), которая принимает
// список всех логинов и добавляемый логин как параметры и проверяет
// наличие login в массиве allLogins, возвращая true если такого логина
// еще нет и false если логин уже используется.

// 3. Напиши функцию addLogin(allLogins, login) которая:

// 1) Принимает новый логин и массив всех логинов как параметры
// 2) Проверяет валидность логина используя вспомогательную
// функцию isLoginValid
// 3) Если логин не валиден, прекратить исполнение функции addLogin и
// вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// 4) Если логин валиден, функция addLogin проверяет уникальность логина с
// помощью функции isLoginUnique
// 5) Если isLoginUnique вернет false, тогда addLogin не добавляет логин в
// массив и возвращает строку 'Такой логин уже используется!'
// 6) Если isLoginUnique вернет true, addLogin добавляет новый логин в
// logins и возвращает строку 'Логин успешно добавлен!'

// 🔔 Принцип единственной ответственности функции - каждая функция
// делает что-то одно. Это позволяет переиспользовать код и изменять
// логику работы функции только в одном месте, не затрагивая работу
// программы в целом.

// Предикатные функции возвращают только true или false. Такие функции
// принято называть начиная с is: isLoginUnique и isLoginValid в нашем
// случае.

// - isLoginUnique только проверяет есть ли такой логин в массиве и
// возвращает true или false.
// - isLoginValid только проверяет валидный ли логин и возвращает true
// или false.
// - addLogin добавляет или не добавляет логин в массив. При этом
// для проверок условия добавления использует результаты вызовов
// других функций - isLoginUnique и isLoginValid.

function isLoginValid(login, min = 4, max = 16) {
    let lengthLogin = login.length;
    const loginValid = lengthLogin >= min && lengthLogin <= max;
    return loginValid;
}

function isLoginUnique(allLogins, login) {
    'use strict';
    const loginUnique = allLogins.includes(login);
    if (loginUnique === true) {
        return false;
    }
    return true;
}

function addLogin(allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    if (isLoginValid(login) == false) {
        return (message = ERROR);
    } else if (isLoginUnique(allLogins, login) === true) {
        allLogins.push(login);
        // console.log(allLogins);
        return (message = SUCCESS);
    }
    return (message = REFUSAL);
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов
