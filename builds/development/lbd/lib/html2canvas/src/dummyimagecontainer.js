function DummyImageContainer(e){if(this.src=e,log("DummyImageContainer for",e),!this.promise||!this.image){log("Initiating DummyImageContainer"),DummyImageContainer.prototype.image=new Image;var m=this.image;DummyImageContainer.prototype.promise=new Promise(function(e,o){m.onload=e,m.onerror=o,m.src=smallImage(),!0===m.complete&&e(m)})}}