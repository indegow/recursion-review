// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Array
  if(Array.isArray(obj)){
    if (obj.length === 0) return "[]";
    var resultArray = "[";
    for (var i = 0; i < obj.length - 1; i++) {
      resultArray += stringifyJSON(obj[i]) + ",";
    }
    resultArray += stringifyJSON(obj[obj.length-1]) + "]";
    return resultArray;
  }

  //Object
  if(_.isObject(obj)) {
    if (_.isEmpty(obj)) return "{}";
    var resultObject = [];
    for (var key in obj) {
      if (typeof(obj[key]) !== "function" && typeof(obj[key]) !== "undefined") {
      resultObject.push( stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    resultObject = resultObject.join(",");
    
    return "{" + resultObject + "}";
  }


  //Everything else
  if (typeof(obj) === "number") return obj.toString();
  if (typeof(obj) === "string") return '"' + obj + '"';
  if (typeof(obj) === "boolean") return obj.toString();
  if (_.isEmpty(obj)) return 'null';
  if (typeof(obj) === "function") return undefined;
  if (typeof(obj) === "undefined") return undefined;

};
