const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2();

const getChannelData = async (req, res) => {
  try {
    const tokens = req.body.tokens;
    const matrics = req.body.matrics;
    oAuth2Client.setCredentials(tokens);
    const youtubeAnalytics = google.youtubeAnalytics({
      version: "v2",
      auth: oAuth2Client,
    });
    const reports = await youtubeAnalytics.reports.query({
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: matrics,
      startDate: "2011-08-01",
      dimensions: "month",
    });

    res.send(reports.data);
  } catch (error) {
    console.log(error);
  }
};

const topVideo = async (req, res) => {
  try {
    const tokens = req.body.tokens;
    oAuth2Client.setCredentials(tokens);

    const populerVideos = google.youtube({
      version: "v3",
      auth: oAuth2Client,
    });

    const channelDetails = await populerVideos.channels.list({
      part: "snippet,statistics,contentDetails",
      maxResults: 50,
      mine: true,
    });
    res.send("hello");
  } catch (error) {
    console.log(error);
  }
};

const latestVideos = async (req, res) => {
  try {
    const tokens = req.body.tokens;
    oAuth2Client.setCredentials(tokens);

    const populerVideos = google.youtube({
      version: "v3",
      auth: oAuth2Client,
    });

    const channelDetails = await populerVideos.channels.list({
      part: "snippet,statistics,contentDetails",
      maxResults: 50,
      mine: true,
    });

    const playList = await populerVideos.playlistItems.list({
      part: "snippet",
      playlistId:
        channelDetails.data.items[0].contentDetails.relatedPlaylists.uploads,
      maxResults: 50,
    });

    const finalData = playList.data.items.splice(0, 3).map((video) => {
      return {
        videoId: video.snippet.resourceId.videoId,
        channelTitle: video.snippet.channelTitle,
        videoTitle: video.snippet.title,
      };
    });

    res.send(finalData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getChannelData,
  topVideo,
  latestVideos,
};
