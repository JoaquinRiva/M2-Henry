var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }
    for (var i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  traverse(startEl);

  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


// En esta implementación, se utilizan los métodos startsWith() e includes() para detectar los diferentes tipos de selectores. Algunos ejemplos de cómo funcionaría esta implementación:

// selectorTypeMatcher("#myId") devolverá "id".
// selectorTypeMatcher(".myClass") devolverá "class".
// selectorTypeMatcher("div.myClass") devolverá "tag.class".
// selectorTypeMatcher("div") devolverá "tag"

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector.startsWith("#")) {
    return "id";
  } else if (selector.startsWith(".")) {
    return "class";
  } else if (selector.includes(".")) {
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
  } else if (selectorType === "class") {
  } else if (selectorType === "tag.class") {
  } else if (selectorType === "tag") {
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
