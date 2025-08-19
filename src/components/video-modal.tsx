import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  src: string; // Path to your video file (e.g. "/videos/sample.mp4")
};

export default function VideoModal({ isOpen, onClose, src }: PropsType) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-4 translate-x-full text-5xl leading-none text-white"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>

        {/* Custom Video */}
        <video
          width="100%"
          height="500"
          src={src}
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-[500px] object-contain"
        />
      </div>
    </div>,
    document.body
  );
}
