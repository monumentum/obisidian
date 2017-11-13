Object.defineProperty(exports,"__esModule",{value:true});exports.detailReducer=exports.fetchWithError=exports.fetchWithSuccess=exports.fetchingState=exports.setDetail=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _immutable=require('immutable');var _structural=require('./structural');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var setDetail=exports.setDetail=function setDetail(detail){return(0,_structural.setIn)('detail',detail);};var fetchingState=exports.fetchingState=function fetchingState(state){return(0,_structural.fetching)(state);};var fetchWithSuccess=exports.fetchWithSuccess=function fetchWithSuccess(state,_ref){var payload=_ref.payload;return(0,_structural.reduceFn)(state,[_structural.unFetching,_structural.unError,setDetail(payload)]);};var fetchWithError=exports.fetchWithError=function fetchWithError(state,_ref2){var error=_ref2.error;return(0,_structural.reduceFn)(state,[_structural.unFetching,(0,_structural.setErr)(error)]);};var detailReducer=exports.detailReducer=function detailReducer(fetchingMethods){var _extends2;var customInitialState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var customDecisionMap=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var initialState=(0,_immutable.Map)(_extends({fetching:false,detail:{},error:null},customInitialState));var decisionMap=_extends((_extends2={},_defineProperty(_extends2,fetchingMethods[0],fetchingState),_defineProperty(_extends2,fetchingMethods[1],fetchWithSuccess),_defineProperty(_extends2,fetchingMethods[2],fetchWithError),_extends2),customDecisionMap);return(0,_structural.mountReducer)(initialState,decisionMap);};