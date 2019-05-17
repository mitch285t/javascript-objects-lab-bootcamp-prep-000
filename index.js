var recipes = {prop: 1}

function updateObjectWithKeyAndValue(recipes, key, value){
      return Object.assign({}, recipes, { ['prop2']: 2 })
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes['prop2'] = 2
  return recipes
  }
function deleteFromObjectByKey(recipes, key){
  delete
}