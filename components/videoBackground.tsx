interface VideoBackgroundProps {
  children: React.ReactNode;
}

export default function VideoBackground(props: VideoBackgroundProps) {
  return (
    <div className="flex justify-center items-center min-h-min-content bg-gray-700 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="video-background"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {props.children}
      </div>
    </div>
  );
}
