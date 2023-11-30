// visualizer.js

import { VisualLayer } from "./visualLayer.js";

class Visualizer {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');

        // 波形を描画するレイヤーを作成する
        this.layers = [
            new VisualLayer(this.canvas,'green',0,0),
            new VisualLayer(this.canvas,'rgb(0, 255, 255)',0,20),
            new VisualLayer(this.canvas,'rgb(255, 0, 255)',0,30),
            new VisualLayer(this.canvas,'rgb(255, 255, 0)',0,40),
        ];
    }

    draw(audioData) {
        // キャンバスをクリア
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // レイヤーを列挙
        this.layers.forEach(function(layer){
            // 波形をキャンバスへ描画する
            layer.draw(audioData);
        });
    }
}

export { Visualizer };
