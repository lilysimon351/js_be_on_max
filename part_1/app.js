let money = +prompt('Ваш бюджет на месяц?',''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-19');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let q = prompt('Введите обязательную статью расходов в этом месяце', ''),
        a = prompt('Во сколько обойдется?', '');

    if( typeof(q) != null && typeof(a) != null && q != '' && a != '' && q.length < 30 && a.length < 30 ) {
       appData.expenses[q] = a;
    } else {
        i--;
    }
}

/*let i = 0;
while(i < 2){
    let q = prompt('Введите обязательную статью расходов в этом месяце', ''),
        a = prompt('Во сколько обойдется?', '');
    if( typeof(q) != null && typeof(a) != null && q != '' && a != '' && q.length < 30 && a.length < 30 ) {
       appData.expenses[q] = a;
    } else {
        i--;
    }
    i++;
}
*/

/*let i = 0;
do {
    let q = prompt('Введите обязательную статью расходов в этом месяце', ''),
        a = prompt('Во сколько обойдется?', '');
    if( typeof(q) != null && typeof(a) != null && q != '' && a != '' && q.length < 30 && a.length < 30 ) {
       appData.expenses[q] = a;
    } else {
        i--;
    }
    i++;
} while(i < 2)*/

appData.moneyPerDay = appData.budget/30;


alert("бюджет на 1 день: " + appData.moneyPerDay);

if( appData.moneyPerDay < 100 ) {
    console.log('Минимальный уровень достатка');
} else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log('Средний уровень достатка');
} else if ( appData.moneyPerDay > 2000 ) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
} 