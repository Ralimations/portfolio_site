"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

export function ProjectThumbnail({ src, title }: { src: string; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const [failed, setFailed] = useState(false);

  if (failed) return <p className="thumbnail-unavailable">Screenshot unavailable</p>;

  return <>
    <button className="project-thumbnail" type="button" onClick={() => dialog.current?.showModal()} aria-label={`View screenshot of ${title}`} aria-haspopup="dialog">
      <Image src={src} alt={`${title} website screenshot`} width={1440} height={900} sizes="(max-width: 760px) 100vw, 50vw" onError={() => setFailed(true)} />
      <span>View screenshot <span aria-hidden="true">↗</span></span>
    </button>
    <dialog ref={dialog} className="screenshot-dialog" aria-labelledby={headingId} onClick={event => {
      if (event.target === event.currentTarget) dialog.current?.close();
    }}>
      <div className="screenshot-panel">
        <div className="screenshot-toolbar"><h2 id={headingId}>{title}</h2><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close screenshot">Close ×</button></div>
        <Image src={src} alt={`Full screenshot of ${title}`} width={1440} height={900} sizes="95vw" />
      </div>
    </dialog>
  </>;
}
