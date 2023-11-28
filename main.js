// main.js

import { AudioProcessor } from './AudioProcessor.js';
import { Visualizer } from './Visualizer.js';


// オーディオプロセッサーとビジュアライザーのインスタンスを作成
const audioProcessor = new AudioProcessor();
const visualizer = new Visualizer(document.getElementById('visualizer'));

// ユーザーがオーディオを再生したときに、オーディオデータをビジュアライザーに送信
audioProcessor.onAudioData((audioData) => {
    visualizer.draw(audioData);
});

// ユーザーがページを訪れたときに、オーディオの再生を開始
window.addEventListener('load', () => {
    audioProcessor.start();
});
