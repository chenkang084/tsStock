/// <reference path="../../framework/interfaces"/>

import { Controller, AppEvent } from "../../framework/framework";

class MarketController extends Controller implements IController {
  private _marketView : IView;
  private _nasdaqModel : IModel;
  private _nyseModel : IModel;

  constructor(metiator : IMediator) {
    super(metiator);
  }

  // initialize views/ models and strat listening to controller actions
  initialize() : void {

    // subscribe to controller action events
    this.subscribeToEvents([
      new AppEvent("app.controller.market.nasdaq", null, (o : string[]) => { this.nasdaq(o); }),
      new AppEvent("app.controller.market.nyse", null, (o : string[]) => { this.nasdaq(o); })
    ]);

    // initialize view and models events
    this._marketView.initialize();
    this._nasdaqModel.initialize();
    this._nyseModel.initialize();
  }

  // dispose views/models and stop listening to controller actions
  dispose() : void {
    this.unsubscribeToEvents();
    this._marketView.initialize();
    this._nasdaqModel.initialize();
    this._nyseModel.initialize();
  }

  // display NASDAQ stocks
  public nasdaq(args : string[]) {
    var selected = [];
    this._metiator.publish(new AppEvent("app.model.nasdaq.get", selected, null));
  }

  // display NYSE stocks
  public nyse(args : string[]) {
    var selected = [];
    this._metiator.publish(new AppEvent("app.model.nyse.get", selected, null));
  }
}

export { MarketController };
