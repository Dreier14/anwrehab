class Orm {
    constructor(db) {
        this.database = db;
    }

    async query(folderName, queryName, args = null) {
        return args ? await this.database[folderName][queryName](args) : await this.database[folderName][queryName]();
    }

    async modify(folderName, modifyQueryName, args) {
        return await this.database[folderName][modifyQueryName](args);
    }
}

module.exports = { Orm };