class Database {
  constructor() {
    this.connection = null;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect() {
    // connect to database
    this.connection = "Connected";
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true

db1.connect();

console.log(db1.connection); // 'Connected'
console.log(db2.connection); // 'Connected'
