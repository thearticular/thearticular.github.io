self.onmessage = function (e)
{
  const { data, targetSamples } = e.data;
  const sampleSize = Math.floor(data.length / targetSamples);
  const downsampledData = new Float32Array(targetSamples);

  for (let i = 0; i < targetSamples; i++)
  {
    downsampledData[i] = Math.abs(data[i * sampleSize]);
  }

  self.postMessage({ downsampledData });
};