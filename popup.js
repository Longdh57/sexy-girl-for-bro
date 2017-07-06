function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderImage(imageData) {
  document.getElementById('image-wrap').href = imageData.url;
  document.getElementById('image').src = imageData.fixed_height_small_url;
}

async function getBoobsUrl() {
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=1c12146eb271408a91b4eb62fa228d90&tag=sexy+girl';
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
  renderStatus('Chờ chút nha ...');
  var imageData = await getBoobsUrl();
  renderStatus('');
  renderImage(imageData);
});
