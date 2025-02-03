// Task 1: Product Price Management
let prices = [19.99, 25.50, 30.00, 15.75, 22.40];
prices.push(18.90);
prices.shift();
console.log("Updated Price List:", prices);

// Task 2: Modifying Customer Orders
let orders = [10, 15, 8, 20, 5];
orders[2] += 5;
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);

// Task 3: Employee Performance Tracking
let employee = {
    name: "Jenny Tran",
    role: "Data Analyst",
    performanceScore: 85,
    isActive: true
};
employee.performanceScore = 90;
employee.promotionEligible = true;
console.log("Updated Employee Record:", employee);

// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Jaden Ly", feedbackText: "Great service!", rating: 5 },
    { customerName: "Krystal Nguyen", feedbackText: "Good quality.", rating: 4 },
    { customerName: "Hazel Duong", feedbackText: "Fast shipping!", rating: 5 }
];
feedback.push({ customerName: "Bill Tran", feedbackText: "Will buy again!", rating: 5 });
console.log("Customer Feedback Records:", feedback);

// Task 5: Inventory Management System
let inventory = {
    itemName: "Laptop",
    stockCount: 50,
    price: 750,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());
