// https://calculator.swiftutors.com/net-interest-margin-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netInterestMarginRadio = document.getElementById('netInterestMarginRadio');
const investmentReturnsRadio = document.getElementById('investmentReturnsRadio');
const interestExpensesRadio = document.getElementById('interestExpensesRadio');
const averageEarningAssetsRadio = document.getElementById('averageEarningAssetsRadio');

let netInterestMargin;
let investmentReturns = v1;
let interestExpenses = v2;
let averageEarningAssets = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

netInterestMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Investment Returns';
  variable2.textContent = 'Interest Expenses';
  variable3.textContent = 'Average Earning Assets';
  investmentReturns = v1;
  interestExpenses = v2;
  averageEarningAssets = v3;
  result.textContent = '';
});

investmentReturnsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Interest Margin';
  variable2.textContent = 'Interest Expenses';
  variable3.textContent = 'Average Earning Assets';
  netInterestMargin = v1;
  interestExpenses = v2;
  averageEarningAssets = v3;
  result.textContent = '';
});

interestExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Interest Margin';
  variable2.textContent = 'Investment Returns';
  variable3.textContent = 'Average Earning Assets';
  netInterestMargin = v1;
  investmentReturns = v2;
  averageEarningAssets = v3;
  result.textContent = '';
});

averageEarningAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Interest Margin';
  variable2.textContent = 'Investment Returns';
  variable3.textContent = 'Interest Expenses';
  netInterestMargin = v1;
  investmentReturns = v2;
  interestExpenses = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(netInterestMarginRadio.checked)
    result.textContent = `Net Interest Margin = ${computeNetInterestMargin().toFixed(2)} %`;

  else if(investmentReturnsRadio.checked)
    result.textContent = `Investment Returns = ${computeInvestmentReturns().toFixed(2)}`;

  else if(interestExpensesRadio.checked)
    result.textContent = `Interest Expenses = ${computeInterestExpenses().toFixed(2)}`;

  else if(averageEarningAssetsRadio.checked)
    result.textContent = `Average Earning Assets = ${computeAverageEarningAssets().toFixed(2)}`;
})

// calculation

function computeNetInterestMargin() {
  return ((Number(investmentReturns.value) - Number(interestExpenses.value)) / Number(averageEarningAssets.value)) * 100;
}

function computeInvestmentReturns() {
  return ((Number(netInterestMargin.value) / 100) * Number(averageEarningAssets.value)) + Number(interestExpenses.value);
}

function computeInterestExpenses() {
  return Number(investmentReturns.value) - ((Number(netInterestMargin.value) / 100) * Number(averageEarningAssets.value));
}

function computeAverageEarningAssets() {
  return (Number(investmentReturns.value) - Number(interestExpenses.value)) / (Number(netInterestMargin.value) / 100);
}