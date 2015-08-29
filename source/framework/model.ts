/// <reference path="./interfaces"/>

import { EventEmitter } from "./event_emitter";

class Model extends EventEmitter implements IModel {
  request() {

  }
  initialize() {
    throw new Error('Model.prototype.initialize() is abstract you must implement it!');
  }
  dispose() {
    throw new Error('Model.prototype.dispose() is abstract you must implement it!');
  }
}

export { Model };

/*
    var Model = function (config) {
        this.endpoint = config.endpoint;
        this.crossDomain = config.crossDomain;
        this.formatter = config.formatter;
    };

    Model.prototype.parseMarkdown = function (data) {
        if (data.items !== undefined) {
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].contentTypeStr === "markdown") {
                    data.items[i].body = marked(data.items[i].body);
                }
            }

        }
        else {
            if (data.contentTypeStr === "markdown") {
                data.body = marked(data.body);
            }
        }
        return data;
    };

    Model.prototype.ajaxHelper = function (type, args, cb) {

        var serializedPublication, that = this, ajaxOptions;

        if (type !== "GET") {
            serializedPublication = JSON.stringify(args);
        }
        else {
            serializedPublication = args;
        }

        jQuery.support.cors = true;

        ajaxOptions = {
            type: type,
            contentType: "application/json",
            url: that.endpoint,
            dataType: 'json',
            data: serializedPublication,
            success: function (response) {
                response = that.parseMarkdown(response);
                if (that.formatter != null) {
                    response = that.formatter(response, args);
                }
                cb(response);
            },
            error: function (a, b, c) {
                console.log(a, b, c);
                window.location.hash = "error/index";
            }
        };

        // override xhr for browser that use XDR
        if ('XDomainRequest' in window && window.XDomainRequest !== null) {
            // override default jQuery transport
            jQuery.ajaxSettings.xhr = function () {
                try { return new XDomainRequest(); }
                catch (e) {
                    console.log(e);
                }
            };
            // also, override the support check
            jQuery.support.cors = true;
        }

        $.ajax(ajaxOptions);
    };

    Model.prototype.get = function (data, cb) {
        this.ajaxHelper("GET", data, cb);
    };

    Model.prototype.post = function (data, cb) {
        this.ajaxHelper("POST", data, cb);
    };

    Model.prototype.put = function (data, cb) {
        this.ajaxHelper("PUT", data, cb);
    };

    Model.prototype.remove = function (data, cb) {
        this.ajaxHelper("DELETE", data, cb);
    };
    */
