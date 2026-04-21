import { useState } from 'react';

export default function ImagePlaceholder({ label = '截图占位', ratio = '16/9' }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="rounded-lg bg-gray-200 grid place-items-center text-gray-500 cursor-zoom-in"
        style={{ aspectRatio: ratio }}
        onClick={() => setOpen(true)}
      >
        {label}
      </div>
      {open ? (
        <div
          className="fixed inset-0 bg-black/60 grid place-items-center z-50"
          onClick={() => setOpen(false)}
        >
          <div className="w-[90vw] max-w-4xl rounded-xl bg-gray-200 h-[60vh] grid place-items-center text-gray-600">
            {label}
          </div>
        </div>
      ) : null}
    </>
  );
}
