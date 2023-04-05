// Create the personAccount object
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: new Map(),
    expenses: new Map(),
  
    // Method to calculate total income
    get totalIncome() {
      let sum = 0;
      for (let income of this.incomes.values()) {
        sum += income;
      }
      return sum;
    },
  
    // Method to calculate total expense
    get totalExpense() {
      let sum = 0;
      for (let expense of this.expenses.values()) {
        sum += expense;
      }
      return sum;
    },
  
    // Method to get account info
    get accountInfo() {
      return `Account Information:\nName: ${this.firstName} ${this.lastName}\nIncome: ${this.totalIncome}\nExpense: ${this.totalExpense}`;
    },
  
    // Method to add income
    addIncome: function(description, amount) {
      if (!this.incomes.has(description)) {
        this.incomes.set(description, amount);
      } else {
        this.incomes.set(description, this.incomes.get(description) + amount);
      }
    },
  
    // Method to add expense
    addExpense: function(description, amount) {
      if (!this.expenses.has(description)) {
        this.expenses.set(description, amount);
      } else {
        this.expenses.set(description, this.expenses.get(description) + amount);
      }
    },
  
    // Method to calculate account balance
    get accountBalance() {
      return this.totalIncome - this.totalExpense;
    }
  };
  
  // Example usage:
  personAccount.addIncome('Salary', 5000);
  personAccount.addIncome('Bonus', 1000);
  personAccount.addExpense('Rent', 1500);
  personAccount.addExpense('Groceries', 500);
  console.log(personAccount.accountInfo);
  console.log(personAccount.accountBalance);
  