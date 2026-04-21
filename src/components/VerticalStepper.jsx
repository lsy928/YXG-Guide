import ImagePlaceholder from './ImagePlaceholder.jsx';

export default function VerticalStepper({ steps }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-softgray" />
      <div className="space-y-8">
        {steps.map((s, idx) => (
          <div key={idx} className="relative pl-12">
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yuzu text-text grid place-items-center font-semibold">
              {idx + 1}
            </div>
            <div className="font-medium">{s.title}</div>
            <div className="text-gray-600 text-sm mt-1">{s.desc}</div>
            {s.note ? (
              <div className="text-gray-400 text-sm mt-1 bg-gray-50 p-2 rounded">
                注：{s.note}
              </div>
            ) : null}
            {Array.isArray(s.imgSrc) ? (
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                {s.imgSrc.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${s.title}-${i}`}
                    className="rounded-lg border border-gray-200 w-full max-w-md object-cover cursor-zoom-in"
                    onClick={() => window.open(src, '_blank')}
                  />
                ))}
              </div>
            ) : s.imgSrc ? (
              <div className="mt-3">
                <img
                  src={s.imgSrc}
                  alt={s.title}
                  className="rounded-lg border border-gray-200 w-full max-w-md object-cover cursor-zoom-in"
                  onClick={() => window.open(s.imgSrc, '_blank')}
                />
              </div>
            ) : s.imgDesc ? (
              <div className="mt-3">
                <ImagePlaceholder label={s.imgDesc} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
