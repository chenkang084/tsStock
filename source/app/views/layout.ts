/// <reference path="../../framework/interfaces"/>

import { View } from "../../framework/framework";

class LayoutView extends View implements IView {

  constructor(metiator : IMediator) {
    super(metiator);
  }

  public initialize() : void {

  }

  public dispose() : void {

  }
}

export { LayoutView };
