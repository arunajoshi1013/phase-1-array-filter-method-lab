// Code your solution here

function matchDriverName(name) {
   if (name.toLowerCase() === this.toLowerCase()) {
      return true;
   }
   return false;
}

function findMatching (drivers, matchName) {
   return drivers.filter(matchDriverName, matchName);
}

function matchDriverLetter(name) {
   if (name.charAt(0) === this.charAt(0)) {
      return true;
   }
   return false;
}

function fuzzyMatch(drivers, matchLetter) {
   return drivers.filter(matchDriverLetter, matchLetter);
}

function matchObj(obj) {
   if (obj.name === this) {
      return true;
   }
   return false;
}

function matchName(drivers, matchName) {
   return drivers.filter(matchObj, matchName);
}
