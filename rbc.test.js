import { test } from 'node:test';
import assert from 'node:assert';
import rbc from './rbc.js';

test('rbc', async () => {
  const results = await rbc.fetchContentMetadata('https://www.rbc.ru/rbcfreenews/689614559a79475189a67acb');
  assert.strictEqual(results.length, 1);
  assert.ok(results[0]?.source?.url);
  assert.strictEqual(
    results[0].source.url,
    'https://edge-upvideo.rbc.ru/archive/2025/08/08/____83_mp4/telecast-v2.m3u8'
  );
});
