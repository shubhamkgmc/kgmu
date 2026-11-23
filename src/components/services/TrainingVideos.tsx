import { trainingVideoLinks, type TrainingVideoLink } from "../../data/trainingVideos";

const videoFiles = import.meta.glob("../../assets/training-videos/*.{mp4,webm,ogg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const videos = Object.entries(videoFiles).map(([path, src]) => {
  const filename = path.split("/").pop() ?? path;
  const title = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
  return { src, title };
});

const youtubeVideoGroups = trainingVideoLinks.reduce((groups, video) => {
  const moduleVideos = groups.get(video.module) ?? [];
  moduleVideos.push(video);
  groups.set(video.module, moduleVideos);
  return groups;
}, new Map<string, TrainingVideoLink[]>());

function getYouTubeVideoId(value: string): string | null {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    const supportedHosts = [
      "youtu.be",
      "www.youtu.be",
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtube-nocookie.com",
      "www.youtube-nocookie.com",
    ];

    if (url.protocol !== "https:" || !supportedHosts.includes(hostname)) return null;

    const path = url.pathname.split("/").filter(Boolean);
    const videoId =
      hostname.endsWith("youtu.be")
        ? path[0]
        : path[0] === "watch"
          ? url.searchParams.get("v")
          : ["embed", "shorts", "live"].includes(path[0]) ? path[1] : null;

    return videoId && /^[\w-]{11}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

export function TrainingVideos() {
  const hasVideos = videos.length > 0 || trainingVideoLinks.length > 0;

  return (
    <>
      <h3>Training videos</h3>
      <p className="training-videos-intro">
        Browse the training library by module, then choose a topic to watch.
      </p>
      {Array.from(youtubeVideoGroups, ([module, moduleVideos], index) => (
        <details
          className="training-module-accordion"
          key={module}
          open={index === 0}
        >
          <summary className="training-video-module-summary">
            <span className="training-video-module-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="training-video-module-name">{module}</span>
            <span className="training-video-count">
              {moduleVideos.length} {moduleVideos.length === 1 ? "topic" : "topics"}
            </span>
          </summary>
          <div className="training-videos" role="group" aria-label={`${module} training topics`}>
            {moduleVideos.map(({ title, youtubeUrl }, topicIndex) => {
              const videoId = getYouTubeVideoId(youtubeUrl);

              return (
                <article className="training-video" key={`${title}-${youtubeUrl}`}>
                  <div className="training-video-topic">
                    <span className="training-video-topic-label">
                      Topic {String(topicIndex + 1).padStart(2, "0")}
                    </span>
                    <h5>{title}</h5>
                  </div>
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <p className="training-video-error">
                      This entry has an invalid YouTube URL. Check the link in
                      src/data/trainingVideos.ts.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </details>
      ))}
      {videos.length > 0 && (
        <section className="training-video-section" aria-labelledby="uploaded-training-videos">
          <h4 className="training-video-module" id="uploaded-training-videos">
            Uploaded video files
          </h4>
          <div className="training-videos">
            {videos.map(({ src, title }, index) => (
              <article className="training-video" key={src}>
                <div className="training-video-topic">
                  <span className="training-video-topic-label">
                    Topic {String(index + 1).padStart(2, "0")}
                  </span>
                  <h5>{title}</h5>
                </div>
                <video controls preload="metadata" src={src}>
                  Your browser does not support video playback.
                </video>
              </article>
            ))}
          </div>
        </section>
      )}
      {!hasVideos && (
        <p className="training-videos-empty">
          Add YouTube links in src/data/trainingVideos.ts or MP4, WebM or Ogg files to the
          training-videos folder.
        </p>
      )}
    </>
  );
}
