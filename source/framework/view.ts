/// <reference path="./interfaces"/>

import { EventEmitter } from "./event_emitter";

class View extends EventEmitter implements IView {

  constructor(metiator : IMediator) {
    super(metiator);
  }

  private render() {
    
  }

  public initialize() {
    throw new Error('Model.prototype.initialize() is abstract you must implement it!');
  }

  public dispose() {
    throw new Error('Model.prototype.dispose() is abstract you must implement it!');
  }
}

export { View };

/*
define(['handlebars', 'jquery'], function (handlebars) {
    "use strict";

    var View = function (config) {
        this.container = config.container;
        this.templateUrl = config.templateUrl;
        this.model = config.model;
        this.parseArgs = config.parseArgs
    };

    View.prototype.executeTemplate = function (data, cb) {
        var that = this;
        if (that.templateUrl !== null) {
            $.ajax({
                url: that.templateUrl,
                data : { bust : (new Date()).getTime() }, // disable cache
                async: true,
                dataType: "text",
                success: function (template) {
                    var compiledTemplate = handlebars.compile(template);
                    var html = compiledTemplate(data);
                    cb(html);
                },
                error: function (a, b, c) {
                    console.log("AJAX ERROR: ", a, b, c);
                    window.location.hash = "error/index";
                }
            });
        }
        else
        {
            cb();
        }
    };

    View.prototype.loadModel = function (args, cb) {
        var that = this;
        if (that.model != null && args != null) {
            that.model.get(args, function (data) {
                that.generateHtml(data, cb);
            });
        }
        else
        {
            that.generateHtml({}, cb);
        }
    };

    View.prototype.generateHtml = function (data, cb) {
        var that = this;

        if (typeof that.templateUrl === "string")
        {
            that.executeTemplate(data, function (html) {
                $(that.container).html(html);
                setTimeout(function () {
                    $(that.container).fadeIn();
                    cb(data);
                }, 500);
            });
        }
        else
        {
            if (data.items === undefined) {
                $(that.container).html(data.body);
                setTimeout(function () {
                    $(that.container).fadeIn();
                    cb(data);
                }, 500);
            }
            else
            {
                throw new Error("Invalid operation use a templates for collections");
            }
        }
    };

    View.prototype.render = function (args, cb) {
        var that = this;
        $(that.container).hide();
        args = that.parseArgs(args);
        that.loadModel(args, function (data) {
            if (typeof cb === "function") {
                cb(data);
            }
        });
    };

    return View;
});
*/
