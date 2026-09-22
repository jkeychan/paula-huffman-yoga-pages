document.querySelectorAll('.video-embed[data-yt-id]').forEach(function (el) {
  var button = el.querySelector('.video-play');
  button.addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + el.dataset.ytId + '?autoplay=1';
    iframe.title = el.dataset.ytTitle;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    el.replaceChildren(iframe);
  }, { once: true });
});
