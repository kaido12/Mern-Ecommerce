export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO -s We will not hard-code server URL here 
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // filter = {"category":["smartphone", "laptops"]}
  // sort = {_sort:"price", _order:"desc"}

  // TODO : on server we will support mutiple values
  let queryString = '';
  for(let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    // TODO : We will not hard-code server URL here 
    const response = await fetch("http://localhost:8080/products?"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}
