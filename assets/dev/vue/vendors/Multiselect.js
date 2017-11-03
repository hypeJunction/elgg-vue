(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_multiselect__);


__webpack_require__(18);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default.a);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function l(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function o(t,e,i,n){return t.filter(function(t){return l(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,l){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=o(r[i],t,e,l);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):o(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&i.unshift({isTag:!0,label:t}),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue[0]?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("remove",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),l=0,o=i.length;l<o;l++){var r=i[l];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){i(6);var n=i(7)(i(5),i(8),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),l=n(s),o=i(0),r=n(o),a=i(1),u=n(a),c=i(2),h=n(c);e.default=l.default,e.Multiselect=l.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),l=n(s),o=i(1),r=n(o);e.default={name:"vue-multiselect",mixins:[l.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{display:"none"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n){var s,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,l=t.default);var r="function"==typeof l?l.options:l;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var a=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),r.computed=a}return{esModule:s,exports:l,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)||!t._k(e.keyCode,"tab",9)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46]))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]}}])});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vue-multiselect.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue-multiselect.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(undefined);
// imports


// module
exports.push([module.i, "fieldset[disabled] .multiselect {\r\n    pointer-events: none\r\n}\r\n\r\n.multiselect__spinner {\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 1px;\r\n    width: 48px;\r\n    height: 35px;\r\n    background: #fff;\r\n    display: block\r\n}\r\n\r\n.multiselect__spinner:after, .multiselect__spinner:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -8px 0 0 -8px;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 100%;\r\n    border-color: #41b883 transparent transparent;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    box-shadow: 0 0 0 1px transparent\r\n}\r\n\r\n.multiselect__spinner:before {\r\n    animation: a 2.4s cubic-bezier(.41, .26, .2, .62);\r\n    animation-iteration-count: infinite\r\n}\r\n\r\n.multiselect__spinner:after {\r\n    animation: a 2.4s cubic-bezier(.51, .09, .21, .8);\r\n    animation-iteration-count: infinite\r\n}\r\n\r\n.multiselect__loading-enter-active, .multiselect__loading-leave-active {\r\n    transition: opacity .4s ease-in-out;\r\n    opacity: 1\r\n}\r\n\r\n.multiselect__loading-enter, .multiselect__loading-leave-active {\r\n    opacity: 0\r\n}\r\n\r\n.multiselect, .multiselect__input, .multiselect__single {\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation\r\n}\r\n\r\n.multiselect {\r\n    box-sizing: content-box;\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 40px;\r\n    text-align: left;\r\n    color: #35495e\r\n}\r\n\r\n.multiselect * {\r\n    box-sizing: border-box\r\n}\r\n\r\n.multiselect:focus {\r\n    outline: none\r\n}\r\n\r\n.multiselect--disabled {\r\n    opacity: .6\r\n}\r\n\r\n.multiselect--active {\r\n    z-index: 1\r\n}\r\n\r\n.multiselect--active:not(.multiselect--above) .multiselect__current, .multiselect--active:not(.multiselect--above) .multiselect__input, .multiselect--active:not(.multiselect--above) .multiselect__tags {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0\r\n}\r\n\r\n.multiselect--active .multiselect__select {\r\n    transform: rotate(180deg)\r\n}\r\n\r\n.multiselect--above.multiselect--active .multiselect__current, .multiselect--above.multiselect--active .multiselect__input, .multiselect--above.multiselect--active .multiselect__tags {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0\r\n}\r\n\r\n.multiselect__input, .multiselect__single {\r\n    position: relative;\r\n    display: inline-block;\r\n    min-height: 20px;\r\n    line-height: 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    padding: 1px 0 0 5px;\r\n    width: 100%;\r\n    transition: border .1s ease;\r\n    box-sizing: border-box;\r\n    margin-bottom: 8px\r\n}\r\n\r\n.multiselect__tag ~ .multiselect__input, .multiselect__tag ~ .multiselect__single {\r\n    width: auto\r\n}\r\n\r\n.multiselect__input:hover, .multiselect__single:hover {\r\n    border-color: #cfcfcf\r\n}\r\n\r\n.multiselect__input:focus, .multiselect__single:focus {\r\n    border-color: #a8a8a8;\r\n    outline: none\r\n}\r\n\r\n.multiselect__single {\r\n    padding-left: 6px;\r\n    margin-bottom: 8px\r\n}\r\n\r\n.multiselect__tags-wrap {\r\n    display: inline\r\n}\r\n\r\n.multiselect__tags {\r\n    min-height: 40px;\r\n    display: block;\r\n    padding: 8px 40px 0 8px;\r\n    border-radius: 5px;\r\n    border: 1px solid #e8e8e8;\r\n    background: #fff\r\n}\r\n\r\n.multiselect__tag {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding: 4px 26px 4px 10px;\r\n    border-radius: 5px;\r\n    margin-right: 10px;\r\n    color: #fff;\r\n    line-height: 1;\r\n    background: #41b883;\r\n    margin-bottom: 8px;\r\n    white-space: nowrap\r\n}\r\n\r\n.multiselect__tag-icon {\r\n    cursor: pointer;\r\n    margin-left: 7px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    width: 22px;\r\n    text-align: center;\r\n    line-height: 22px;\r\n    transition: all .2s ease;\r\n    border-radius: 5px\r\n}\r\n\r\n.multiselect__tag-icon:after {\r\n    content: \"\\D7\";\r\n    color: #266d4d;\r\n    font-size: 14px\r\n}\r\n\r\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\r\n    background: #369a6e\r\n}\r\n\r\n.multiselect__tag-icon:focus:after, .multiselect__tag-icon:hover:after {\r\n    color: #fff\r\n}\r\n\r\n.multiselect__current {\r\n    min-height: 40px;\r\n    overflow: hidden;\r\n    padding: 8px 12px 0;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    border-radius: 5px;\r\n    border: 1px solid #e8e8e8\r\n}\r\n\r\n.multiselect__current, .multiselect__select {\r\n    line-height: 16px;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    margin: 0;\r\n    text-decoration: none;\r\n    cursor: pointer\r\n}\r\n\r\n.multiselect__select {\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 38px;\r\n    right: 1px;\r\n    top: 1px;\r\n    padding: 4px 8px;\r\n    text-align: center;\r\n    transition: transform .2s ease\r\n}\r\n\r\n.multiselect__select:before {\r\n    position: relative;\r\n    right: 0;\r\n    top: 65%;\r\n    color: #999;\r\n    margin-top: 4px;\r\n    border-style: solid;\r\n    border-width: 5px 5px 0;\r\n    border-color: #999 transparent transparent;\r\n    content: \"\"\r\n}\r\n\r\n.multiselect__placeholder {\r\n    color: #adadad;\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n    padding-top: 2px\r\n}\r\n\r\n.multiselect--active .multiselect__placeholder {\r\n    display: none\r\n}\r\n\r\n.multiselect__content-wrapper {\r\n    position: absolute;\r\n    display: block;\r\n    background: #fff;\r\n    width: 100%;\r\n    max-height: 240px;\r\n    overflow: auto;\r\n    border: 1px solid #e8e8e8;\r\n    border-top: none;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    z-index: 1;\r\n    -webkit-overflow-scrolling: touch\r\n}\r\n\r\n.multiselect__content {\r\n    list-style: none;\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin: 0;\r\n    min-width: 100%;\r\n    vertical-align: top\r\n}\r\n\r\n.multiselect--above .multiselect__content-wrapper {\r\n    bottom: 100%;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom: none;\r\n    border-top: 1px solid #e8e8e8\r\n}\r\n\r\n.multiselect__content::webkit-scrollbar {\r\n    display: none\r\n}\r\n\r\n.multiselect__element {\r\n    display: block\r\n}\r\n\r\n.multiselect__option {\r\n    display: block;\r\n    padding: 12px;\r\n    min-height: 40px;\r\n    line-height: 16px;\r\n    text-decoration: none;\r\n    text-transform: none;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    cursor: pointer;\r\n    white-space: nowrap\r\n}\r\n\r\n.multiselect__option:after {\r\n    top: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    line-height: 40px;\r\n    padding-right: 12px;\r\n    padding-left: 20px\r\n}\r\n\r\n.multiselect__option--highlight {\r\n    background: #41b883;\r\n    outline: none;\r\n    color: #fff\r\n}\r\n\r\n.multiselect__option--highlight:after {\r\n    content: attr(data-select);\r\n    background: #41b883;\r\n    color: #fff\r\n}\r\n\r\n.multiselect__option--selected {\r\n    background: #f3f3f3;\r\n    color: #35495e;\r\n    font-weight: 700\r\n}\r\n\r\n.multiselect__option--selected:after {\r\n    content: attr(data-selected);\r\n    color: silver\r\n}\r\n\r\n.multiselect__option--selected.multiselect__option--highlight {\r\n    background: #ff6a6a;\r\n    color: #fff\r\n}\r\n\r\n.multiselect__option--selected.multiselect__option--highlight:after {\r\n    background: #ff6a6a;\r\n    content: attr(data-deselect);\r\n    color: #fff\r\n}\r\n\r\n.multiselect--disabled {\r\n    background: #ededed;\r\n    pointer-events: none\r\n}\r\n\r\n.multiselect--disabled .multiselect__current, .multiselect--disabled .multiselect__select, .multiselect__option--disabled {\r\n    background: #ededed;\r\n    color: #a6a6a6\r\n}\r\n\r\n.multiselect__option--disabled {\r\n    cursor: text;\r\n    pointer-events: none\r\n}\r\n\r\n.multiselect__option--disabled.multiselect__option--highlight {\r\n    background: #dedede !important\r\n}\r\n\r\n.multiselect-enter-active, .multiselect-leave-active {\r\n    transition: all .15s ease\r\n}\r\n\r\n.multiselect-enter, .multiselect-leave-active {\r\n    opacity: 0\r\n}\r\n\r\n.multiselect__strong {\r\n    margin-bottom: 10px;\r\n    display: inline-block\r\n}\r\n\r\n[dir=rtl] .multiselect {\r\n    text-align: right\r\n}\r\n\r\n[dir=rtl] .multiselect__select {\r\n    right: auto;\r\n    left: 1px\r\n}\r\n\r\n[dir=rtl] .multiselect__tags {\r\n    padding: 8px 8px 0 40px\r\n}\r\n\r\n[dir=rtl] .multiselect__content {\r\n    text-align: right\r\n}\r\n\r\n[dir=rtl] .multiselect__option:after {\r\n    right: auto;\r\n    left: 0\r\n}\r\n\r\n[dir=rtl] .multiselect__clear {\r\n    right: auto;\r\n    left: 12px\r\n}\r\n\r\n[dir=rtl] .multiselect__spinner {\r\n    right: auto;\r\n    left: 1px\r\n}\r\n\r\n@keyframes a {\r\n    0% {\r\n        transform: rotate(0)\r\n    }\r\n    to {\r\n        transform: rotate(2turn)\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});