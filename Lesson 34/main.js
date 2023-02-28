let shoppingList = [
    {
      name: "apple",
      quantity: 4,
      bought: true,
      price: 2,
      sum: 8,
    },
    {
      name: "watermelon",
      quantity: 1,
      bought: false,
      price: 10,
      sum: 10,
    },
    {
      name: "potato",
      quantity: 8,
      bought: true,
      price: 2,
      sum: 16,
    },
    {
      name: "cucumber",
      quantity: 3,
      bought: false,
      price: 3,
      sum: 9,
    },
  ];
  
  function isBought(shoppingList) {
    return shoppingList.sort((a, b) => a.bought - b.bought);
  }
  console.log(isBought(shoppingList));
  
  function boughtProduct(shoppingList, name) {
    shoppingList.forEach((element) => {
      if (element.name == name) {
        element.bought = true;
      }
    });
    return shoppingList;
  }
  console.log(boughtProduct(shoppingList, "watermelon"));
  
  function notBought(shoppingList) {
    return shoppingList.filter((product) => !product.bought);
  }
  console.log(notBought(shoppingList));
  
  function deleteProduct(shoppingList, product) {
    let productIndex = shoppingList.indexOf(product);
    let arr = shoppingList.slice();
    arr.splice(productIndex, 1);
    return arr;
  }
  console.log(deleteProduct(shoppingList, "potato"));
  
  function addProduct(shoppingList, newProduct) {
    let check = shoppingList.find((item) => item.name == newProduct.name);
    if (!check) {
      shoppingList.push(newProduct);
    } else {
      shoppingList.forEach((el) => {
        if (el.name == newProduct.name) {
          el.quantity += newProduct.quantity;
          el.sum += newProduct.sum;
        }
      });
    }
    return shoppingList;
  }
  
  console.log(
    addProduct(shoppingList, {
      name: "tomato",
      quantity: 5,
      bought: true,
      price: 2,
      sum: 10,
    })
  );