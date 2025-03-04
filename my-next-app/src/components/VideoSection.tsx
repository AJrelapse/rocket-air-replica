const VideoSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden z-0">
            <video 
                src="https://assets.website-files.com/6205ecdcec584c56193d6121/620e78bc9b48eb5690366bf7_Showreel-RocketAir-transcode.mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
            ></video>
        </div>
    );
}

export default VideoSection;
