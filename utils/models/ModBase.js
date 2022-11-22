const localStorageDB = require("localStorageDB")
const localStorageKey = 'library'
export const DB = new localStorageDB(localStorageKey, "localStorage");

class ModBase {
  constructor(tableName='', column=[]) {
    this.tableName = tableName
    this.column = column
    this.DB = DB
  }

  rowCount() {
    return this.DB.rowCount(this.tableName)
  }

  isEmpty() {
    return this.rowCount() < 1
  }

  tableExists() {
    return this.DB.tableExists(this.tableName)
  }

  columnExists(param) {
    return this.DB.columnExists(this.tableName, param)
  }

  queryAll(param=null) {
    if(! param) {
      return this.DB.queryAll(this.tableName)
    } else {
      // const {query, limit, start, sort, distinct} = param
      return this.DB.queryAll(this.tableName, param)
    } // endif
  }

  createTable() {
    this.DB.createTable(this.tableName, this.column)
    this.DB.commit()
  }
}

export default ModBase
