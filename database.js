const { validate: validateId } = require('uuid');
const foldersArr = require('./seed');

class FolderDB {
  constructor() {
    this.folders = new Map();
  }

  /**
   * Given a folder object, will check if each of the properties in the folder
   * is valid. If it finds an invalid property, it will throw an error with a
   * relevant message.
   *
   * @param {Object} folderObj - the folder object.
   * @throws Will throw an error if any of the validation checks fail.
   * @returns {void}
   * @static
   * @private
   */
  static _validateFolder(folderObj) {
    const errors = [];
    // id
    if (!folderObj.id) {
      errors.push('The folder needs to have a valid id.');
    }

    if (!validateId(folderObj.id)) {
      errors.push('The id needs to be a valid uuid.');
    }

    // name
    if (!folderObj.name.trim()) {
      errors.push('The folder names needs to exist.');
    }

    if (typeof folderObj.name !== 'string') {
      errors.push('The folder names needs to be a string.');
    }

    // parentId
    if (!folderObj.parentId && folderObj.parentId !== null) {
      errors.push(
        'The parentId needs to exist (or be null in the case of the parent folder).'
      );
    }
    if (folderObj.parentId === null && folderObj.name !== '/') {
      errors.push('The name of the root folder needs to be /.');
    }

    // files
    if (!folderObj.files) {
      errors.push('The files property needs to exist.');
    }
    if (!Array.isArray(folderObj.files)) {
      errors.push('The files property needs to be an array.');
    }

    // nestedFolderIds
    if (!folderObj.nestedFolderIds) {
      errors.push('The nestedFolderIds needs to exist.');
    }

    if (!Array.isArray(folderObj.nestedFolderIds)) {
      errors.push('The nestedFolderIds needs to be an array.');
    }

    if (errors.length) {
      throw new Error(`Validation Error: ${errors.join(' || ')}`);
    }
  }

  /**
   * Given a folder object, adds the given folder in the database. If the operation
   * fails, it will log the errors to the console.
   *
   * @param {Object} folderObj - the folder object.
   * @returns {boolean} true if the folder is successfully added to the database. Else false.
   */
  insert(folderObj) {
    try {
     FolderDB._validateFolder(folderObj);
      const { id } = folderObj;
      this.folders.set(id, folderObj);
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }

  /**
   * Given a folder object, updates the given folder in the database.
   *
   * @param {Object} folderObj - the folder object.
   * @throws Will throw an error if the folder is not found in the database.
   * @returns {void}
   */
  update(folderObj) {
    if (this.folders.has(folderObj.id)) {
      this.insert(folderObj);
    } else {
      throw new Error(`No folder id found in the database: ${folderObj.id}`);
    }
  }

  /**
   * Given a folder id, produces the folder stored in the database with the given id.
   * If no folder is found with the given id, it will produce null.
   *
   * @param {string} folderId
   * @returns {Object | null} folder - the folder with the given id or null if no folder is found.
   */
  find(folderId) {
    return this.folders.get(folderId) ?? null;
  }

  /**
   * Prints to the console the folder structure currently stored in the database.
   * Each line represents a folder, with the folder's name and the last 5 digits
   * of its id.
   *
   * @returns {void}
   */
  print() {
    function recursiveHelper(rootFolder, folderArr, indent = '') {
      console.log(
        `${indent}${rootFolder.name} (...${rootFolder.id.slice(-5)})`
      );
      rootFolder.nestedFolderIds.forEach((id) => {
        const folder = folderArr.find((f) => f.id === id);
        recursiveHelper(folder, folderArr, indent + '|  ');
      });
    }

    const rootId = '832bdc17-6c1f-4a19-b898-3b449d77f3af';
    const rootFolder = this.folders.get(rootId);
    const foldersArr = Array.from(this.folders.values());

    recursiveHelper(rootFolder, foldersArr);
  }
}

const database = new FolderDB();

function seedDatabase() {
  database.folders.clear();
  foldersArr.forEach((folder) => database.insert(folder));
}

seedDatabase();

module.exports = { database, seedDatabase };
