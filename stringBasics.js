function getUsersIds(str) {
  const arrStr = str.split(',').map((stringItem) => stringItem.trim().replace(/#/g, '').replace('uid', '').trim().toLowerCase());
  return arrStr;
}

console.log(getUsersIds('uid12, uidHacKe#r , uidHAcke r, uid123456789, uid1234, uid12345678, uid1#2, uid12345, uid12345, uid12  34 567890, uid pASsword, uidmy_iD'));
