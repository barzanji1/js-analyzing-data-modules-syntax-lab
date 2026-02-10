require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };

  for (const arr of args) {
    combinedObject.users = combinedObject.users.concat(arr);
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = { combineUsers };
