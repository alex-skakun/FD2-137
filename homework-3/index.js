const columns = ['name', 'count', 'price'];
const data = [
    {name: 'Хлеб', count: null, price: undefined},
    {name: 'Молоко', count: 3, price: Infinity},
    {name: 'Сыр', count: 1, price: ``},
    {name: 'Вода', count: 2, price: NaN},
];

const data2 = [
    {name: 'Хлеб', count: null, price: 14.99},
    {name: 'Молоко', count: 3, price: 3.2},
    {name: 'Сыр', count: 1, price: 10, discount: '4'},
    {name: 'Вода', count: 2, price: 5.5},
];

const textTable2 = createTextTable2(data2);
console.log(textTable2);

const textTable = createTextTable(columns, data);
console.log(textTable);

function createTextTable2(dataArray){

    let resultTable = ``;
    
    if (dataArray.lenght === 0)
        return resultTable;

     //get all columns, becouse objects in dataArray may have different fields   
     const columnsObj = {};
     dataArray.forEach(currRow => {
        for (const currColumnKey in currRow) {
            const currValLength = currRow[currColumnKey] !== 0 && !currRow[currColumnKey] ? `` : currRow[currColumnKey].toString().length;
            if (columnsObj[currColumnKey]===undefined || currValLength > columnsObj[currColumnKey])
                columnsObj[currColumnKey] = currValLength;  
        }
     }); 

     //fill result table
     const dataArrayLength = dataArray.length;
     const columnsArrayLength = Object.keys(columnsObj).length;


     dataArray.forEach((currRow, indRow) => {
        resultTable += getTopRowLine(indRow, columnsObj, dataArrayLength, columnsArrayLength);     
        resultTable += getValeuLine(currRow, columnsObj, columnsArrayLength);  
    });
    return resultTable += getBottomTableLine(columnsObj); 
}

function createTextTable(columns, dataArray){

    let resultTable = ``;
    
    if (dataArray.lenght === 0)
        return resultTable;

        const columnsObj = {};
        dataArray.forEach(currRow => {
            columns.forEach(currCol => {
               const currValLength = currRow[currCol] !== 0 && !currRow[currCol] ? `` : currRow[currCol].toString().length;
               if (columnsObj[currCol]===undefined || currValLength > columnsObj[currCol])
                   columnsObj[currCol] = currValLength;  
           })
        }); 

     const dataArrayLength = dataArray.length;
     const columnsArrayLength = columns.length;

     dataArray.forEach((currRow, indRow) => {
        resultTable += getTopRowLine(indRow, columnsObj, dataArrayLength, columnsArrayLength);     
        resultTable += getValeuLine(currRow, columnsObj, columnsArrayLength);  
    });
    return resultTable += getBottomTableLine(columnsObj); 
}

function getTopRowLine(indRow, columnsObj, dataArrayLength, columnsArrayLength){

    let resultLine = ``;
    let indCol = 0;

    for (const currColumnKey in columnsObj){
        resultLine += getTopLeftBoxElement(indRow, indCol, dataArrayLength, columnsArrayLength);
        for(let i=0; i<columnsObj[currColumnKey]+1; i++)
            resultLine += `─`;

        resultLine += getTopRightBoxElement(indRow, indCol, dataArrayLength, columnsArrayLength);     
        indCol++;
    }    
    
    return resultLine += "\n";
}

function getBottomTableLine(columnsObj){

    let resultLine = ``;

    let indCol = 0;
    for (const currColumnKey in columnsObj){
        resultLine += getRightBotoomBoxElement(indCol);
        for(let i=0; i<columnsObj[currColumnKey]+1; i++)
            resultLine += `─`;     
        indCol++;   
    }    
    resultLine += `─┘`;
    
    return resultLine;
}

function getValeuLine(currRow, columnsObj, columnsArrayLength){
   
    let resultLine = ``; 
    let val;
    let boxLength;
    let valStr;
    let valLength;
    let addition;

    for (const currColumnKey in columnsObj){     
        val = currRow[currColumnKey] ?? ``;
        valStr = val.toString();
        addition = ``;
        resultLine += `│ `;
        for(let i = 0; i < columnsObj[currColumnKey] - valStr.length; i++){
            addition += ` `;
        }

        if (typeof(val) === 'string')
            resultLine += valStr + addition + ` `;   
        else 
            resultLine += addition + valStr + ` `;
    }

    return resultLine += "│\n";
}

function getTopLeftBoxElement(indRow, indCol, countRow, countCol){
    
    if(indRow===0 && indCol===0)
        return `┌`;    

    if(indCol===0)
        return `├`;  

    if(indRow===0)
        return `┬`;   

    return `┼`; 
}

function getTopRightBoxElement(indRow, indCol, countRow, countCol){

    if(indRow===0 && indCol===countCol-1)
        return `─┐`; 

    if(indCol===countCol-1)
        return `─┤`;    

    return  `─`;
}

function getRightBotoomBoxElement(indCol){

    if(indCol===0)
        return `└`; 

    return `─┴`;    
}