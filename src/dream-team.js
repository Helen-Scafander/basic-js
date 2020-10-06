module.exports = function createDreamTeam(members) {
  var team = '';
  if (members.isArray() == true) {
    members.sort();
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'String') {
        team = team + members[i].split('')[1].toUpperCase();
      }
    }
    return team;
  } else return false;
};
