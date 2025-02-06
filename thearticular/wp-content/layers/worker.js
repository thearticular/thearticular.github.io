self.onmessage = function (e)
{
  const { data, targetSamples } = e.data;
  const sampleSize = Math.floor(data.length / targetSamples);
  const downsampledData = new Float32Array(targetSamples);
  for (let i = 0; i < targetSamples; i++)
  {
    let blockStart = i * sampleSize;
    let sum = 0;
    for (let j = 0; j < sampleSize; j++)
    {
      sum += Math.abs(data[blockStart + j]);
    }
    downsampledData[i] = sum / sampleSize;
  }
  self.postMessage({ downsampledData });
};