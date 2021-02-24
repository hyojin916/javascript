// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie'&& password === 'dream')||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRole(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({name: 'ellie', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      })
    });
  }
}

const userStorage = new UserStorage(); // new -> Class
const id = prompt('enter your ID');
const password = prompt('enter your Password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRole)
  .then(user => alert(`Hello ${user.name} , you have a ${user.role} role`))
  .catch(console.log);