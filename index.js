var recipes = new Object();
function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, {[key]:value});
   
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object,key){
  let copy = Object.assign({},object);
  delete copy[key];
  return copy;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}