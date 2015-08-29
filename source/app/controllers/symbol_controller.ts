/// <reference path="../../framework/interfaces"/>

import { Controller } from "../../framework/framework";

class SymbolController extends Controller implements IController {

  constructor(metiator : IMediator) {
    super(metiator);
  }

  initialize() : void {
    throw new Error('Controller.prototype.initialize() is abstract you must implement it!');
  }

  dispose() : void {
    this.unsubscribeToEvents();
  }
}

export { SymbolController };
