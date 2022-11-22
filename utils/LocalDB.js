import { DB } from './models/ModBase'
import ModCategory from './models/ModCategory'
import ModGrocery from './models/ModGrocery'

const createGrocery = (label, categoryId) => {
  ModGrocery.insert({
    categoryId,
    label,
    stock: Math.floor(Math.random() * 50),
    price: Math.floor(Math.random() * 50000)
  })
}

const seedDummy = () => {
  const dummyCategories = ["Coffee", "Milk", "Juice", "Snack", "Main Course"]
  const dummyJuices = ['Manggo', 'Apple', 'Berry', 'Papaya', 'Avocado', 'Melon', 'Orange', 'Pineapple', 'Peach']

  dummyCategories.forEach(cat => {
    ModCategory.insert({
      label: cat
    })
  })

  const getJuice = ModCategory.queryAll({
    query: {label: "Juice"}
  });

  if(getJuice.length > 0) {
    dummyJuices.forEach(ju => createGrocery(ju, getJuice[0].ID))
  } // endif
  console.log('Dummy DB Created!')
}

const initTable = () => {
  if( DB.isNew() ) {
    ModCategory.createTable()
    ModGrocery.createTable()

    DB.commit()
  } // endif

  seedDummy()
  console.log('Table Created')
}

const LocalDB = {
  initTable,
  seedDummy
}
export default LocalDB
