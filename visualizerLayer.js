// visualizerLayer.js

class VisualizerLayer {
    constructor(canvas, strokeStyle, offset_x, offset_y) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');

        this.strokeStyle = strokeStyle;
        this.offset_x = offset_x;
        this.offset_y = offset_y;
    }

    draw(audioData) {
        // 波形を描画
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = this.strokeStyle;

        const sliceWidth = this.canvas.width / audioData.length;
        let x = 0;

        for (let i = 0; i < audioData.length; i++) {
            const v = audioData[i] / 128.0;
            const y = v * this.canvas.height / 2;

            if (i === 0) {
                this.canvasContext.moveTo(x, y+this.offset_y);
            } else {
                this.canvasContext.lineTo(x, y+this.offset_y);
            }

            x += sliceWidth;
        }

        this.canvasContext.lineTo(this.canvas.width, this.canvas.height / 2);
        this.canvasContext.stroke();
    }
}

export { VisualizerLayer };
