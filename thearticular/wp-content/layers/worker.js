self.onmessage = function(e) {
    const { data, targetSamples } = e.data;
    const sampleSize = Math.floor(data.length / targetSamples);
    const downsampledData = [];
    for (let i = 0; i < targetSamples; i++) {
      let blockStart = i * sampleSize;
      let blockEnd = blockStart + sampleSize;
      let sum = 0;
      for (let j = blockStart; j < blockEnd; j++) {
        sum += Math.abs(data[j]);
      }
      downsampledData.push(sum / sampleSize);
    }
    self.postMessage({ downsampledData });
  };  