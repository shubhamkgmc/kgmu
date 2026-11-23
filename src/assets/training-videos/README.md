# NextGen training videos

Add YouTube training videos to `src/data/trainingVideos.ts`. The training library groups entries into expandable modules, with each video title shown as a topic. Add entries with the same module name to group related topics together:

```ts
export const trainingVideoLinks: TrainingVideoLink[] = [
  { module: "OPD", title: "Patient registration", youtubeUrl: "https://youtu.be/VIDEO_ID" },
  { module: "Clinic", title: "Clinic workflow", youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID" },
];
```

Use the full YouTube link for a video (watch, short, embed, or `youtu.be` links are supported). The site embeds the video using YouTube's privacy-enhanced domain. The first module is expanded by default; other modules can be opened from their headers.

Local video files are also supported: add `.mp4`, `.webm`, or `.ogg` files to this folder. They are discovered automatically and shown in a separate “Uploaded video files” section after the site is rebuilt or the dev server reloads.

The file name is used as the video title. Use hyphens or underscores to separate words, for example `patient-registration.mp4`.
