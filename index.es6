'use strict';

let  Event = (function () {
    let _events = {};

    return {
        /**
         * 发布事件
         * @param name  事件名
         * @param obj   调用对象
         * @returns {*} 结果
         */
        publish(name,obj){
            let _result;
            if(_events[name] !== undefined){
                if(obj !== undefined){
                    _result = _events[name].callback.call(obj);
                }else{
                    _result = _events[name].callback();
                }
                //如果是一次性事件,则在调用一次之后删除该事件
                if(_events[name].type == 'once'){
                    this.unbind(name);
                }
            }
            return _result;
        },
        /**
         * 订阅事件
         * @param name  事件名
         * @param callback 回调函数
         */
        subscribe(name,callback){
            _events[name] = {
                callback:callback,
                type:'all'
            };
            return this;
        },
        /**
         * 订阅一次性事件
         * @param name  事件名
         * @param callback 回调函数
         */
        once(name,callback){
            _events[name] = {
                callback:callback,
                type:'once'
            };
            return this;
        },
        /**
         * 取消事件
         * @param name 事件名
         */
        unbind(name){
            _events[name] = undefined;
        }
    };
}());