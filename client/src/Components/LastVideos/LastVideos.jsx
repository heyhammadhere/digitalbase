import CardHeader from "../CardHeader";
import IframeRenderer from "../YoutubeIframe/IframeRenderer";

const LastVideos = ({ loading, ...rest }) => {
  return (
    <div className="youtube-content-card-4" {...rest}>
      <div>
        <CardHeader title="Last 3 Videos With Views" />
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <IframeRenderer videos={[]} />
        </div>
      )}
    </div>
  );
};

export default LastVideos;
