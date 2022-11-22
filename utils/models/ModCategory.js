import ModBase from "./ModBase";

class ModCategoryBuilder extends ModBase {
  insert({label}) {
    this.DB.insert(this.tableName, {
      label
    })

    this.DB.commit()
  }
}

const ModCategory = new ModCategoryBuilder('categories', [
  'label'
])

export default ModCategory
