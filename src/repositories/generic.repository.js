export class GenericRepository {
  constructor(schema, db) {
    this._db = db
    this.schema = schema
  }

  async getAllAsync() {
    try {
      return await this._db.models[this.schema].findAll()
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async findByIdAsync(pk) {
    try {
      return await this._db.models[this.schema].findByPk(pk)
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async saveAsync(obj) {
    try {
      if (obj !== this._db.models[this.schema])
        throw new Error('Object is not an instance of ' + this.schema)
      return await this._db.models[this.schema].create(obj)
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async updateAsync(obj) {
    try {
      if (obj !== this._db.models[this.schema])
        throw new Error('Object is not an instance of ' + this.schema)
      return await this._db.models[this.schema].update(obj)
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async deleteAsync(pk) {
    try {
      const objToDelete = await this.findByIdAsync(pk)

      if (objToDelete) {
        objToDelete.destroy()
        return true
      }
      throw new Error('Object not found at delete')
    } catch (ex) {
      throw new Error(ex.message)
    }
  }
}
