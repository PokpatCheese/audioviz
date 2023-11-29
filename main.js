// main.js

import { AudioProcessor } from './audioProcessor.js';
import { Visualizer } from './visualizer.js';

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

// 再生ボタンと一時停止ボタンの要素を取得
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', function() {
    // 音声コンテキストを再開
    audioProcessor.audioContext.resume();
});
