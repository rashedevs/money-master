function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        alert("Enter a valid amount in number");
        return;
    }
    else { return inputAmount; }
}
function getInnerText(fieldId) {
    const text = document.getElementById(fieldId);
    return text;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInputValue('income');
    const foodAmount = getInputValue('food');
    const rentAmount = getInputValue('rent');
    const clothAmount = getInputValue('clothes');
    const totalExpenses = foodAmount + rentAmount + clothAmount;

    if (totalExpenses > incomeAmount) {
        alert('Your total expense should be less than your income.');
    }
    else if (isNaN(incomeAmount) || isNaN(totalExpenses)) {
        alert('Invalid input.');
    }
    else {
        //----update total expenses ---
        const expenses = getInnerText('total-expense');
        expenses.innerText = totalExpenses;
        //--------update balance-------
        const updateBalance = incomeAmount - totalExpenses;
        const balanceField = getInnerText('balance');
        balanceField.innerText = updateBalance;
    }
})
document.getElementById('save-btn').addEventListener('click', function () {
    //-----------calculate savings------
    const savingsRate = getInputValue('savings');
    if (isNaN(savingsRate) || savingsRate < 0) {
        alert('Enter a valid savings rate.')
    }
    else {
        const incomeAmount = getInputValue('income');
        const balanceField = getInnerText('balance');
        const totalBalanceAmount = parseFloat(balanceField.innerText);
        const savingsAmount = (incomeAmount / 100) * savingsRate;
        if (savingsAmount > totalBalanceAmount) { alert('Not enough balance.') }
        else {//--update saving amount------
            const savingAmountField = getInnerText('savings-amount');
            savingAmountField.innerText = savingsAmount;
            const newBalance = totalBalanceAmount - savingsAmount;
            //---update remaining balance---
            const remainingBalanceField = getInnerText('remaining-balance');
            remainingBalanceField.innerText = newBalance;
        }
    }
})