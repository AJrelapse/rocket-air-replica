const VideoSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden z-0">
            <video 
                src="https://cdn.prod.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
            ></video>
        </div>
    );
}

export default VideoSection;
