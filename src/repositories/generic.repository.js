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
      if (typeof pk !== 'number') throw new Error('User ID must be a number')
      return await this._db.models[this.schema].findByPk(pk)
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async saveAsync(obj) {
    try {
      /* console.log(typeof this._db.models[this.schema])
      if (obj !== this._db.models[this.schema])
        throw new Error('Object is not an instance of ' + this.schema) */
      return await this._db.models[this.schema].create(obj)
    } catch (ex) {
      throw new Error(ex.message)
    }
  }

  async updateAsync(obj) {
    try {
      if (!obj.id) throw new Error('Object must provide an id')
      return await this._db.models[this.schema].update(obj, {
        where: {
          id: obj.id,
        },
      })
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
