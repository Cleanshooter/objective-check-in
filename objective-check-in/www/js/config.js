angular.module('app.config', [])

.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('oci');
});