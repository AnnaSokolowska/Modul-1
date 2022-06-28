'use strist';

{
    const earn = prompt('Введите сумму вашего дохода');
    switch (earn) {
        case (earn < 15000):
        console.log(`Сумма налога к уплате равна: ${earn * 0.13}`); 
        break;

        case (15000 <= earn <= 50000):
        console.log(`Сумма налога к уплате равна: ${earn * 0.2}`);
        break;
        
        case (earn > 50000):
        console.log(`Сумма налога к уплате равна: ${earn * 0.3}`); 
        break;
    }
}