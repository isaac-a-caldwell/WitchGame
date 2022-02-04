'use strict'

(function () {

    function setup() {
      //=============================================================================
      // PluginManager                                                             
      //=============================================================================
      PluginManager.loadLibraryScript = function (name) {
        var url = 'js/libs/' + name;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = false;
        script.onerror = this.onError.bind(this);
        script._url = url;
        document.body.appendChild(script);
      };
  
      PluginManager.loadLibraryScript("lodash_core.js");
      setTimeout(function () {
        window.lodash = window.lodash;
      }, 3000);
    }
    setup();
  })();