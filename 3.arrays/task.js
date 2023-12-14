function compareArrays(arr1, arr2) {
    if ( arr1.length===arr2.length && arr1.every((acc,index) => acc===arr2[index])){
        return true
      }
        else if ( arr1.length===arr2.length && arr1.every((n,i) => n!==arr2[i])){
         return false
        }
    
     else {
        return false
      }
}

function getUsersNamesInAgeRange(people, gender) {
    if (people === undefined) {
        return 0;
      } else {
        return people.filter(people => people.gender === gender).map(people => people.age).reduce((people, element, indx, arr) => people + element / arr.length, 0)
      }
}