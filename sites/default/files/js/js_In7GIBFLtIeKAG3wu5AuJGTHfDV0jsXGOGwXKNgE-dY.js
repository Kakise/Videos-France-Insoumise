/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);;
(function($,window){"$:nomunge";var undefined,aps=Array.prototype.slice,decode=decodeURIComponent,jq_param=$.param,jq_param_sorted,jq_param_fragment,jq_deparam,jq_deparam_fragment,jq_bbq=$.bbq=$.bbq||{},jq_bbq_pushState,jq_bbq_getState,jq_elemUrlAttr,special=$.event.special,str_hashchange="hashchange",str_querystring="querystring",str_fragment="fragment",str_elemUrlAttr="elemUrlAttr",str_href="href",str_src="src",re_params_querystring=/^.*\?|#.*$/g,re_params_fragment,re_fragment,re_no_escape,ajax_crawlable,fragment_prefix,elemUrlAttr_cache={};function is_string(arg){return typeof arg==="string"}function curry(func){var args=aps.call(arguments,1);return function(){return func.apply(this,args.concat(aps.call(arguments)))}}function get_fragment(url){return url.replace(re_fragment,"$2")}function get_querystring(url){return url.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function jq_param_sub(is_fragment,get_func,url,params,merge_mode){var result,qs,matches,url_params,hash;if(params!==undefined){matches=url.match(is_fragment?re_fragment:/^([^#?]*)\??([^#]*)(#?.*)/);hash=matches[3]||"";if(merge_mode===2&&is_string(params)){qs=params.replace(is_fragment?re_params_fragment:re_params_querystring,"")}else{url_params=jq_deparam(matches[2]);params=is_string(params)?jq_deparam[is_fragment?str_fragment:str_querystring](params):params;qs=merge_mode===2?params:merge_mode===1?$.extend({},params,url_params):$.extend({},url_params,params);qs=jq_param_sorted(qs);if(is_fragment){qs=qs.replace(re_no_escape,decode)}}result=matches[1]+(is_fragment?fragment_prefix:qs||!matches[1]?"?":"")+qs+hash}else{result=get_func(url!==undefined?url:location.href)}return result}jq_param[str_querystring]=curry(jq_param_sub,0,get_querystring);jq_param[str_fragment]=jq_param_fragment=curry(jq_param_sub,1,get_fragment);jq_param.sorted=jq_param_sorted=function(a,traditional){var arr=[],obj={};$.each(jq_param(a,traditional).split("&"),function(i,v){var key=v.replace(/(?:%5B|=).*$/,""),key_obj=obj[key];if(!key_obj){key_obj=obj[key]=[];arr.push(key)}key_obj.push(v)});return $.map(arr.sort(),function(v){return obj[v]}).join("&")};jq_param_fragment.noEscape=function(chars){chars=chars||"";var arr=$.map(chars.split(""),encodeURIComponent);re_no_escape=new RegExp(arr.join("|"),"g")};jq_param_fragment.noEscape(",/");jq_param_fragment.ajaxCrawlable=function(state){if(state!==undefined){if(state){re_params_fragment=/^.*(?:#!|#)/;re_fragment=/^([^#]*)(?:#!|#)?(.*)$/;fragment_prefix="#!"}else{re_params_fragment=/^.*#/;re_fragment=/^([^#]*)#?(.*)$/;fragment_prefix="#"}ajax_crawlable=!!state}return ajax_crawlable};jq_param_fragment.ajaxCrawlable(0);$.deparam=jq_deparam=function(params,coerce){var obj={},coerce_types={"true":!0,"false":!1,"null":null};$.each(params.replace(/\+/g," ").split("&"),function(j,v){var param=v.split("="),key=decode(param[0]),val,cur=obj,i=0,keys=key.split("]["),keys_last=keys.length-1;if(/\[/.test(keys[0])&&/\]$/.test(keys[keys_last])){keys[keys_last]=keys[keys_last].replace(/\]$/,"");keys=keys.shift().split("[").concat(keys);keys_last=keys.length-1}else{keys_last=0}if(param.length===2){val=decode(param[1]);if(coerce){val=val&&!isNaN(val)?+val:val==="undefined"?undefined:coerce_types[val]!==undefined?coerce_types[val]:val}if(keys_last){for(;i<=keys_last;i++){key=keys[i]===""?cur.length:keys[i];cur=cur[key]=i<keys_last?cur[key]||(keys[i+1]&&isNaN(keys[i+1])?{}:[]):val}}else{if($.isArray(obj[key])){obj[key].push(val)}else if(obj[key]!==undefined){obj[key]=[obj[key],val]}else{obj[key]=val}}}else if(key){obj[key]=coerce?undefined:""}});return obj};function jq_deparam_sub(is_fragment,url_or_params,coerce){if(url_or_params===undefined||typeof url_or_params==="boolean"){coerce=url_or_params;url_or_params=jq_param[is_fragment?str_fragment:str_querystring]()}else{url_or_params=is_string(url_or_params)?url_or_params.replace(is_fragment?re_params_fragment:re_params_querystring,""):url_or_params}return jq_deparam(url_or_params,coerce)}jq_deparam[str_querystring]=curry(jq_deparam_sub,0);jq_deparam[str_fragment]=jq_deparam_fragment=curry(jq_deparam_sub,1);$[str_elemUrlAttr]||($[str_elemUrlAttr]=function(obj){return $.extend(elemUrlAttr_cache,obj)})({a:str_href,base:str_href,iframe:str_src,img:str_src,input:str_src,form:"action",link:str_href,script:str_src});jq_elemUrlAttr=$[str_elemUrlAttr];function jq_fn_sub(mode,force_attr,params,merge_mode){if(!is_string(params)&&typeof params!=="object"){merge_mode=params;params=force_attr;force_attr=undefined}return this.each(function(){var that=$(this),attr=force_attr||jq_elemUrlAttr()[(this.nodeName||"").toLowerCase()]||"",url=attr&&that.attr(attr)||"";that.attr(attr,jq_param[mode](url,params,merge_mode))})}$.fn[str_querystring]=curry(jq_fn_sub,str_querystring);$.fn[str_fragment]=curry(jq_fn_sub,str_fragment);jq_bbq.pushState=jq_bbq_pushState=function(params,merge_mode){if(is_string(params)&&/^#/.test(params)&&merge_mode===undefined){merge_mode=2}var has_args=params!==undefined,url=jq_param_fragment(location.href,has_args?params:{},has_args?merge_mode:2);location.href=url};jq_bbq.getState=jq_bbq_getState=function(key,coerce){return key===undefined||typeof key==="boolean"?jq_deparam_fragment(key):jq_deparam_fragment(coerce)[key]};jq_bbq.removeState=function(arr){var state={};if(arr!==undefined){state=jq_bbq_getState();$.each($.isArray(arr)?arr:arguments,function(i,v){delete state[v]})}jq_bbq_pushState(state,2)};special[str_hashchange]=$.extend(special[str_hashchange],{add:function(handleObj){var old_handler;function new_handler(e){var hash=e[str_fragment]=jq_param_fragment();e.getState=function(key,coerce){return key===undefined||typeof key==="boolean"?jq_deparam(hash,key):jq_deparam(hash,coerce)[key]};old_handler.apply(this,arguments)}if($.isFunction(handleObj)){old_handler=handleObj;return new_handler}else{old_handler=handleObj.handler;handleObj.handler=new_handler}}})})(jQuery,this);(function($,window,undefined){"$:nomunge";var str_hashchange="hashchange",doc=document,fake_onhashchange,special=$.event.special,doc_mode=doc.documentMode,supports_onhashchange="on"+str_hashchange in window&&(doc_mode===undefined||doc_mode>7);function get_fragment(url){url=url||location.href;return"#"+url.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[str_hashchange]=function(fn){return fn?this.bind(str_hashchange,fn):this.trigger(str_hashchange)};$.fn[str_hashchange].delay=50;special[str_hashchange]=$.extend(special[str_hashchange],{setup:function(){if(supports_onhashchange){return false}$(fake_onhashchange.start)},teardown:function(){if(supports_onhashchange){return false}$(fake_onhashchange.stop)}});fake_onhashchange=function(){var self={},timeout_id,last_hash=get_fragment(),fn_retval=function(val){return val},history_set=fn_retval,history_get=fn_retval;self.start=function(){timeout_id||poll()};self.stop=function(){timeout_id&&clearTimeout(timeout_id);timeout_id=undefined};function poll(){var hash=get_fragment(),history_hash=history_get(last_hash);if(hash!==last_hash){history_set(last_hash=hash,history_hash);$(window).trigger(str_hashchange)}else if(history_hash!==last_hash){location.href=location.href.replace(/#.*/,"")+history_hash}timeout_id=setTimeout(poll,$.fn[str_hashchange].delay)}return self}()})(jQuery,this);;
/**
 * Modified by ericduran for jQuery Update compatibility.
 *
 * Patches overlay-parent.js for jQuery 1.9.1 compatibility.
 */

/**
 * @file
 * Attaches the behaviors for the Overlay parent pages.
 */

(function ($) {

/**
 * Open the overlay, or load content into it, when an admin link is clicked.
 */
Drupal.behaviors.overlayParent = {
  attach: function (context, settings) {
    if (Drupal.overlay.isOpen) {
      Drupal.overlay.makeDocumentUntabbable(context);
    }

    if (this.processed) {
      return;
    }
    this.processed = true;

    $(window)
      // When the hash (URL fragment) changes, open the overlay if needed.
      .bind('hashchange.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOperateByURLFragment'))
      // Trigger the hashchange handler once, after the page is loaded, so that
      // permalinks open the overlay.
      .triggerHandler('hashchange.drupal-overlay');

    $(document)
      // Instead of binding a click event handler to every link we bind one to
      // the document and only handle events that bubble up. This allows other
      // scripts to bind their own handlers to links and also to prevent
      // overlay's handling.
      .bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOverrideLink'));
  }
};

/**
 * Overlay object for parent windows.
 *
 * Events
 * Overlay triggers a number of events that can be used by other scripts.
 * - drupalOverlayOpen: This event is triggered when the overlay is opened.
 * - drupalOverlayBeforeClose: This event is triggered when the overlay attempts
 *   to close. If an event handler returns false, the close will be prevented.
 * - drupalOverlayClose: This event is triggered when the overlay is closed.
 * - drupalOverlayBeforeLoad: This event is triggered right before a new URL
 *   is loaded into the overlay.
 * - drupalOverlayReady: This event is triggered when the DOM of the overlay
 *   child document is fully loaded.
 * - drupalOverlayLoad: This event is triggered when the overlay is finished
 *   loading.
 * - drupalOverlayResize: This event is triggered when the overlay is being
 *   resized to match the parent window.
 */
Drupal.overlay = Drupal.overlay || {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  isLoading: false
};

Drupal.overlay.prototype = {};

/**
 * Open the overlay.
 *
 * @param url
 *   The URL of the page to open in the overlay.
 *
 * @return
 *   TRUE if the overlay was opened, FALSE otherwise.
 */
Drupal.overlay.open = function (url) {
  // Just one overlay is allowed.
  if (this.isOpen || this.isOpening) {
    return this.load(url);
  }
  this.isOpening = true;
  // Store the original document title.
  this.originalTitle = document.title;

  // Create the dialog and related DOM elements.
  this.create();

  this.isOpening = false;
  this.isOpen = true;
  $(document.documentElement).addClass('overlay-open');
  this.makeDocumentUntabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayOpen');

  return this.load(url);
};

/**
 * Create the underlying markup and behaviors for the overlay.
 */
Drupal.overlay.create = function () {
  this.$container = $(Drupal.theme('overlayContainer'))
    .appendTo(document.body);

  // Overlay uses transparent iframes that cover the full parent window.
  // When the overlay is open the scrollbar of the parent window is hidden.
  // Because some browsers show a white iframe background for a short moment
  // while loading a page into an iframe, overlay uses two iframes. By loading
  // the page in a hidden (inactive) iframe the user doesn't see the white
  // background. When the page is loaded the active and inactive iframes
  // are switched.
  this.activeFrame = this.$iframeA = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.inactiveFrame = this.$iframeB = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.$iframeA.bind('load.drupal-overlay', { self: this.$iframeA[0], sibling: this.$iframeB }, $.proxy(this, 'loadChild'));
  this.$iframeB.bind('load.drupal-overlay', { self: this.$iframeB[0], sibling: this.$iframeA }, $.proxy(this, 'loadChild'));

  // Add a second class "drupal-overlay-open" to indicate these event handlers
  // should only be bound when the overlay is open.
  var eventClass = '.drupal-overlay.drupal-overlay-open';
  $(window)
    .bind('resize' + eventClass, $.proxy(this, 'eventhandlerOuterResize'));
  $(document)
    .bind('drupalOverlayLoad' + eventClass, $.proxy(this, 'eventhandlerOuterResize'))
    .bind('drupalOverlayReady' + eventClass +
          ' drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerSyncURLFragment'))
    .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRefreshPage'))
    .bind('drupalOverlayBeforeClose' + eventClass +
          ' drupalOverlayBeforeLoad' + eventClass +
          ' drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerDispatchEvent'));

  if ($('.overlay-displace-top, .overlay-displace-bottom').length) {
    $(document)
      .bind('drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerAlterDisplacedElements'))
      .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRestoreDisplacedElements'));
  }
};

/**
 * Load the given URL into the overlay iframe.
 *
 * Use this method to change the URL being loaded in the overlay if it is
 * already open.
 *
 * @return
 *   TRUE if URL is loaded into the overlay, FALSE otherwise.
 */
Drupal.overlay.load = function (url) {
  if (!this.isOpen) {
    return false;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayBeforeLoad');

  $(document.documentElement).addClass('overlay-loading');

  // The contentDocument property is not supported in IE until IE8.
  var iframeDocument = this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document;

  // location.replace doesn't create a history entry. location.href does.
  // In this case, we want location.replace, as we're creating the history
  // entry using URL fragments.
  iframeDocument.location.replace(url);

  return true;
};

/**
 * Close the overlay and remove markup related to it from the document.
 *
 * @return
 *   TRUE if the overlay was closed, FALSE otherwise.
 */
Drupal.overlay.close = function () {
  // Prevent double execution when close is requested more than once.
  if (!this.isOpen || this.isClosing) {
    return false;
  }

  // Allow other scripts to respond to this event.
  var event = $.Event('drupalOverlayBeforeClose');
  $(document).trigger(event);
  // If a handler returned false, the close will be prevented.
  if (event.isDefaultPrevented()) {
    return false;
  }

  this.isClosing = true;
  this.isOpen = false;
  $(document.documentElement).removeClass('overlay-open');
  // Restore the original document title.
  document.title = this.originalTitle;
  this.makeDocumentTabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayClose');

  // When the iframe is still loading don't destroy it immediately but after
  // the content is loaded (see Drupal.overlay.loadChild).
  if (!this.isLoading) {
    this.destroy();
    this.isClosing = false;
  }
  return true;
};

/**
 * Destroy the overlay.
 */
Drupal.overlay.destroy = function () {
  $([document, window]).unbind('.drupal-overlay-open');
  this.$container.remove();

  this.$container = null;
  this.$iframeA = null;
  this.$iframeB = null;

  this.iframeWindow = null;
};

/**
 * Redirect the overlay parent window to the given URL.
 *
 * @param url
 *   Can be an absolute URL or a relative link to the domain root.
 */
Drupal.overlay.redirect = function (url) {
  // Create a native Link object, so we can use its object methods.
  var link = $(url.link(url)).get(0);

  // If the link is already open, force the hashchange event to simulate reload.
  if (window.location.href == link.href) {
    $(window).triggerHandler('hashchange.drupal-overlay');
  }

  window.location.href = link.href;
  return true;
};

/**
 * Bind the child window.
 *
 * Note that this function is fired earlier than Drupal.overlay.loadChild.
 */
Drupal.overlay.bindChild = function (iframeWindow, isClosing) {
  this.iframeWindow = iframeWindow;

  // We are done if the child window is closing.
  if (isClosing || this.isClosing || !this.isOpen) {
    return;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayReady');
};

/**
 * Event handler: load event handler for the overlay iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: load
 *   - event.currentTarget: iframe
 */
Drupal.overlay.loadChild = function (event) {
  var iframe = event.data.self;
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var iframeWindow = iframeDocument.defaultView || iframeDocument.parentWindow;
  if (iframeWindow.location == 'about:blank') {
    return;
  }

  this.isLoading = false;
  $(document.documentElement).removeClass('overlay-loading');
  event.data.sibling.removeClass('overlay-active').attr({ 'tabindex': -1 });

  // Only continue when overlay is still open and not closing.
  if (this.isOpen && !this.isClosing) {
    // And child document is an actual overlayChild.
    if (iframeWindow.Drupal && iframeWindow.Drupal.overlayChild) {
      // Replace the document title with title of iframe.
      document.title = iframeWindow.document.title;

      this.activeFrame = $(iframe)
        .addClass('overlay-active')
        // Add a title attribute to the iframe for accessibility.
        .attr('title', Drupal.t('@title dialog', { '@title': iframeWindow.jQuery('#overlay-title').text() })).removeAttr('tabindex');
      this.inactiveFrame = event.data.sibling;

      // Load an empty document into the inactive iframe.
      (this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document).location.replace('about:blank');

      // Move the focus to just before the "skip to main content" link inside
      // the overlay.
      this.activeFrame.focus();
      var skipLink = iframeWindow.jQuery('a:first');
      Drupal.overlay.setFocusBefore(skipLink, iframeWindow.document);

      // Allow other scripts to respond to this event.
      $(document).trigger('drupalOverlayLoad');
    }
    else {
      window.location = iframeWindow.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }
  }
  else {
    this.destroy();
  }
};

/**
 * Creates a placeholder element to receive document focus.
 *
 * Setting the document focus to a link will make it visible, even if it's a
 * "skip to main content" link that should normally be visible only when the
 * user tabs to it. This function can be used to set the document focus to
 * just before such an invisible link.
 *
 * @param $element
 *   The jQuery element that should receive focus on the next tab press.
 * @param document
 *   The iframe window element to which the placeholder should be added. The
 *   placeholder element has to be created inside the same iframe as the element
 *   it precedes, to keep IE happy. (http://bugs.jquery.com/ticket/4059)
 */
Drupal.overlay.setFocusBefore = function ($element, document) {
  // Create an anchor inside the placeholder document.
  var placeholder = document.createElement('a');
  var $placeholder = $(placeholder).addClass('element-invisible').attr('href', '#');
  // Put the placeholder where it belongs, and set the document focus to it.
  $placeholder.insertBefore($element);
  $placeholder.focus();
  // Make the placeholder disappear as soon as it loses focus, so that it
  // doesn't appear in the tab order again.
  $placeholder.one('blur', function () {
    $(this).remove();
  });
};

/**
 * Check if the given link is in the administrative section of the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL represents an administrative link, FALSE otherwise.
 */
Drupal.overlay.isAdminLink = function (url) {
  if (Drupal.overlay.isExternalLink(url)) {
    return false;
  }

  var path = this.getPath(url);

  // Turn the list of administrative paths into a regular expression.
  if (!this.adminPathRegExp) {
    var prefix = '';
    if (Drupal.settings.overlay.pathPrefixes.length) {
      // Allow path prefixes used for language negatiation followed by slash,
      // and the empty string.
      prefix = '(' + Drupal.settings.overlay.pathPrefixes.join('/|') + '/|)';
    }
    var adminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.admin.replace(/\s+/g, '|') + ')$';
    var nonAdminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.non_admin.replace(/\s+/g, '|') + ')$';
    adminPaths = adminPaths.replace(/\*/g, '.*');
    nonAdminPaths = nonAdminPaths.replace(/\*/g, '.*');
    this.adminPathRegExp = new RegExp(adminPaths);
    this.nonAdminPathRegExp = new RegExp(nonAdminPaths);
  }

  return this.adminPathRegExp.exec(path) && !this.nonAdminPathRegExp.exec(path);
};

/**
 * Determine whether a link is external to the site.
 *
 * Deprecated. Use Drupal.urlIsLocal() instead.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL is external to the site, FALSE otherwise.
 */
Drupal.overlay.isExternalLink = function (url) {

  // Drupal.urlIsLocal() was added in Drupal 7.39.
  if (typeof Drupal.urlIsLocal === 'function') {
    return !Drupal.urlIsLocal(url);
  }

  var re = RegExp('^((f|ht)tps?:)?//(?!' + window.location.host + ')');
  return re.test(url);
};

/**
 * Constructs an internal URL (relative to this site) from the provided path.
 *
 * For example, if the provided path is 'admin' and the site is installed at
 * http://example.com/drupal, this function will return '/drupal/admin'.
 *
 * @param path
 *   The internal path, without any leading slash.
 *
 * @return
 *   The internal URL derived from the provided path, or null if a valid
 *   internal path cannot be constructed (for example, if an attempt to create
 *   an external link is detected).
 */
Drupal.overlay.getInternalUrl = function (path) {
  var url = Drupal.settings.basePath + path;
  if (!this.isExternalLink(url)) {
    return url;
  }
};

/**
 * Event handler: resizes overlay according to the size of the parent window.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerOuterResize = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  // IE6 uses position:absolute instead of position:fixed.
  if (typeof document.body.style.maxHeight != 'string') {
    this.activeFrame.height($(window).height());
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayResize');
};

/**
 * Event handler: resizes displaced elements so they won't overlap the scrollbar
 * of overlay's iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerAlterDisplacedElements = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  $(this.iframeWindow.document.body).css({
    marginTop: Drupal.overlay.getDisplacement('top'),
    marginBottom: Drupal.overlay.getDisplacement('bottom')
  })
  // IE7 isn't reflowing the document immediately.
  // @todo This might be fixed in a cleaner way.
  .addClass('overlay-trigger-reflow').removeClass('overlay-trigger-reflow');

  var documentHeight = this.iframeWindow.document.body.clientHeight;
  var documentWidth = this.iframeWindow.document.body.clientWidth;
  // IE6 doesn't support maxWidth, use width instead.
  var maxWidthName = (typeof document.body.style.maxWidth == 'string') ? 'maxWidth' : 'width';

  if (Drupal.overlay.leftSidedScrollbarOffset === undefined && $(document.documentElement).attr('dir') === 'rtl') {
    // We can't use element.clientLeft to detect whether scrollbars are placed
    // on the left side of the element when direction is set to "rtl" as most
    // browsers dont't support it correctly.
    // http://www.gtalbot.org/BugzillaSection/DocumentAllDHTMLproperties.html
    // There seems to be absolutely no way to detect whether the scrollbar
    // is on the left side in Opera; always expect scrollbar to be on the left.
    if ($.browser.opera) {
      Drupal.overlay.leftSidedScrollbarOffset = document.documentElement.clientWidth - this.iframeWindow.document.documentElement.clientWidth + this.iframeWindow.document.documentElement.clientLeft;
    }
    else if (this.iframeWindow.document.documentElement.clientLeft) {
      Drupal.overlay.leftSidedScrollbarOffset = this.iframeWindow.document.documentElement.clientLeft;
    }
    else {
      var el1 = $('<div style="direction: rtl; overflow: scroll;"></div>').appendTo(document.body);
      var el2 = $('<div></div>').appendTo(el1);
      Drupal.overlay.leftSidedScrollbarOffset = parseInt(el2[0].offsetLeft - el1[0].offsetLeft);
      el1.remove();
    }
  }

  // Consider any element that should be visible above the overlay (such as
  // a toolbar).
  $('.overlay-displace-top, .overlay-displace-bottom').each(function () {
    var data = $(this).data();
    var maxWidth = documentWidth;
    // In IE, Shadow filter makes element to overlap the scrollbar with 1px.
    if (this.filters && this.filters.length && this.filters.item('DXImageTransform.Microsoft.Shadow')) {
      maxWidth -= 1;
    }

    if (Drupal.overlay.leftSidedScrollbarOffset) {
      $(this).css('left', Drupal.overlay.leftSidedScrollbarOffset);
    }

    // Prevent displaced elements overlapping window's scrollbar.
    var currentMaxWidth = parseInt($(this).css(maxWidthName));
    if ((data.drupalOverlay && data.drupalOverlay.maxWidth) || isNaN(currentMaxWidth) || currentMaxWidth > maxWidth || currentMaxWidth <= 0) {
      $(this).css(maxWidthName, maxWidth);
      (data.drupalOverlay = data.drupalOverlay || {}).maxWidth = true;
    }

    // Use a more rigorous approach if the displaced element still overlaps
    // window's scrollbar; clip the element on the right.
    var offset = $(this).offset();
    var offsetRight = offset.left + $(this).outerWidth();
    if ((data.drupalOverlay && data.drupalOverlay.clip) || offsetRight > maxWidth) {
      if (Drupal.overlay.leftSidedScrollbarOffset) {
        $(this).css('clip', 'rect(auto, auto, ' + (documentHeight - offset.top) + 'px, ' + (Drupal.overlay.leftSidedScrollbarOffset + 2) + 'px)');
      }
      else {
        $(this).css('clip', 'rect(auto, ' + (maxWidth - offset.left) + 'px, ' + (documentHeight - offset.top) + 'px, auto)');
      }
      (data.drupalOverlay = data.drupalOverlay || {}).clip = true;
    }
  });
};

/**
 * Event handler: restores size of displaced elements as they were before
 * overlay was opened.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerRestoreDisplacedElements = function (event) {
  var $displacedElements = $('.overlay-displace-top, .overlay-displace-bottom');
  try {
    $displacedElements.css({ maxWidth: '', clip: '' });
  }
  // IE bug that doesn't allow unsetting style.clip (http://dev.jquery.com/ticket/6512).
  catch (err) {
    $displacedElements.attr('style', function (index, attr) {
      return attr.replace(/clip\s*:\s*rect\([^)]+\);?/i, '');
    });
  }
};

/**
 * Event handler: overrides href of administrative links to be opened in
 * the overlay.
 *
 * This click event handler should be bound to any document (for example the
 * overlay iframe) of which you want links to open in the overlay.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: click, mouseup
 *   - event.currentTarget: document
 *
 * @see Drupal.overlayChild.behaviors.addClickHandler
 */
Drupal.overlay.eventhandlerOverrideLink = function (event) {
  // In some browsers the click event isn't fired for right-clicks. Use the
  // mouseup event for right-clicks and the click event for everything else.
  if ((event.type == 'click' && event.button == 2) || (event.type == 'mouseup' && event.button != 2)) {
    return;
  }

  var $target = $(event.target);

  // Only continue if clicked target (or one of its parents) is a link.
  if (!$target.is('a')) {
    $target = $target.closest('a');
    if (!$target.length) {
      return;
    }
  }

  // Never open links in the overlay that contain the overlay-exclude class.
  if ($target.hasClass('overlay-exclude')) {
    return;
  }

  // Close the overlay when the link contains the overlay-close class.
  if ($target.hasClass('overlay-close')) {
    // Clearing the overlay URL fragment will close the overlay.
    $.bbq.removeState('overlay');
    return;
  }

  var target = $target[0];
  var href = target.href;
  // Only handle links that have an href attribute and use the HTTP(S) protocol.
  if (href != undefined && href != '' && target.protocol.match(/^https?\:/)) {
    var anchor = href.replace(target.ownerDocument.location.href, '');
    // Skip anchor links.
    if (anchor.length == 0 || anchor.charAt(0) == '#') {
      return;
    }
    // Open admin links in the overlay.
    else if (this.isAdminLink(href)) {
      // If the link contains the overlay-restore class and the overlay-context
      // state is set, also update the parent window's location.
      var parentLocation = ($target.hasClass('overlay-restore') && typeof $.bbq.getState('overlay-context') == 'string')
        ? this.getInternalUrl($.bbq.getState('overlay-context'))
        : null;
      href = this.fragmentizeLink($target.get(0), parentLocation);
      // Only override default behavior when left-clicking and user is not
      // pressing the ALT, CTRL, META (Command key on the Macintosh keyboard)
      // or SHIFT key.
      if (event.button == 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        // Redirect to a fragmentized href. This will trigger a hashchange event.
        this.redirect(href);
        // Prevent default action and further propagation of the event.
        return false;
      }
      // Otherwise alter clicked link's href. This is being picked up by
      // the default action handler.
      else {
        $target
          // Restore link's href attribute on blur or next click.
          .one('blur mousedown', { target: target, href: target.href }, function (event) { $(event.data.target).attr('href', event.data.href); })
          .attr('href', href);
      }
    }
    // Non-admin links should close the overlay and open in the main window,
    // which is the default action for a link. We only need to handle them
    // if the overlay is open and the clicked link is inside the overlay iframe.
    else if (this.isOpen && target.ownerDocument === this.iframeWindow.document) {
      // Open external links in the immediate parent of the frame, unless the
      // link already has a different target.
      if (target.hostname != window.location.hostname) {
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
      else {
        // Add the overlay-context state to the link, so "overlay-restore" links
        // can restore the context.
        if ($target[0].hash) {
          // Leave links with an existing fragment alone. Adding an extra
          // parameter to a link like "node/1#section-1" breaks the link.
        }
        else {
          // For links with no existing fragment, add the overlay context.
          $target.attr('href', $.param.fragment(href, { 'overlay-context': this.getPath(window.location) + window.location.search }));
        }

        // When the link has a destination query parameter and that destination
        // is an admin link we need to fragmentize it. This will make it reopen
        // in the overlay.
        var params = $.deparam.querystring(href);
        if (params.destination && this.isAdminLink(params.destination)) {
          var fragmentizedDestination = $.param.fragment(this.getPath(window.location), { overlay: params.destination });
          $target.attr('href', $.param.querystring(href, { destination: fragmentizedDestination }));
        }

        // Make the link open in the immediate parent of the frame, unless the
        // link already has a different target.
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
    }
  }
};

/**
 * Event handler: opens or closes the overlay based on the current URL fragment.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: hashchange
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerOperateByURLFragment = function (event) {
  // If we changed the hash to reflect an internal redirect in the overlay,
  // its location has already been changed, so don't do anything.
  if ($.data(window.location, window.location.href) === 'redirect') {
    $.data(window.location, window.location.href, null);
    return;
  }

  // Get the overlay URL from the current URL fragment.
  var internalUrl = null;
  var state = $.bbq.getState('overlay');
  if (state) {
    internalUrl = this.getInternalUrl(state);
  }
  if (internalUrl) {
    // Append render variable, so the server side can choose the right
    // rendering and add child frame code to the page if needed.
    var url = $.param.querystring(internalUrl, { render: 'overlay' });

    this.open(url);
    this.resetActiveClass(this.getPath(Drupal.settings.basePath + state));
  }
  // If there is no overlay URL in the fragment and the overlay is (still)
  // open, close the overlay.
  else if (this.isOpen && !this.isClosing) {
    this.close();
    this.resetActiveClass(this.getPath(window.location));
  }
};

/**
 * Event handler: makes sure the internal overlay URL is reflected in the parent
 * URL fragment.
 *
 * Normally the parent URL fragment determines the overlay location. However, if
 * the overlay redirects internally, the parent doesn't get informed, and the
 * parent URL fragment will be out of date. This is a sanity check to make
 * sure we're in the right place.
 *
 * The parent URL fragment is also not updated automatically when overlay's
 * open, close or load functions are used directly (instead of through
 * eventhandlerOperateByURLFragment).
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayReady, drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerSyncURLFragment = function (event) {
  if (this.isOpen) {
    var expected = $.bbq.getState('overlay');
    // This is just a sanity check, so we're comparing paths, not query strings.
    if (this.getPath(Drupal.settings.basePath + expected) != this.getPath(this.iframeWindow.document.location)) {
      // There may have been a redirect inside the child overlay window that the
      // parent wasn't aware of. Update the parent URL fragment appropriately.
      var newLocation = Drupal.overlay.fragmentizeLink(this.iframeWindow.document.location);
      // Set a 'redirect' flag on the new location so the hashchange event handler
      // knows not to change the overlay's content.
      $.data(window.location, newLocation, 'redirect');
      // Use location.replace() so we don't create an extra history entry.
      window.location.replace(newLocation);
    }
  }
  else {
    $.bbq.removeState('overlay');
  }
};

/**
 * Event handler: if the child window suggested that the parent refresh on
 * close, force a page refresh.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerRefreshPage = function (event) {
  if (Drupal.overlay.refreshPage) {
    window.location.reload(true);
  }
};

/**
 * Event handler: dispatches events to the overlay document.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerDispatchEvent = function (event) {
  if (this.iframeWindow && this.iframeWindow.document) {
    this.iframeWindow.jQuery(this.iframeWindow.document).trigger(event);
  }
};

/**
 * Make a regular admin link into a URL that will trigger the overlay to open.
 *
 * @param link
 *   A JavaScript Link object (i.e. an <a> element).
 * @param parentLocation
 *   (optional) URL to override the parent window's location with.
 *
 * @return
 *   A URL that will trigger the overlay (in the form
 *   /node/1#overlay=admin/config).
 */
Drupal.overlay.fragmentizeLink = function (link, parentLocation) {
  // Don't operate on links that are already overlay-ready.
  var params = $.deparam.fragment(link.href);
  if (params.overlay) {
    return link.href;
  }

  // Determine the link's original destination. Set ignorePathFromQueryString to
  // true to prevent transforming this link into a clean URL while clean URLs
  // may be disabled.
  var path = this.getPath(link, true);
  // Preserve existing query and fragment parameters in the URL, except for
  // "render=overlay" which is re-added in Drupal.overlay.eventhandlerOperateByURLFragment.
  var destination = path + link.search.replace(/&?render=overlay/, '').replace(/\?$/, '') + link.hash;

  // Assemble and return the overlay-ready link.
  return $.param.fragment(parentLocation || window.location.href, { overlay: destination });
};

/**
 * Refresh any regions of the page that are displayed outside the overlay.
 *
 * @param data
 *   An array of objects with information on the page regions to be refreshed.
 *   For each object, the key is a CSS class identifying the region to be
 *   refreshed, and the value represents the section of the Drupal $page array
 *   corresponding to this region.
 */
Drupal.overlay.refreshRegions = function (data) {
  $.each(data, function () {
    var region_info = this;
    $.each(region_info, function (regionClass) {
      var regionName = region_info[regionClass];
      var regionSelector = '.' + regionClass;
      // Allow special behaviors to detach.
      Drupal.detachBehaviors($(regionSelector));
      $.get(Drupal.settings.basePath + Drupal.settings.overlay.ajaxCallback + '/' + regionName, function (newElement) {
        $(regionSelector).replaceWith($(newElement));
        Drupal.attachBehaviors($(regionSelector), Drupal.settings);
      });
    });
  });
};

/**
 * Reset the active class on links in displaced elements according to
 * given path.
 *
 * @param activePath
 *   Path to match links against.
 */
Drupal.overlay.resetActiveClass = function(activePath) {
  var self = this;
  var windowDomain = window.location.protocol + window.location.hostname;

  $('.overlay-displace-top, .overlay-displace-bottom')
  .find('a[href]')
  // Remove active class from all links in displaced elements.
  .removeClass('active')
  // Add active class to links that match activePath.
  .each(function () {
    var linkDomain = this.protocol + this.hostname;
    var linkPath = self.getPath(this);

    // A link matches if it is part of the active trail of activePath, except
    // for frontpage links.
    if (linkDomain == windowDomain && (activePath + '/').indexOf(linkPath + '/') === 0 && (linkPath !== '' || activePath === '')) {
      $(this).addClass('active');
    }
  });
};

/**
 * Helper function to get the (corrected) Drupal path of a link.
 *
 * @param link
 *   Link object or string to get the Drupal path from.
 * @param ignorePathFromQueryString
 *   Boolean whether to ignore path from query string if path appears empty.
 *
 * @return
 *   The Drupal path.
 */
Drupal.overlay.getPath = function (link, ignorePathFromQueryString) {
  if (typeof link == 'string') {
    // Create a native Link object, so we can use its object methods.
    link = $(link.link(link)).get(0);
  }

  var path = link.pathname;
  // Ensure a leading slash on the path, omitted in some browsers.
  if (path.charAt(0) != '/') {
    path = '/' + path;
  }
  path = path.replace(new RegExp(Drupal.settings.basePath + '(?:index.php)?'), '');
  if (path == '' && !ignorePathFromQueryString) {
    // If the path appears empty, it might mean the path is represented in the
    // query string (clean URLs are not used).
    var match = new RegExp('([?&])q=(.+)([&#]|$)').exec(link.search);
    if (match && match.length == 4) {
      path = match[2];
    }
  }

  return path;
};

/**
 * Get the total displacement of given region.
 *
 * @param region
 *   Region name. Either "top" or "bottom".
 *
 * @return
 *   The total displacement of given region in pixels.
 */
Drupal.overlay.getDisplacement = function (region) {
  var displacement = 0;
  var lastDisplaced = $('.overlay-displace-' + region + ':last');
  if (lastDisplaced.length) {
    displacement = lastDisplaced.offset().top + lastDisplaced.outerHeight();

    // In modern browsers (including IE9), when box-shadow is defined, use the
    // normal height.
    var cssBoxShadowValue = lastDisplaced.css('box-shadow');
    var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
    // In IE8 and below, we use the shadow filter to apply box-shadow styles to
    // the toolbar. It adds some extra height that we need to remove.
    if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))) {
      displacement -= lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;
      displacement = Math.max(0, displacement);
    }
  }
  return displacement;
};

/**
 * Makes elements outside the overlay unreachable via the tab key.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes changed. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentUntabbable = function (context) {

  context = context || document.body;
  var $overlay, $tabbable, $hasTabindex;

  // Determine which elements on the page already have a tabindex.
  $hasTabindex = $('[tabindex] :not(.overlay-element)', context);
  // Record the tabindex for each element, so we can restore it later.
  $hasTabindex.each(Drupal.overlay._recordTabindex);
  // Add the tabbable elements from the current context to any that we might
  // have previously recorded.
  Drupal.overlay._hasTabindex = $hasTabindex.add(Drupal.overlay._hasTabindex);

  // Set tabindex to -1 on everything outside the overlay and toolbars, so that
  // the underlying page is unreachable.

  // By default, browsers make a, area, button, input, object, select, textarea,
  // and iframe elements reachable via the tab key.
  $tabbable = $('a, area, button, input, object, select, textarea, iframe');
  // If another element (like a div) has a tabindex, it's also tabbable.
  $tabbable = $tabbable.add($hasTabindex);
  // Leave links inside the overlay and toolbars alone.
  $overlay = $('.overlay-element, #overlay-container, .overlay-displace-top, .overlay-displace-bottom').find('*');
  $tabbable = $tabbable.not($overlay);
  // We now have a list of everything in the underlying document that could
  // possibly be reachable via the tab key. Make it all unreachable.
  $tabbable.attr('tabindex', -1);
};

/**
 * Restores the original tabindex value of a group of elements.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes restored. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentTabbable = function (context) {

  var $needsTabindex;
  context = context || document.body;

  // Make the underlying document tabbable again by removing all existing
  // tabindex attributes.
  var $tabindex = $('[tabindex]', context);
  $tabindex.removeAttr('tabindex');

  // Restore the tabindex attributes that existed before the overlay was opened.
  $needsTabindex = $(Drupal.overlay._hasTabindex, context);
  $needsTabindex.each(Drupal.overlay._restoreTabindex);
  Drupal.overlay._hasTabindex = Drupal.overlay._hasTabindex.not($needsTabindex);
};

/**
 * Record the tabindex for an element, using $.data.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._recordTabindex = function () {
  var $element = $(this);
  var tabindex = $(this).attr('tabindex');
  $element.data('drupalOverlayOriginalTabIndex', tabindex);
};

/**
 * Restore an element's original tabindex.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._restoreTabindex = function () {
  var $element = $(this);
  var tabindex = $element.data('drupalOverlayOriginalTabIndex');
  $element.attr('tabindex', tabindex);
};

/**
 * Theme function to create the overlay iframe element.
 */
Drupal.theme.prototype.overlayContainer = function () {
  return '<div id="overlay-container"><div class="overlay-modal-background"></div></div>';
};

/**
 * Theme function to create an overlay iframe element.
 */
Drupal.theme.prototype.overlayElement = function (url) {
  return '<iframe class="overlay-element" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>';
};

})(jQuery);
;
