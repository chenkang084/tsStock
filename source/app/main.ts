/// <reference path="../framework/interfaces"/>

import { App, View } from "../framework/framework";
import { MarketController } from "./controllers/market_controller";
import { SymbolController } from "./controllers/symbol_controller";
import { LayoutView } from "./views/layout";

var appSettings : IAppSettings = {
  defaultController : "market",
  defaultAction : "nasdaq",
  controllers : [
    { controllerName : "market", controller : MarketController },
    { controllerName : "symbol", controller : SymbolController }
  ],
  onErrorHandler : function(e : Object) {
    console.log(e.toString());
  }
};

var myApp = new App(appSettings);

// run app
myApp.initialize();