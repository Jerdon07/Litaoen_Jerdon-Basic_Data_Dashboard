let totalUsers = document.getElementById('totalUsers');
let totalSales = document.getElementById('totalSales');


let button = document.getElementById('alertButton');

button.addEventListener("click", function() {
    alert("Total Users: " + totalUsers.textContent + ", Total Sales: " + totalSales.textContent);
});