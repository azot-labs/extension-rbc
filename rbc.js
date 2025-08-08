'use strict';

const { defineExtension } = require('azot');

module.exports = defineExtension({
  fetchContentMetadata: async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    const uri = text.split('.m3u8"').at(0)?.split('"').at(-1) + '.m3u8';
    const contentUrl = uri.startsWith('//') ? `https:${uri}` : uri;
    return [{ source: { url: contentUrl } }];
  },
});
