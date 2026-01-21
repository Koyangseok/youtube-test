(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.카피라이트 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhCAtQAGgDAEgGQAEgFACgJQACgJAAgJQAAgKgCgIQgBgHgCgFQgBgEgEgDIgIgHIAAgCQAHADAGAFQAGAIAEAJQAEAKAAAJQAAAPgHANQgHAMgNAGgAh/AnQgHgIgEgJQgEgJAAgLQAAgOAIgMQAHgNAMgFIAAACQgGADgEAGQgEAGgCAIQgCAJAAAJQABAKABAJIADALIAFAIIAIAGIAAADQgIgFgEgEgAkMArQgDgCAAgCIABgDIADgFIAFgGIgEgCIgBgDIABgEIAHgHQgEgBgCgEQgCgDgBgEQAAgGAGgFQAEgFAIAAQAHAAAEADIAKAAIADAAIAAABIAAABIAAACIAAAAIgDAAIgGAAQADAEAAAFQAAAFgFAFQgEAFgJAAIgHgBIgCADIgBACIABACIADABIAGABIANAAQAFABADACQADADAAAEQgBAGgFAFQgHAGgMABQgKAAgHgFgAkHAfIgBADQAAADADACQAFACAJAAQAIAAAFgCQAEgEAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgKgCIgRgBIgEAFgAkBgOQgCADAAAGQAAAGADAFQADADAEAAQAEAAACgDQACgCAAgGQAAgHgDgEQgDgDgDgBQgEAAgDADgAl9AuQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIABgDQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAEABIACABIAEgCIADgGIADgIIgQghIgCgDIgDgCIgDgCIAAgCIAVAAIAAACIgBAAIgDABIgBADIABAEIALAWIAKgYIABgDIgBgBIgBgBIgCgBIAAgCIAOAAIAAACIgDABIgCACIgBAEIgTArQgCAHgFADQgEAEgEAAQgDAAgCgCgAm0AwIAAgDIABAAIAFgBIABgBIABgHIAAgoIgBgGIgBgCIgCAAIgDAAIgBgBIAOgGIACAAIAAAKQAEgFADgDQAEgCAEAAQAGAAAFAFQAFAHAAAJQAAAMgGAHQgGAHgJgBIgFgBIgFgDIAAAOIAAAGIACACIAGAAIAAADgAmegLIgGAGIAAAPIAAAHQABADADADQACABAEAAQAGAAACgDQAEgGABgJQAAgJgFgFQgDgEgFAAIgEABgAEBAnIgCAAIgBgBIAAgHIADABIACAAIACAAIABgCIACgEIACgGIgQgrIAIAAIAJAZIABACIABACIAAACIABAEIACgEIAAgCIAAgCIABgDIAJgYIAHAAIgPAqIgCAGIgBAFIgBACIgCABQgBADgDACQgCABgDAAIgCAAgACFAfQgGgFAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIADgBIAEABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAADQgBAEABACQADADAHAAQAIAAAEgGQAEgGAAgIQAAgIgEgFQgEgGgIAAQgDAAgFADQgEADgDACIgCgBIADgjIAhAAIgBAGIgeAAIgBAaQADgEADgBQAEgBAFgBQAJAAAGAHQAFAGABAJQgBAKgFAGQgGAHgJAAQgKAAgFgEgAAdAXQgGgKAAgOQAAgOAGgKQAGgLAKAAQAKAAAGALQAGAKgBAOQABAOgGAKQgGAMgKgBQgKABgGgMgAAigXQgEAJAAANQAAANAEAKQAEAKAHAAQAGAAAFgKQAEgKAAgNQAAgNgEgJQgFgLgGABQgHgBgEALgABJAhIAAgDIAKgPIAMgNIAFgEQAFgEACgFQABgEAAgFQAAgHgEgDQgEgDgFAAQgFAAgEACQgEACAAAFIABADIABABIAAACIABABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQgBgCAAgEQAAgFAFgFQAGgGAIAAQAKAAAEAFQAFAEABAIQgBAHgEAGQgDAEgHAGIgLAKIgMANIAXAAQAEAAAEgDQADgDADgHIACAAIgGATgAgZAhIAAgDIAJgPIAMgNIAEgEQAEgEADgFQABgEAAgFQAAgHgEgDQgDgDgFAAQgFAAgEACQgDACAAAFIAAADIABABIAAACIABABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQgBgCAAgEQAAgFAFgFQAGgGAIAAQAJAAAFAFQAEAEAAAIQAAAHgEAGQgDAEgHAGIgKAKIgMANIAXAAQADAAAEgDQADgDADgHIACAAIgGATgAhoAVQgFgGAAgLQAAgKAGgGQAGgHAJAAQAHAAAEAEQAFADAAADQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAIgBgEQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQgCgCgCAAQgFAAgDAEQgEAFAAAHQAAAHAEAHQAEAGAGAAQAFAAAEgEQADgCACgGIACABQgCAJgGAFQgEAEgHAAQgIABgGgHgAndAUQgFgIAAgIQAAgFADgGQADgGAFgDQAFgDAGAAQAJAAAHAHQAFAIAAAHQAAAGgDAGQgCAGgGADQgFADgGAAQgKAAgGgHgAnTgOQgDABgCAEQgBAEAAAFQAAAKAEAHQADAHAHAAQAFAAADgEQADgEAAgKQAAgLgFgGQgEgFgFAAIgFACgAodAPQgIgJABgLQgBgKAFgIQAEgJAJgEQAHgFAKABQAHgBAGAEIADABIADgBIACgDIABAAIABAWIgBAAQgDgLgGgEQgFgEgIAAQgGAAgGADQgFAEgDAHQgDAHgBALQAAAIADAGQAEAHAFAEQAGADAIAAQAGAAAFgCQAFgEAFgIIACACQgEAIgIAEQgGAEgJAAQgRAAgIgMgAIeAbIAAgXIgvAAIAAgGIA2AAIAAAdgAF9AbIAAgDIgnAAIAAADIgHAAIAAgcIA2AAIAAAcgAFWASIAnAAIAAgNIgnAAgAihAZIgEgDIgBgHIAAgdIgHAAIAAgCIAFgEIAGgGIACgGIACAAIAAAOIAKAAIAAAEIgKAAIAAAcQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACgBIADgDIACAAQgCAFgDACQgDACgEAAIgDgBgAGuAZIgJgCQgDgBgDgEQgBgCAAgEQAAgEABgCQADgDADgCIAJgBIAMgBIALABIAJABQAEACACADQACACAAAEQAAAEgCACQgCAEgEABIgJACIgLABIgMgBgAGyAFIgHABIgEACQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAEACIAHACIAIAAIAIAAIAGgCQABAAAAAAQABAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgGgBIgIAAIgIAAgAghAaIAAgCIABgBIAAADgAjEAaIAAgCIAAAAIAFgBIACgCIAAgFIAAgQIgBgJIgDgDIgDgBIgGABIgFAGIAAAWIAAAGIACABIAEABIAAACIgWAAIAAgCIAFgBIACgBIAAgGIAAgnIAAgKIgBgDIgDAAIgDAAIAAgBIANgFIADAAIAAAgQAFgGADgCIAGgBQAEAAACACQADACACAEIABALIAAAQIABAGIABABIAEABIAAACgAkqAaIAAgCIAEgBIACgBIAAgGIAAgRIAAgJIgBgCIgCAAIgDAAIgBgBIANgGIACAAIAAAjIABAGIACABIAEABIAAACgAlOAaIAAgCIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAgFIAAgRIAAgJIgBgCIgCAAIgDAAIgBgBIANgGIACAAIAAAKQAHgKAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgCIgDgBIgBAAQgDADgDAEIAAAUIABAGIADACIAEABIAAACgADbAVQgDgCgCgEIAAAHIgHAAIAAg+IAHAAIAAAXQADgEADgBQADgCAEAAQAJgBAFAHQAGAGgBAMQABAEgCAEQgCAFgCADQgCADgEACIgIACQgFgBgDgBgADZgNQgDAFAAAIQAAAGADAFQAEAEAGAAQAFAAADgEQAEgFAAgGQAAgIgEgEQgDgFgFgBQgGAAgEAFgAHNgDIAAgSIgOAAIAAgIIAOAAIAAgRIAHAAIABAAIAAABIAAABIAAADIAAAmgAGXgHIgCgDQAGgEAGgGQAFgHACgKIgPAAIAAgGIAnAAIAAAGIgPAAQAAAFACAEIAFAHIAGAGIAGADIAAABIgCABIgBACIgCACQgFgDgGgEQgEgFgEgGQgEAHgEAFIgKAIIgDgDgAFJgFIgBgCIgCgCIgBgBQAMgDAIgIQAIgGADgKIgcAAIAAgGIAlAAQAAAIgEAGQgDAGgFAFIgKAIIgMAGIgCgBgAF9gFIAAgqIAIABIAAAAIAAABIAAABIAAACIAAAlgAIegFIAAgqIAHABIABABIAAAAIAAABIgBADIAAAkgAHngJIgDgDQAJgGAFgIQAGgHABgLIAHAAIABABIAAACIgBACIABACIAAACIABACIADAGIAFAGIAEADIAFAEIgCACIgEAEIgJgIQgEgFgEgGIgEAHIgFAGIgEAEIgFAEIgDgDgAkjgiQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(-22.65,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AklAlQgEgDgBgHIAHAAQABAEACACQADABAEAAQAGAAADgDQACgDABgHIAAgFQgDAFgDABQgDACgEAAQgEAAgDgCQgDgBgDgDQgCgDgBgEIgBgJIABgIIAEgHQACgDAEgBQACgCAFAAQADAAADACQADABADAEIAAgGIAGAAIAAAlIAAAIIgDAGQgCAEgEABQgEACgFAAQgIAAgEgDgAkhgJQgDAEAAAHQAAAHADAEQADAFAFAAQAFAAADgFQADgEAAgHQAAgGgDgFQgDgEgFAAIAAAAQgFAAgDAEgAl4AoIgCgBIgBAAIAAgHIADABIABAAIACAAIACgCIACgDIABgGIgPgoIAIAAIAIAXIABACIAAACIABACIABADIABgDIABgCIABgCIAAgCIAIgXIAHAAIgOAnIgCAGIgCAEIgBACIgBACQgBACgCABIgFACIgCAAgAmnAoIAAg6IAHAAIAAAGQADgEACgBQAEgCADAAQAJAAAEAGQAFAGAAAJQAAALgFAGQgEAGgJAAQgDAAgDgCQgDgBgDgEIAAAWgAmMAOQAEgFAAgHQAAgGgEgEQgDgFgFAAQgGAAgDAFQgDAEAAAGQAAAHADAFQADAEAGAAQAFAAADgEgAFkAeQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBgAh7AcQAFgGACgJQADgJAAgIQAAgKgDgJQgCgJgFgHIAGAAIAEAHIAEAJIACAJIABAKIgBAIIgCAJIgEAJIgEAGgAiwAcIgFgHIgEgIIgCgKIgBgIIABgKIACgJIAEgIIAFgHIAFAAQgFAGgCAJQgDAJAAAKQAAAJADAJQACAJAFAGgAGpAaQgEgCgCgDIgEgHIgCgJQAAgFACgDQABgFADgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEACADADQADADABAFQABADAAAFQAAAEgBAEQgBAFgDADQgDADgEACQgEACgFAAQgFAAgEgCgAGtgIIgEADIgCAFIgBAFIABAFIACAFIAEAEQACABADAAQADAAADgBIADgEIADgFIAAgFIAAgFIgDgFIgDgDQgDgCgDAAQgDAAgCACgAGPAcIgDAAIgJgCIgHgFQgCgDgCgFIgBgIQAAgFACgEQABgEADgDQADgDAEgCQAEgCAFAAIAFABIAFABIABAAIAAABIgBAGIAAAAIgBABIgEgBIgFgBQgGAAgEAFQgDAEAAAGQAAAGADAEQADAEAGABQAGAAAEgBIABAAIABABIAAAFIAAABIgBABIgCAAIgDABIgDAAgAE5AWQgFgGAAgLIABgIQABgEACgDQACgEAEgCQAEgCAEAAQAFAAAEACQADACACADIADAHIABAIIAAACIAAABIAAABIgbAAQAAAFADAEQADADAFAAIAGgBIAGgCIABAAIAAAHIAAABIgBABIgGABIgGABQgKAAgFgGgAFDgJIgDACIgCAEIgBADIASAAIAAgDIgCgDIgDgDIgDgBIgEABgADoAaQgEgCgCgDIgEgHIgCgJQAAgFACgDQABgFADgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEACADADQADADABAFQABADAAAFQAAAEgBAEQgBAFgDADQgDADgEACQgEACgFAAQgFAAgEgCgADsgIIgEADIgCAFIgBAFIABAFIACAFIAEAEQACABADAAQADAAADgBIADgEIADgFIAAgFIAAgFIgDgFIgDgDQgDgCgDAAQgDAAgCACgACjAWQgFgGAAgLIABgIQABgEACgDQACgEAEgCQAEgCAEAAQAFAAAEACQADACACADIADAHIABAIIAAACIAAABIAAABIgbAAQAAAFADAEQADADAFAAIAGgBIAGgCIABAAIAAAHIAAABIgBABIgGABIgGABQgKAAgFgGgACtgJIgDACIgCAEIgBADIASAAIAAgDIgCgDIgDgDIgDgBIgEABgACPAcIgDAAIgJgCIgHgFQgCgDgCgFIgBgIQAAgFACgEQABgEADgDQADgDAEgCQAEgCAFAAIAFABIAFABIABAAIAAABIgBAGIAAAAIgBABIgEgBIgFgBQgGAAgEAFQgDAEAAAGQAAAGADAEQADAEAGABQAGAAAEgBIABAAIABABIAAAFIAAABIgBABIgCAAIgDABIgDAAgAAgAWQgFgGAAgLIABgIQABgEADgDQACgEAEgCQADgCAFAAQAFAAADACQAEACACADIADAHIABAIIAAACIAAABIgBABIgbAAQABAFADAEQADADAFAAIAGgBIAGgCIABAAIAAAHIgBABIAAABIgGABIgHABQgKAAgFgGgAAqgJIgDACIgCAEIgBADIATAAIgBgDIgBgDIgDgDIgEgBIgEABgAgGAcIgDAAIgJgCIgHgFQgCgDgCgFIgBgIQAAgFACgEQABgEADgDQADgDAEgCQAEgCAFAAIAFABIAEABIABAAIAAABIgBAGIAAAAIgBABIgDgBIgFgBQgGAAgEAFQgDAEAAAGQAAAGADAEQADAEAGABQAGAAADgBIABAAIABABIAAAFIAAABIgBABIgBAAIgDABIgDAAgAg3AcIgDgBIgDAAIgCgBIgBAAIAAgBIAAgFIAAgBIABAAIAGABIAFAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCIgDgDIgEgCIgFgDQgDgCgBgCQgCgCAAgDIABgFIADgFIAFgCIAFgBIAEAAIADABIADABIACAAIAAABIAAAAIgBAFIAAABIgBAAIgEgBIgCAAIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIACADIADACIAFACIADACIAEAFQACACAAADQAAAHgFAEQgFADgGAAIgDAAgAIFAbIgBgBIAAgbQAAgEgCgCQgCgDgDAAIgEABIgDADIgCAEIgBAEIAAAYIgBABIgHAAIAAgBIgBAAIAAgbQAAgJgHAAQgEAAgDADQgCADAAAEIAAAaIgBABIgHAAIgBgBIAAgfIAAgGIAAgFQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAHAAIABABIgBADIAFgDIAGgCQAEAAADACQAEACABAEQACgEAEgCQADgCAEAAQAHAAAEAFQAFAEAAAHIAAAcIgBAAIAAABgAEZAbIAAgBIgBAAIgOgqIAAAAIAIAAIABAAIAKAdIAKgdIAAAAIAJAAIAAAAIgPAqIAAAAIgBABgADTAbIgHAAIgBgBIAAg/IABAAIAHAAIABAAIAAA/IAAABIgBAAgABlAbIgBgBIAAgaQAAgFgCgCQgBgDgEAAQgGAAgCADQgDADAAAFIAAAZIgBABIgGAAIgBgBIAAAAIAAgfIAAgGIAAgFQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAGAAIABABIAAADIAFgDQACgCAEAAQAIAAAEAFQAEAEAAAJIAAAaIgBABgAAKAbIgBgBIAAgpIABgBIAAAAIAHAAIABAAIAAABIAAApIAAABgAjEAZIgCAAIgGgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAABIgBgDIgBgDIAAgaIgGAAIAAgGIAGAAIAAgNIAHAAIAAANIAIAAIAAAGIgIAAIAAAXIABAFQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIABAAIABAAIABAAIABAAIAAAGIgCABIgBAAgAnzAZQgFAAgFgDQgFgCgDgEQgDgEgCgFQgCgGAAgGQAAgHACgFQACgGADgEQAEgEAEgCQAFgDAGAAIAIACQAEABADADQADACACAEQACAEAAAEIgHAAQgCgGgDgDQgEgDgGAAQgEAAgEACQgDABgDADIgDAHIgBAKIABAJIADAHQADADADACQADABAEAAQAHAAAFgEQADgEABgIIAIAAQgBALgGAGQgHAHgKAAIAAAAgAiaAXQgDgBgDgDIgDgHQgBgEAAgFQAAgFABgEQABgEADgDQACgDAEgBQADgCAEAAQAHAAAFAEQAEAEABAIIgHAAQgBgFgCgCQgCgDgEAAQgGAAgDAFQgDAEgBAGQABAHADAFQADAEAFAAQAEAAADgDQADgCABgGIAHAAQgCAIgEAFQgFAFgHAAQgEAAgEgCgAnKAXIgGgEQgDgDgBgEIgBgKQAAgJAFgGQAFgGAJAAQAJAAAEAGQAGAGAAAJQAAALgGAGQgEAGgJAAQgFAAgDgCgAm5AOQACgEAAgIQAAgGgCgEQgEgFgFAAQgGAAgDAFQgEAEAAAGQAAAHAEAFQADAEAGAAQAFAAAEgEgAjhAXIAAgaQgBgFgBgCQgCgDgFAAQgDAAgDACQgCABgCADIAAACIAAACIgBADIAAADIAAAUIgHAAIAAg5IAHAAIAAAVQADgEADgBIAHgBQAEAAADABQADACABADIACAEIAAAGIAAAagAk6AXIAAgqIAGAAIAAAqgAlVAXIAAgpIAGAAIAAAIQADgFAEgCQADgCAFAAIAAAHIgBAAIgBAAIgFABIgEADIgBACIgBADIgBADIAAAGIAAARgAAKgbQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk6gaIAAgIIAGAAIAAAIg");
	this.shape_1.setTransform(-25.025,0.4875);

	this.text = new cjs.Text("Copyright(c)2005 by 민서아빠   ", "10px 'Times New Roman'", "#EBEBEB");
	this.text.lineHeight = 11;
	this.text.lineWidth = 134;
	this.text.alpha = 0.29803922;
	this.text.parent = this;
	this.text.setTransform(-60.9,-4.15,0.7451,0.7451);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AIRA1IwhAAIAAhpIQhAAg");
	this.shape_2.setTransform(-26.7125,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AoQA1IAAhpIQhAAIAABpg");
	this.shape_3.setTransform(-26.7125,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.text,p:{scaleX:0.7451,scaleY:0.7451,x:-60.9,y:-4.15,text:"Copyright(c)2005 by 민서아빠   ",lineWidth:134}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{scaleX:0.7836,scaleY:0.7836,x:-78.4,y:-4.1,text:"Copyright(c)2006 by 민서아빠  ",lineWidth:132}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-6.1,121,12.6);


// stage content:
(lib.유튜브플레이어자동재생3_1완성1_1_제작만 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var p;
		var t1 = 0; // 시작 시간(초)
		var t2 = 0; // 종료 시간(초)
		var chk_mute = false; // 소리 재생 여부
		var chk_autoplay = false; // 자동재생 여부
		
		p = location.search;
		
		(function() {
		    // 스타일
		    const style = document.createElement('style');
		    style.textContent = `
		        .youtube-container {
		            font-family: 'Arial', sans-serif;
		            max-width: 800px;
		            margin: 0 auto;
		            padding: 20px;
		            background-color: white;
		            border-radius: 8px;
		            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		        }
		        .youtube-title {
		            color: #333333;
		            text-align: center;
		            margin-bottom: 20px;
		            font-size: 24px;
		        }
		        .youtube-input-group {
		            display: flex;
		            margin-bottom: 20px;
		        }
		        .youtube-input {
		            flex: 1;
		            padding: 10px;
		            border: 1px solid #ddd;
		            border-radius: 4px 0 0 4px;
		            font-size: 16px;
		        }
		        .youtube-button {
		            padding: 10px 15px;
		            background-color: #ff0000;
		            color: white;
		            border: none;
		            border-radius: 0 4px 4px 0;
		            cursor: pointer;
		            font-size: 16px;
		        }
		        .youtube-button:hover {
		            background-color: #cc0000;
		        }
		        .youtube-video-container {
		            position: relative;
		            padding-bottom: 56.25%;
		            height: 0;
		            overflow: hidden;
		            margin-top: 20px;
		        }
		        .youtube-video-container iframe {
		            position: absolute;
		            top: 0;
		            left: 0;
		            width: 100%;
		            height: 100%;
		            border: none;
		        }
		        .youtube-error {
		            font-size: 14px;
		            color: #0000ff;
		            margin-top: 10px;
		            display: none;
		        }
		        .youtube-time-inputs {
		            display: flex;
		            gap: 10px;
		            margin: 10px 0;
		            align-items: center;
		            flex-wrap: wrap;
		        }
		        .youtube-time-input {
		            width: 80px;
		            padding: 8px;
		            border: 1px solid #ddd;
		            border-radius: 4px;
		        }
		        .youtube-time-label {
		            font-size: 14px;
		        }
		        .youtube-save-button {
		            padding: 8px 15px;
		            background-color: #4CAF50;
		            color: white;
		            border: none;
		            border-radius: 4px;
		            cursor: pointer;
		            font-size: 14px;
		            margin-left: 10px;
		        }
		        .youtube-save-button:hover {
		            background-color: #45a049;
		        }
		        .youtube-copy-button {
		            padding: 3px 10px;
		            background-color: #2196F3;
		            color: white;
		            border: none;
		            border-radius: 4px;
		            cursor: pointer;
		            font-size: 12px;
		            margin-left: 10px;
		        }
		        .youtube-copy-button:hover {
		            background-color: #0b7dda;
		        }
		        .youtube-preview-button {
		            padding: 3px 10px;
		            background-color: #9C27B0;
		            color: white;
		            border: none;
		            border-radius: 4px;
		            cursor: pointer;
		            font-size: 12px;
		            margin-left: 5px;
		        }
		        .youtube-preview-button:hover {
		            background-color: #7B1FA2;
		        }
		        .youtube-link-container {
		            display: flex;
		            align-items: center;
		            margin-top: 10px;
		        }
		    `;
		    document.head.appendChild(style);
		
		    // 컨테이너
		    const container = document.createElement('div');
		    container.className = 'youtube-container';
		    document.body.appendChild(container);
		
		    const title = document.createElement('h1');
		    title.className = 'youtube-title';
		    title.textContent = '유튜브 영상 플레이어';
		    container.appendChild(title);
		
		    // 입력 그룹
		    const inputGroup = document.createElement('div');
		    inputGroup.className = 'youtube-input-group';
		    container.appendChild(inputGroup);
		
		    const input = document.createElement('input');
		    input.type = 'text';
		    input.className = 'youtube-input';
		    input.placeholder = '유튜브 URL을 입력하세요';
		    inputGroup.appendChild(input);
		
		    const button = document.createElement('button');
		    button.className = 'youtube-button';
		    button.textContent = '불러오기';
		    inputGroup.appendChild(button);
		
		    // 시간 입력
		    const timeInputContainer = document.createElement('div');
		    timeInputContainer.className = 'youtube-time-inputs';
		    container.appendChild(timeInputContainer);
		
		    const startTimeLabel = document.createElement('span');
		    startTimeLabel.className = 'youtube-time-label';
		    startTimeLabel.textContent = '시작 시간:';
		    timeInputContainer.appendChild(startTimeLabel);
		
		    const startTimeInput = document.createElement('input');
		    startTimeInput.type = 'text';
		    startTimeInput.className = 'youtube-time-input';
		    startTimeInput.value = t1;
		    startTimeInput.placeholder = '1:20 or 80';
		    timeInputContainer.appendChild(startTimeInput);
		
		    const endTimeLabel = document.createElement('span');
		    endTimeLabel.className = 'youtube-time-label';
		    endTimeLabel.textContent = '종료 시간:';
		    timeInputContainer.appendChild(endTimeLabel);
		
		    const endTimeInput = document.createElement('input');
		    endTimeInput.type = 'text';
		    endTimeInput.className = 'youtube-time-input';
		    endTimeInput.value = t2;
		    endTimeInput.placeholder = '1:20 or 80';
		    timeInputContainer.appendChild(endTimeInput);
		
		    const saveButton = document.createElement('button');
		    saveButton.className = 'youtube-save-button';
		    saveButton.textContent = '보관하기1';
		    //timeInputContainer.appendChild(saveButton);
		
		    const saveButton1 = document.createElement('button');
		    saveButton1.className = 'youtube-save-button';
		    saveButton1.textContent = '보관하기';
		    timeInputContainer.appendChild(saveButton1);
		
		    // 링크/복사/미리보기
		    const errorContainer = document.createElement('div');
		    errorContainer.className = 'youtube-link-container';
		    container.appendChild(errorContainer);
		
		    const error = document.createElement('div');
		    error.className = 'youtube-error';
		    error.textContent = '올바른 유튜브 URL을 입력해주세요.';
		    error.style.flex = '1';
		    errorContainer.appendChild(error);
		
		    const copyButton = document.createElement('button');
		    copyButton.className = 'youtube-copy-button';
		    copyButton.textContent = '링크복사하기';
		    copyButton.style.display = 'none';
		    errorContainer.appendChild(copyButton);
		
		    const previewButton = document.createElement('button');
		    previewButton.className = 'youtube-preview-button';
		    previewButton.textContent = '미리보기';
		    previewButton.style.display = 'none';
		    errorContainer.appendChild(previewButton);
		
		    copyButton.addEventListener('click', function() {
		        const linkText = error.textContent.replace('짧은주소 : ', '').trim();
		        navigator.clipboard.writeText(linkText).then(() => {
		            const originalText = copyButton.textContent;
		            copyButton.textContent = '복사완료!';
		            setTimeout(() => copyButton.textContent = originalText, 2000);
		        });
		    });
		
		    previewButton.addEventListener('click', function() {
		        const linkText = error.textContent.replace('짧은주소 : ', '').trim();
		        if (linkText && linkText.startsWith('http')) {
		            window.open(linkText, '_blank');
		        }
		    });
		
		    // 비디오
		    const videoContainer = document.createElement('div');
		    videoContainer.className = 'youtube-video-container';
		    videoContainer.style.display = 'none';
		    container.appendChild(videoContainer);
		
		    const iframe = document.createElement('iframe');
		    iframe.allowFullscreen = true;
		    videoContainer.appendChild(iframe);
		
		    function parseTimeInput(timeStr) {
		        if (!timeStr || timeStr.trim() === '') return 0;
		        if (!isNaN(timeStr) && timeStr.indexOf(':') === -1) return parseInt(timeStr);
		        if (timeStr.indexOf(':') !== -1) {
		            const parts = timeStr.split(':');
		            if (parts.length === 2) {
		                const minutes = parseInt(parts[0]) || 0;
		                const seconds = parseInt(parts[1]) || 0;
		                return minutes * 60 + seconds;
		            }
		        }
		        return 0;
		    }
		
		    function extractVideoId(url) {
		        if (!url) return null;
		        if (url.startsWith('?')) url = url.substring(1);
		        let match = url.match(/youtu\.be\/([^?&]+)/);
		        if (match) return match[1];
		        match = url.match(/[?&]v=([^?&]+)/);
		        if (match) return match[1];
		        match = url.match(/youtube\.com\/embed\/([^?&]+)/);
		        if (match) return match[1];
		        match = url.match(/youtube\.com\/shorts\/([^?&]+)/);
		        if (match) return match[1];
		        return null;
		    }
		
		    function loadVideo(videoUrl, useAutoplay = null) {
		        videoUrl = videoUrl || input.value.trim();
		        t1 = parseTimeInput(startTimeInput.value);
		        t2 = parseTimeInput(endTimeInput.value);
		        const videoId = extractVideoId(videoUrl);
		
		        if (videoId) {
		            let embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
					
		            const params = [];
		            const shouldAutoplay = useAutoplay !== null ? useAutoplay : chk_autoplay;
		           // if (shouldAutoplay) params.push('autoplay=1');
		            if (chk_mute) params.push('mute=1');
		            if (t1 > 0) params.push(`start=${t1}`);
		            if (t2 > 0 && t2 > t1) params.push(`end=${t2}`);
		            params.push('rel=0');
		            if (params.length > 0) embedUrl += '?' + params.join('&');
		
		            iframe.src = embedUrl;
		            videoContainer.style.display = 'block';
		
		            const shortUrl = `https://sciencej1.cafe24.com/html5/you/youp.html?https://youtu.be/${videoId}&rel=0^0^0`;
		            error.style.display = 'block';
		            error.textContent = shortUrl;
		
		            copyButton.style.display = 'inline-block';
		            previewButton.style.display = 'inline-block';
		
		            input.value = videoUrl.replace(/^\?/, '');
		        } else {
		            videoContainer.style.display = 'none';
		            error.style.display = 'block';
		            error.textContent = '올바른 유튜브 URL을 입력해주세요.';
		            copyButton.style.display = 'none';
		            previewButton.style.display = 'none';
		        }
		    }
		
		    function generateSaveUrl() {
		        const currentUrl = input.value.trim();
		        if (!currentUrl) {
		            alert('유튜브 URL을 먼저 입력해주세요.');
		            return null;
		        }
		        const videoId = extractVideoId(currentUrl);
		        if (!videoId) {
		            alert('올바른 유튜브 URL을 입력해주세요.');
		            return null;
		        }
		        const startTime = parseTimeInput(startTimeInput.value);
		        const endTime = parseTimeInput(endTimeInput.value);
		        const youtubeUrl1 = `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}&rel=0`;
		        error.style.display = 'block';
		        error.textContent = youtubeUrl1;
		        copyButton.style.display = 'inline-block';
		        previewButton.style.display = 'inline-block';
		        return youtubeUrl1;
		    }
		
		    function generateSaveUrl1() {
		        const currentUrl = input.value.trim();
		        if (!currentUrl) {
		            alert('유튜브 URL을 먼저 입력해주세요.');
		            return null;
		        }
		        const videoId = extractVideoId(currentUrl);
		        if (!videoId) {
		            alert('올바른 유튜브 URL을 입력해주세요.');
		            return null;
		        }
		        const startTime = parseTimeInput(startTimeInput.value);
		        const endTime = parseTimeInput(endTimeInput.value);
		        const youtubeUrl1 = `https://sciencej1.cafe24.com/html5/you/youp.html?https://youtu.be/${videoId}&rel=0^${startTime}^${endTime}`;
		        error.style.display = 'block';
		        error.textContent = youtubeUrl1;
		        copyButton.style.display = 'inline-block';
		        previewButton.style.display = 'inline-block';
		        return youtubeUrl1;
		    }
		
		    button.addEventListener('click', function() {
		        startTimeInput.value = 0;
		        endTimeInput.value = 0;
		        t1 = 0;
		        t2 = 0;
		        loadVideo(null);
		    });
		
		    input.addEventListener('keypress', function(event) {
		        if (event.key === 'Enter') loadVideo(null);
		    });
		
		    startTimeInput.addEventListener('change', function() {
		        if (iframe.src) loadVideo(input.value.trim());
		    });
		    endTimeInput.addEventListener('change', function() {
		        if (iframe.src) loadVideo(input.value.trim());
		    });
		
		    saveButton.addEventListener('click', function() {
		        generateSaveUrl1();
		    });
		    saveButton1.addEventListener('click', function() {
		        generateSaveUrl1();
		    });
		
		    function initializePlayer() {
		        try {
		            if (p && p !== "?") {
		                if (p.startsWith('?')) p = p.substring(1);
		                const params = p.split(/\^|%5E/);
		                let videoUrl = params[0];
		                if (params.length > 1) {
		                    const startTime = parseInt(params[1]);
		                    if (!isNaN(startTime)) {
		                        t1 = startTime;
		                        startTimeInput.value = t1;
		                    }
		                }
		                if (params.length > 2) {
		                    const endTime = parseInt(params[2]);
		                    if (!isNaN(endTime)) {
		                        t2 = endTime;
		                        endTimeInput.value = t2;
		                    }
		                }
		                inputGroup.style.display = 'none';
		                timeInputContainer.style.display = 'none';
		                if (videoUrl) loadVideo(videoUrl);
		            }
		            error.style.display = 'none';
		            copyButton.style.display = 'none';
		            previewButton.style.display = 'none';
		        } catch (error) {
		            console.error("동영상 초기화 중 오류 발생:", error);
		        }
		    }
		
		    setTimeout(initializePlayer, 10);
		})();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어_1
	this.instance = new lib.카피라이트();
	this.instance.setTransform(764.15,9.85,1.0479,1.1105,0,0.1039,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.카피라이트(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1132.9,13.6,-326.4000000000001,2.5999999999999996);
// library properties:
lib.properties = {
	id: '6EA899EF6325C34AB2EFEE2444EC4EAB',
	width: 900,
	height: 20,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6EA899EF6325C34AB2EFEE2444EC4EAB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;