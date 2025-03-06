const VideoSection = () => {
    return (
        <div className="relative w-full min-h-[500px] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden z-0">
            <video 
                src="https://cdn.prod.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            ></video>

            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
    );
};

export default VideoSection;
