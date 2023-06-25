

function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var totalCid = getTotalCid(cid);


  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  var change = calculateChange(changeDue, cid);
  
  if (change.totalChange < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change.changeArr };
}

function getTotalCid(cid) {
  var total = 0;
  for (var i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  return total;
}

function calculateChange(changeDue, cid) {
  var changeArr = [];
  var totalChange = 0;
  var currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  for (var i = cid.length - 1; i >= 0; i--) {
    var currencyName = cid[i][0];
    var currencyAmount = cid[i][1];
    var currencyValue = currencyValues[currencyName];
    var currencyCount = Math.floor(currencyAmount / currencyValue);
    var currencyToReturn = 0;

    while (currencyCount > 0 && changeDue >= currencyValue) {
      changeDue -= currencyValue;
      currencyToReturn += currencyValue;
      currencyAmount -= currencyValue;
      currencyCount--;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (currencyToReturn > 0) {
      changeArr.push([currencyName, currencyToReturn]);
      totalChange += currencyToReturn;
    }
  }

  return { changeArr: changeArr, totalChange: totalChange };
}

console.log(checkCashRegister)


/**
 * The checkCashRegister() function takes in three parameters: price (purchase price), cash (payment), and cid (cash-in-drawer as a 2D array).
 *
 * The changeDue variable is calculated as the difference between cash and price, representing the change due to the customer.
 * 
 * The getTotalCid() function is called to calculate the total cash available in the drawer (cid).
 * 
 * If the total cash available is less than the change due (totalCid < changeDue), the function returns an object with a status of "INSUFFICIENT_FUNDS" and an empty array for change.
 * 
 * If the total cash available is equal to the change due (totalCid === changeDue), the function returns an object with a status of "CLOSED" and the cid array as the value for the change key.
 * 
 * If neither of the above conditions is met, the calculateChange() function is called to determine the change to be given.
 * 
 * The calculateChange() function takes the changeDue amount and cid as parameters
 */