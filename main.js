class UserService {
  static async getAllUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Unable to fetch users");
      }
      const users = await response.json();
      console.log(users);
      return users;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getUser(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`User with id ${id} not found`);
      }
      const user = await response.json();
      console.log(user);
      return user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async addUser(user) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Unable to add user");
      }
      const result = await response.json();
      console.log(result);
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async updateUser(id, user) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`User with id ${id} not found`);
      }
      const updatedUser = await response.json();
      console.log(updatedUser);
      return updatedUser;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async deleteUser(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`User with id ${id} not found`);
      }
      const result = await response.json();
      console.log(result);
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async deleteUsers() {
    const idsToDelete = [1, 2, 3, 4, Math.floor(Math.random() * 9996) + 5];
    const deleteRequests = idsToDelete.map(id => UserService.deleteUser(id));
    try {
      const results = await Promise.allSettled(deleteRequests);
      console.log(results);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
