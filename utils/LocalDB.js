import { v4 as uuidv4 } from 'uuid';
const localStorageDB = require("localStorageDB")
const lib = new localStorageDB("library", "localStorage");
// Check if the database was just created. Useful for initial database setup

const Collection = {
  Categories: 'categories',
  Groceries: 'groceries'
}

const createGrocery = (label, categoryId) => {
  lib.insert(Collection.Groceries, {
    categoryId,
    label,
    stock: Math.floor(Math.random() * 50),
    price: Math.floor(Math.random() * 50000)
  })
}

const initTable = () => {
  if( lib.isNew() ) {
    lib.createTable(Collection.Categories, ["label"])
    lib.createTable(Collection.Groceries, ["categoryId", "label", "stock", "price"])

    lib.commit()
  } // endif

  console.log('Table Created')
}

const seedDummy = () => {
  const dummyCategories = ["Coffee", "Milk", "Juice", "Snack", "Main Course"]
  const dummyJuices = ['Manggo', 'Apple', 'Berry', 'Papaya', 'Avocado', 'Melon', 'Orange', 'Pineapple', 'Peach']

  dummyCategories.forEach(cat => {
    lib.insert(Collection.Categories, {
      label: cat
    })
  })

  lib.commit()

  const getJuice = lib.queryAll(Collection.Categories, {
    query: {label: "Juice"}
  });

  if(getJuice.length > 0) {
    dummyJuices.forEach(ju => createGrocery(ju, getJuice[0].ID))
  } // endif
  lib.commit()
  console.log('Dummy DB Created!')
}

const LocalDB = {
  initTable,
  seedDummy,
  createGrocery,
  Collection,
  lib
}
export default LocalDB
