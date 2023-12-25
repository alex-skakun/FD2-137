printWithDelay('Мама мыла раму тест тест2 тест3', [2, 3, 10]);

function printWithDelay(str, mass){
    setTimeout(() =>{
        const strmass = str.split(' ');
        console.log(strmass[0]);
        strmass.shift();
        if (mass.length > 1) mass.shift();
        if(strmass.length > 0) printWithDelay(strmass.join(' '), mass);
    }, mass[0]*1000);
}