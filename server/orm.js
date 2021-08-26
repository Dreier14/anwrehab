class Orm {
    constructor(db) {
        this.database = db;
    }

    async query(queryName, args) {
        return await this.database[queryName](args);
    }

    async modify(modifyQueryName, args) {
        return await this.database[modifyQueryName](args);
    }
}

module.exports = { Orm };