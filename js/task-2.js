// class Storage {
//     #item;

//     constructor(params){
//         this.#item = params;
//     }

//     getItems() {
//         return this.#item;
//     }

//     addItem(newItem){
//         this.#item.push(newItem);
//         return this.#item;
//     }

//     removeItem(itemToRemove){
//          const indOfItemToRemove = this.#item.indexOf(itemToRemove);
//          if(!this.#item.includes(itemToRemove)){
//             return this.#item;
//          }
//          const newItems = this.#item.splice(indOfItemToRemove, 1);
//          return newItems;
                
//     }


// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]