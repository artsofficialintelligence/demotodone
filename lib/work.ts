/**
 * Portfolio / work samples.
 * These show up in the "My Work" section on the home page and about page.
 *
 * To add/remove a Spotify track:
 *   1. Open the track on Spotify → Share → Embed track
 *   2. Copy the src URL from the iframe (looks like
 *      https://open.spotify.com/embed/track/XXXXXXXXXXXXXXXXXX)
 *   3. Add/remove it from the spotifyTracks array below.
 */

export const spotifyTracks: string[] = [
  "https://open.spotify.com/embed/track/2HYh9mdVkQ0GHQK2WnkNMd?utm_source=generator", // Got Caught in the Moment
  "https://open.spotify.com/embed/track/5ZjY1xUfxDGw26Jiptripw?utm_source=generator", // Lying In The Grass
  "https://open.spotify.com/embed/track/2vBnnUbWCfEOKbMrEonwoG?utm_source=generator", // Not So Far Away
  "https://open.spotify.com/embed/track/1EBE1rPIxZinTOt30N6nhK?utm_source=generator", // 93 Million Miles
  "https://open.spotify.com/embed/track/0LMgXiDbT054ecaInNcwoe?utm_source=generator", // HOLD ME UP
  "https://open.spotify.com/embed/track/3yMmCjsHeX5SHKC32WI3jL?utm_source=generator", // Small Town Superstar
  "https://open.spotify.com/embed/track/16BLeM4WqSEyvVoC7nonTU?utm_source=generator", // I Can Feel It Coming
  "https://open.spotify.com/embed/track/7zgnDLmfW97yYsbIpuy1ib?utm_source=generator", // Stranger, Stranger
  "https://open.spotify.com/embed/track/2dUHS5MgPabQsVghgstohE?utm_source=generator", // Hole in My Heart
  "https://open.spotify.com/embed/track/0GKytLutXhYYOcsyqF26cG?utm_source=generator",
  "https://open.spotify.com/embed/track/2ijIiwRrn7L9a3zns7w0tJ?utm_source=generator",
  "https://open.spotify.com/embed/track/0BXBC3WsEarU7JlSAkdZ74?utm_source=generator",
  "https://open.spotify.com/embed/track/4MhwJY4kJOWqVhbabsYHT0?utm_source=generator",
  "https://open.spotify.com/embed/track/2UsMxHTBbFrWwQaoXME3jC?utm_source=generator",
  "https://open.spotify.com/embed/track/5mx0Rdsqyk9lyCxmUAwq8N?utm_source=generator",
];

/** SoundCloud playlist embed — shown alongside the Spotify tracks. */
export const soundcloudPlaylist = {
  embedUrl:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2252154227%3Fsecret_token%3Ds-e6LQKWNNja4&color=%238511a8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  title: "My Music",
  playlistUrl:
    "https://soundcloud.com/evan-g01/sets/my-music/s-e6LQKWNNja4",
  profileUrl: "https://soundcloud.com/evan-g01",
  profileName: "Evan Gach",
};
