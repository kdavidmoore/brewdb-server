# Brew Server

This is a proxy server for the [BreweryDB API](http://www.brewerydb.com/) built with Express.

## Installation

```shell
mkdir brew-server && cd brew-server
git clone https://github.com/kdavidmoore/brewdb-server.git .
npm install
```

Also add a file called `secrets.js` in the `routes/` directory containing a Node module:

```javascript
module.exports = {
	getSecrets: function() {
		return {
			BREW_KEY: 'myAPIkeyFromBreweryDB'
		}
	}
}
```
Replace the value of BREW_KEY ('myAPIkeyFromBreweryDB') with your own API key from BreweryDB.

## Usage
Make an HTTP `GET` request to localhost:30503/[location], where [location] is the city you want to search for. For example, in an AngularJS app:

```javascript
$http({
  method: 'GET',
  url: 'http://mydomain.com:30305/atlanta'
}).then(function successCallback(response) {
	// do things	
  }, function errorCallback(response) {
  	// handle error
  });
```

### Example response
```json
{
  "currentPage": 1,
  "numberOfPages": 1,
  "totalResults": 1,
  "data": [
    {
      "id": "ovCoQh",
      "name": "Main Brewery",
      "streetAddress": "345 Oglethorpe St",
      "locality": "Macon",
      "region": "Georgia",
      "postalCode": "31201",
      "phone": "(415) 295-2337",
      "website": "http://www.maconbeercompany.com/",
      "latitude": 32.828314,
      "longitude": -83.630058,
      "isPrimary": "Y",
      "inPlanning": "N",
      "isClosed": "N",
      "openToPublic": "Y",
      "locationType": "micro",
      "locationTypeDisplay": "Micro Brewery",
      "countryIsoCode": "US",
      "yearOpened": "2011",
      "status": "verified",
      "statusDisplay": "Verified",
      "createDate": "2013-11-22 15:38:02",
      "updateDate": "2014-07-23 19:11:34",
      "breweryId": "aTgiD7",
      "brewery": {
        "id": "aTgiD7",
        "name": "Macon Beer Company",
        "nameShortDisplay": "Macon",
        "description": "Macon Beer Company, LLC is a craft beer company focused on innovation, sustainability, philanthropy, and developing a strong connection to our employees and community. We expect to maximize profitability without sacrificing quality, purity, or attention to detail through the use of engineering principles that improve value and efficiency beyond industry standards. We will strive to become a source of knowledge held in high regard by the craft beer industry. In addition, Macon Beer Company will become a respected business in the Macon area via investment in the community and promotion of an inviting and supportive business personality.",
        "website": "http://maconbeercompany.com/",
        "established": "2011",
        "isOrganic": "N",
        "images": {
          "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/aTgiD7/upload_78ULxz-icon.png",
          "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/aTgiD7/upload_78ULxz-medium.png",
          "large": "https://s3.amazonaws.com/brewerydbapi/brewery/aTgiD7/upload_78ULxz-large.png",
          "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/aTgiD7/upload_78ULxz-squareMedium.png",
          "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/aTgiD7/upload_78ULxz-squareLarge.png"
        },
        "status": "verified",
        "statusDisplay": "Verified",
        "createDate": "2013-11-22 14:58:21",
        "updateDate": "2015-12-22 15:48:33"
      },
      "country": {
        "isoCode": "US",
        "name": "UNITED STATES",
        "displayName": "United States",
        "isoThree": "USA",
        "numberCode": 840,
        "createDate": "2012-01-03 02:41:33"
      }
    }
  ],
  "status": "success"
}
```