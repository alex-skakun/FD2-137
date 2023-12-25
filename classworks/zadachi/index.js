function number(n) {
  let nToString = String(n);
  console.log(nToString);
  let nSplit = nToString.split('');
  console.log(nSplit);
  let nFilter = nSplit.filter((i) => i !== ',');

  let nSplitSum = nFilter.reduce(function (currentSum, currentNumb) {
    return Number(currentSum) + Number(currentNumb);
  });

  return nSplitSum;
}

console.log(number([292, 293]));
