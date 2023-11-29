// visualizer.js

class Visualizer {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');
    }

    draw(audioData) {
        // キャンバスをクリア
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 波形を描画
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = 'rgb(0, 255, 0)';

        const sliceWidth = this.canvas.width / audioData.length;
        let x = 0;

        for (let i = 0; i < audioData.length; i++) {
            const v = audioData[i] / 128.0;
            const y = v * this.canvas.height / 2;

            if (i === 0) {
                this.canvasContext.moveTo(x, y);
            } else {
                this.canvasContext.lineTo(x, y);
            }

            x += sliceWidth;
        }

        this.canvasContext.lineTo(this.canvas.width, this.canvas.height / 2);
        this.canvasContext.stroke();
    }
}

export { Visualizer };
