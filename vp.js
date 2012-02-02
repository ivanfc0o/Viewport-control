(function(win){
	var _size = [0,0];
	var _callback;
	// Functions
	addEvent = function(type, fn){if(win.addEventListener){ addEventListener(type, fn, false); } else { attachEvent('on' + type, fn); }};
	onResize = function(){
		var s = window.innerWidth?[window.innerWidth,window.innerHeight]:false;
			s = s?s:[document.documentElement.clientWidth,document.documentElement.clientHeight];
			s = (typeof(s)=="object")?s:[document.getElementsByTagName('body')[0].clientWidth,document.getElementsByTagName('body')[0].clientHeight];
			_size = [s[0],s[1]];
			if(_callback){ _callback(_size); }
	};
	//Set VP controls
	win.windowControl = win.winCtrl = {
		val: function(){ return {width: _size[0], height: _size[1]}; },
		get: function(s){ var v = (s=="width")?_size[0]:_sise[1]; return v; },
		onResize: function(fn){ if(fn instanceof Function){_callback = fn; onResize();}}
	};
	// Go
	addEvent("resize", onResize);
	onResize();
})(this);