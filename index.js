'use strict';

var Event = (function () {
    var _events = {};

    return {
        publish: function publish(name, obj) {
            return _events[name] && _events[name].call(obj);
        },
        subscribe: function subscribe(name, event) {
            _events[name] = event;
        }
    };
})();

var Myobject = {};
Event.subscribe('test', function () {
    return console.log('test');
});
Event.publish('test');
Event.publish('test');

//# sourceMappingURL=index.js.map