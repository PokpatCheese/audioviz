// audioProcessor.js

class AudioProcessor {
    constructor() {
        this.audioContext = new (window.AudioContext || webkitAudioContext.AudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.audioDataCallback = null;
    }

    onAudioData(callback) {
        this.audioDataCallback = callback;
    }

    start() {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then((stream) => {
                // オーディオ入力のストリームを作成
                this.source = this.audioContext.createMediaStreamSource(stream);

                this.source.connect(this.analyser);

                this.update();
            })
            .catch((err) => {
                console.log('The following error occurred: ' + err);
            });
    }

    update() {
        requestAnimationFrame(() => this.update());

        this.analyser.getByteTimeDomainData(this.dataArray);

        if (this.audioDataCallback) {
            this.audioDataCallback(this.dataArray);
        }
    }
}

export { AudioProcessor };
