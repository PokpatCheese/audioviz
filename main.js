// main.js

import { AudioProcessor } from './audioProcessor.js';
import { Visualizer } from './visualizer.js';

// オーディオプロセッサーとビジュアライザーのインスタンスを作成
const audioProcessor = new AudioProcessor();
const visualizer = new Visualizer(document.getElementById('visualizer'));

// ユーザーがページを訪れたときに、オーディオの再生を開始
window.addEventListener('load', () => {
    audioProcessor.start();
});

// ユーザーがオーディオを再生したときに、オーディオデータをビジュアライザーに送信
audioProcessor.onAudioData((audioData) => {
    visualizer.draw(audioData);
});

// 再生ボタンの要素を取得
const playButton = document.getElementById('play');
playButton.addEventListener('click', function() {
    // 音声コンテキストを再開
    audioProcessor.audioContext.resume();
});
