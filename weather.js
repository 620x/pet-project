(function () {
  window.weather = {
    getWeather: function (country) {
      let apiKey = 'a472a1c1827473281ff9409d13c87bc3';
      let xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        console.log(xhr.status);
        console.log(xhr.response);
      });
      xhr.open('GET', 'api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + apiKey);
      xhr.send();
    },
  };
})();
