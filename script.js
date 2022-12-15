window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('spotify');
  let options = {
    uri: 'spotify:show:4jWPoKZOuCc6CNndIHpRAf'
  };
  let callback = (EmbedController) => {
    EmbedController.addListener('playback_update', e => {
      console.log(e.data);
    });
  };
  IFrameAPI.createController(element, options, callback);
};