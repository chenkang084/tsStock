/// <reference path="../../framework/interfaces"/>

import { Controller, AppEvent } from "../../framework/framework";
import { QuoteModel } from "../models/quote_model";
import { SymbolView } from "../views/symbol_view";

class SymbolController extends Controller implements IController {
  private _quoteModel : IModel;
  private _symbolView : IView;

  constructor(metiator : IMediator) {
    super(metiator);
    this._quoteModel = new QuoteModel(metiator);
    this._symbolView = new SymbolView(metiator);
  }

  // initialize views/ models and strat listening to controller actions
  public initialize() : void {

    // subscribe to controller action events
    this.subscribeToEvents([
      new AppEvent("app.controller.symbol.quote", null, (e, symbol : string) => { this.quote(symbol); })
    ]);

    // initialize view and models events
    this._symbolView.initialize();
    this._quoteModel.initialize();
  }

  // dispose views/models and stop listening to controller actions
  public dispose() : void {

    // dispose the controller events
    this.unsubscribeToEvents();

    // dispose views and model events
    this._symbolView.dispose();
    this._quoteModel.dispose();
  }

  public quote(symbol : string) {
    this._metiator.publish(new AppEvent("app.model.quote.change", symbol, null));
  }
}

export { SymbolController };
