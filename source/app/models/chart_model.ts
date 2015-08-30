/// <reference path="../../framework/interfaces"/>

import { Model, AppEvent, ModelSettings } from "../../framework/framework";

@ModelSettings("http://dev.markitondemand.com/Api/v2/Quote/jsonp")
class ChartModel extends Model implements IModel {

  constructor(metiator : IMediator) {
    super(metiator);
  }

  // listen to model events
  public initialize() {
    this.subscribeToEvents([
      new AppEvent("app.model.chart.change", null, (e, args) => { this.onChange(args); })
    ]);
  }

  // dispose model events
  public dispose() {
    this.unsubscribeToEvents();
  }

  private onChange(args) : void {
    // format args
    debugger;
    var s = { symbol : args };
    this.getAsync("jsonp", s)
        .then((data) => {

          debugger;

          // format data
          var stocks = { quote : data };

          // pass controll to the market view
          this.triggerEvent(new AppEvent("app.view.symbol.render", stocks, null));
        })
        .catch((e) => {
          // pass control to the global error handler
          this.triggerEvent(new AppEvent("app.error", e, null));
        });
  }
}

export { ChartModel };
