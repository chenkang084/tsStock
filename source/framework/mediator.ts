/// <reference path="./interfaces"/>

class Mediator implements IMediator {
  private _$ : JQuery;

  constructor() {
    this._$ = $({});
  }

  public publish(e : IAppEvent) : void {
    this._$.trigger(e.topic, e.data);
  }

  public subscribe(e : IAppEvent) : void {
    this._$.on(e.topic, e.handler);
  }

  public unsubscribe(e : IAppEvent) : void {
    this._$.off(e.topic);
  }
}

export { Mediator };
