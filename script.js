document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income');
    const incomeAmount = parseFloat(incomeField.value);
    // console.log(incomeAmount)
    const foodField = document.getElementById('food');
    const foodAmount = parseFloat(foodField.value);

    const rentField = document.getElementById('rent');
    const rentAmount = parseFloat(rentField.value);

    const clothField = document.getElementById('clothes');
    const clothAmount = parseFloat(clothField.value);

    //--update total expenses 
    const totalExpenses = foodAmount + rentAmount + clothAmount;
    const totalExpensesField = document.getElementById('total-expense');
    const totalExpensesAmount = parseFloat(totalExpensesField.innerText);
    totalExpensesField.innerText = totalExpenses + totalExpensesAmount;

    //--update balance-----
    const updateBalance = incomeAmount - totalExpenses;
    const balanceField = document.getElementById('balance');
    const totalBalanceAmount = parseFloat(balanceField.innerText);
    const updateNewBalance = totalBalanceAmount + updateBalance;
    balanceField.innerText = updateNewBalance;
})

document.getElementById('save-btn').addEventListener('click', function () {
    const savingsField = document.getElementById('savings');
    const savingsFieldRate = parseFloat(savingsField.value);
    //--calculate savings---
    const incomeField = document.getElementById('income');
    const incomeAmount = parseFloat(incomeField.value);
    const savingAmount = (incomeAmount / 100) * savingsFieldRate;

    //--update saving amount---
    const savingAmountField = document.getElementById('savings-amount');
    const savingAmountValue = parseFloat(savingAmountField.innerText);
    // const savingAmountValueTotal = savingAmountValue + savingAmount;
    // savingAmountField.innerText = savingAmountValueTotal;
    savingAmountField.innerText = savingAmount;

    //----update remaining balance---
    const balanceField = document.getElementById('balance');
    const totalBalanceAmount = parseFloat(balanceField.innerText);
    const newBalance = totalBalanceAmount - savingAmount;
    //--
    const remainingBalanceField = document.getElementById('remaining-balance');
    // const remainingBalanceFieldValue = parseFloat(remainingBalanceField.innerText);
    // remainingBalanceField.innerText = remainingBalanceFieldValue + newBalance;
    remainingBalanceField.innerText = newBalance;



})