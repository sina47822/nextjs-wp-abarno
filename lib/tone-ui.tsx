// /lib/tone-ui.tsx
"use client";
import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
import { Tone, toneHeader, toneWrapper } from "./tone";

export function ToneBlock({
  tone,
  title,
  children,
  className,
  titleClassName,
}: PropsWithChildren<{
  tone: Tone;
  title?: ReactNode;
  className?: string;
  titleClassName?: string;
}>) {
  return (
    <div className={toneWrapper(tone, className)}>
      {title ? <div className={clsx(toneHeader(tone), "mb-4", titleClassName)}>{title}</div> : null}
      {children}
    </div>
  );
}
