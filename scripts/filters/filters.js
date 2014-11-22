app.filter('localCurrency',['$locale',function($locale) {
    return function(value) {
      if($locale.id == "en-us")
      {

     	 return "EGP "+ value.toLocaleString();
      }
      else if($locale.id == "ar")
      {
     	return value.toLocaleString() + " جنيه";
      } 
    }
  }]);