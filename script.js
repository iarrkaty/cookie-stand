
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

	//Store minimum and max hourly customers, average cookie per customer in an object
	// Use a method of the object to generate a random number of customers per hour (math.random)

var PikePlace = {
  min: 17,
  max: 88,
  averageCookies: 5.2,
  getRandomCustomers: function (min, max) {
    return Math.random() * (max - min) + min;
	},
	getCookiesPurchased: function() {
  return (this.averageCookies * this.getRandomCustomers(this.min, this.max))
  }
}

var SeaTac = {
  min: 6,
  max: 24,
  averageCookies: 1.2,
  getRandomCustomers: function (min, max) {
    return Math.random() * (max - min) + min;
	},
	getCookiesPurchased: function() {
  return (this.averageCookies * this.getRandomCustomers(this.min, this.max))
  }
}

var Southcenter = {
  min: 11,
  max: 38,
  averageCookies: 1.9,
  getRandomCustomers: function (min, max) {
    return Math.random() * (max - min) + min;
	},
	getCookiesPurchased: function() {
  return (this.averageCookies * this.getRandomCustomers(this.min, this.max))
  }
}

var BellSquare = {
  min: 20,
  max: 48,
  averageCookies: 3.3,
  getRandomCustomers: function (min, max) {
    return Math.random() * (max - min) + min;
	},
	getCookiesPurchased: function() {
  return (this.averageCookies * this.getRandomCustomers(this.min, this.max))
  }
}

var Alki = {
  min: 3,
  max: 24,
  averageCookies: 2.6,
  getRandomCustomers: function (min, max) {
    return Math.random() * (max - min) + min;
	},
	getCookiesPurchased: function() {
  return (this.averageCookies * this.getRandomCustomers(this.min, this.max))
  }
}



// Calculate simulated amounts of cookie purchased
	// Store results for each location in a seperate array
	PikePlaceCookies = SeaTacCookies = SouthcenterCookies = BellSquareCookies = AlkiCookies = [];
	for (var i = 0, len = hours.length; i < len; i++) {
  		PikePlaceCookies[hours[i]] = PikePlace.getCookiesPurchased();
		SeaTacCookies[hours[i]] = SeaTac.getCookiesPurchased();
		SouthcenterCookies[hours[i]] = Southcenter.getCookiesPurchased();
		BellSquareCookies[hours[i]] = BellSquare.getCookiesPurchased();
		AlkiCookies[hours[i]] = Alki.getCookiesPurchased();
	}
	
// Display the values of each array as unordered lists in browser
// Calculate the sum of the hourly totals - display on index.html
