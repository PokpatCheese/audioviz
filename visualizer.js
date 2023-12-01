// visualizer.js

import { VisualLayer } from "./visualLayer.js";

class Visualizer {

    layers = [];

    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');
    }

    draw(audioData) {
        // キャンバスをクリア
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // レイヤーを列挙
        this.layers.forEach(function (layer) {
            // 波形をキャンバスへ描画する
            layer.draw(audioData);
        });
    }

    addLayer() {
        // レイヤーを新規作成して追加
        var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var color = myRandomColor;
        var offset_x = 0;
        var offset_y = 0;
        this.layers.push(new VisualLayer(this.canvas, color, offset_x, offset_y));
    }
}

export { Visualizer };
