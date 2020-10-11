module.exports = function createDreamTeam(members) {
  var team = '';
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        team += members[i].trim().split('')[0].toUpperCase();
      }
    }
    return team.split('').sort().join('');
  } else return false;
};
