let videosHTML = '';

videos.forEach((video) => {
  videosHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <a class="thumbnail-a" href="videoplayer.html">
          <img class="thumbnail" src="${video.thumbnail}">
        </a>
        <div class="video-time">${video.duration}</div>
      </div>
      <div class="video-info-grid">
        <div class="video-info">
          <a class="video-title-a" href="videoplayer.html">
            <p class="video-title">${video.title}</p>
          </a>
          <p class="video-stats">${video.videoStatus}</p>
        </div>
      </div>
    </div>
  `;
});
document.querySelector('.js-video-grid').innerHTML = videosHTML;