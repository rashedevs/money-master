

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income');
    const incomeAmount = parseFloat(incomeField.value);
    console.log(incomeAmount)
    const foodField = document.getElementById('food');
    const foodAmount = parseFloat(foodField.value);

    const rentField = document.getElementById('rent');
    const rentAmount = parseFloat(rentField.value);

    const clothField = document.getElementById('clothes');
    const clothAmount = parseFloat(clothField.value);

    //--calculate total expenses---
    const totalExpenses = foodAmount + rentAmount + clothAmount;
    //--update balance-----
    const updateBalance = incomeAmount - totalExpenses;
    // console.log(updateBalance)
})