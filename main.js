class MockServer {
  #users = [];

  static getAllUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.#users);
      }, 1000);
    });
  }

  static getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.#users.find((user) => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error(`User with id ${id} not found`));
        }
      }, 1000);
    });
  }

  static addUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.id && user.name && user.age) {
          this.#users.push(user);
          resolve(true);
        } else {
          reject(new Error(`User object is not valid`));
        }
      }, 1000);
    });
  }

  static updateUser(id, user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.#users.findIndex((user) => user.id === id);
        if (index !== -1) {
          this.#users[index] = { ...this.#users[index], ...user };
          resolve(this.#users);
        } else {
          reject(new Error(`User with id ${id} not found`));
        }
      }, 1000);
    });
  }

  static deleteUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.#users.findIndex((user) => user.id === id);
        if (index !== -1) {
          this.#users.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error(`User with id ${id} not found`));
        }
      }, 1000);
    });
  }
}
MockServer.addUser({ id: 1, name: "John", age: 30 })
  .then(() => MockServer.getAllUsers())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

MockServer.getUser(1)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

MockServer.updateUser(1, { age: 31 })
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

MockServer.deleteUser(1)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const createUsers = async (usersArray) => {
  for (const user of usersArray) {
    await MockServer.addUser(user);
  }
};

const users = [
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 4, name: "Mary", age: 35 },
];

createUsers(users).catch((err) => console.log(err));
const readAllUsers = async () => {
  try {
    const users = await MockServer.getAllUsers();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

const readUserById = async (id) => {
  try {
  const user = await MockServer.getUser(id);
  console.log(user);
  } catch (err) {
  console.log(err);
  }
  };
  
  const addUser = async (user) => {
  try {
  const result = await MockServer.addUser(user);
  console.log(result);
  } catch (err) {
  console.log(err);
  }
  };
  
  const updateUser = async (id, user) => {
  try {
  const result = await MockServer.updateUser(id, user);
  console.log(result);
  } catch (err) {
  console.log(err);
  }
  };
  
  const deleteUser = async (id) => {
  try {
  const result = await MockServer.deleteUser(id);
  console.log(result);
  } catch (err) {
  console.log(err);
  }
  };
  
  const createUsers = async () => {
  const promises = [];
  for (let i = 1; i <= 100; i++) {
  const user = { id: i, name: User ${i}, age: Math.floor(Math.random() * 50) + 18 };
  promises.push(MockServer.addUser(user));
  }
  try {
  const results = await Promise.allSettled(promises);
  console.log(results);
  } catch (err) {
  console.log(err);
  }
  };