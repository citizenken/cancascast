# Canvascast
A simple Chromecast experiement. I implemented a [basic canvas drawing app](http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/) in the "sender" file. A user draws on this canvas. Every time the canvas redraws, the canvas context is sent, via Chromecast websockets, to the "reciever," which applies that context to its canvas.

It worked pretty well, but there is noticable lag between the two canvases. As this is an experiment, much of the websocket interaction code comes from example/other projects. This could be refactored and improved, but probably will not be.
