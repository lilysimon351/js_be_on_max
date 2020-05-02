let money = prompt('Ваш бюджет на месяц?',''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-19'),
    q1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a1 = prompt('Во сколько обойдется?', ''),
    q2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', '');
let appData = {
    money,
    timeData: time,
    expenses: {
        q1: a1,
        q2: a2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("бюджет на 1 день: " + money/30);