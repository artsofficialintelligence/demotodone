"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

/* ─── Types ────────────────────────────────────────────────────── */
interface EmbedController {
  pause(): void;
  addListener(
    event: "playback_update",
    cb: (e: { data: { is_paused: boolean } }) => void
  ): void;
  destroy(): void;
}

interface IFrameAPI {
  createController(
    el: HTMLElement,
    opts: { uri: string; width: string | number; height: number },
    cb: (ctrl: EmbedController) => void
  ): void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameAPI) => void;
    _SpotifyIFrameAPI?: IFrameAPI;
  }
}

/* ─── Helpers ──────────────────────────────────────────────────── */
function toUri(embedUrl: string): string {
  const m = embedUrl.match(/embed\/(track|album|playlist|episode)\/([A-Za-z0-9]+)/);
  return m ? `spotify:${m[1]}:${m[2]}` : embedUrl;
}

/* ─── Component ────────────────────────────────────────────────── */
type Props = { tracks: string[]; maxTracks?: number };

export default function SpotifyGrid({ tracks, maxTracks }: Props) {
  const visible = maxTracks ? tracks.slice(0, maxTracks) : tracks;
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controllers = useRef<(EmbedController | null)[]>([]);

  useEffect(() => {
    const uris = visible.map(toUri);

    function init(api: IFrameAPI) {
      uris.forEach((uri, i) => {
        const el = containerRefs.current[i];
        if (!el) return;
        api.createController(el, { uri, width: "100%", height: 152 }, (ctrl) => {
          controllers.current[i] = ctrl;
          ctrl.addListener("playback_update", (e) => {
            if (!e.data.is_paused) {
              // This track is playing — pause all others
              controllers.current.forEach((c, j) => {
                if (j !== i && c) {
                  try { c.pause(); } catch (_) { /* ignore */ }
                }
              });
            }
          });
        });
      });
    }

    // API already loaded from a previous mount
    if (window._SpotifyIFrameAPI) {
      init(window._SpotifyIFrameAPI);
      return;
    }

    // Chain callbacks in case multiple instances mount simultaneously
    const prev = window.onSpotifyIframeApiReady;
    window.onSpotifyIframeApiReady = (api) => {
      window._SpotifyIFrameAPI = api;
      init(api);
      prev?.(api);
    };

    if (!document.getElementById("spotify-iframe-api")) {
      const s = document.createElement("script");
      s.id = "spotify-iframe-api";
      s.src = "https://open.spotify.com/embed/iframe-api/v1";
      s.async = true;
      document.body.appendChild(s);
    }

    return () => {
      controllers.current.forEach((c) => {
        try { c?.destroy(); } catch (_) { /* ignore */ }
      });
      controllers.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((url, i) => (
        <Reveal key={url} delay={(i % 6) * 60}>
          <div
            ref={(el) => { containerRefs.current[i] = el; }}
            style={{ borderRadius: "12px", overflow: "hidden", minHeight: "152px" }}
          />
        </Reveal>
      ))}
    </div>
  );
}
