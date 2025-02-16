const { database, seedDatabase } = require('./database');
const { v4: uuid, parse } = require('uuid');

class CustomError extends Error{
    constructor(message){
      super(message);
      this.name="Error"
    }
}
/**
 * Logs the folder structure before and after copying.
 */
function logResults() {
  //const documentsId = '40e71101-bd72-40f5-9050-018f260e723a';
  const tshirtBusinessId="4861757c-24e2-4642-a937-4824403c6aa2";
  console.log('--- Application running successfully. ---');
  console.log('Folders database (before):');
  database.print();
  console.log('-------------------------------------');

  const newFolderId = copyFolder(tshirtBusinessId);

  console.log('-------------------------------------');
  console.log('Folders database (after):');
  database.print();

  if (newFolderId) {
    console.log(`Folder copied successfully! New folder ID: ${newFolderId}`);
  } else {
    console.error(`Failed to copy folder.`);
  }
}

/**
 * Generates a unique ID that is not already used in the database.
 */
function createUniqueId() {
  let candidate = uuid();
  while (database.find(candidate)) {
    candidate = uuid();
  }
  return candidate;
}

/**
 * Recursively copies a folder and its contents, preserving structure.
 *
 * @param {string} folderId - The ID of the folder to copy.
 * @returns {string|null} - The ID of the copied folder, or null if failed.
 */

  
function copyFolder(folderId){
  const originalFolder = database.find(folderId);
  if (!originalFolder) {
    console.error("The folder you want to copy is not found")
   //  throw new CustomError("The folder you want to copy is not found");
    return null;
  
  }

  // this map is between new and old keys
  let  myMap =new Map();
function deepCopyFolder(folderId,newParentId=null){
       
  const folder= database.find(folderId)
  if(!folder){
      console.error("folder requested to coy is not found")
      return null;
  }


  if(myMap.has(folderId)){

      // this will return the newID For the folder if it's exist
      return myMap.get(folderId);
  }

  const newId=createUniqueId();
   myMap.set(folderId,newId);

   const copiedFolder={
      id:newId,
      name:folder.name,
      parentId:newParentId,
      files: JSON.parse(JSON.stringify(folder.files)) ,
      nestedFolderIds:[]
   }
     
   database.insert(copiedFolder);

   //add the child folder to i'ts newParent
     // if it's the root folder this part will be skipped
    if(newParentId){
      const parent=database.find(newParentId);
       if(parent){
          parent.nestedFolderIds.push(newId);
          database.update(parent);
       }
       else{
          console.error("parent not found");
       }
    }
     
   // process nestedfOLDERiD'S

   folder.nestedFolderIds.forEach(subId => {
       const newSub= deepCopyFolder(subId,newId);
       if(newSub && !copiedFolder.nestedFolderIds.includes(newSub)){
          copiedFolder.nestedFolderIds.push(newSub);
       }

   });

   return newId;





  }

  const newRoot=deepCopyFolder(folderId,originalFolder.parentId);
    return newRoot;
}


logResults();

module.exports = { copyFolder };
