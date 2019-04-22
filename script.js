'use strict';

/* Первое домашнее задание */
//Создаём переменные money и time

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

//Создаём объект appData
let appData = {
    budzet: money,
    timeData: time,
    expenses: {},
    optionalExpsenses: {},
    income: [],
    savings: false 
};

//Задаём вопросы пользователю ( по два раза )
let x = prompt('Введите обязательную статью расходов в этом месяце', ''),
    x1 = prompt('Во сколько обойдётся?', ''),
    x2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    x3 = prompt('Во сколько обойдётся?', '')

//Записываем ответы в expenses
appData.expenses.x = x1;
appData.expenses.x2 = x3;

//Выводим бюджет на 1 день ( Месяц - 30 дней)
alert(appData.budzet/30);

