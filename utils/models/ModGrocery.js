import ModBase from "./ModBase";

class ModGroceryBuilder extends ModBase {
  insert({categoryId, label, stock=1, price=1000}) {
    this.DB.insert(this.tableName, {
      categoryId, label, stock, price
    })

    this.DB.commit()
  }
}

const ModGrocery = new ModGroceryBuilder('groceries', [
  "categoryId",
  "label",
  "stock",
  "price"
])

export default ModGrocery
