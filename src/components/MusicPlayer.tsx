import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.jsdelivr.net/gh/Sandeep2229/Audio_file/interstellar_chase_2.mp3');
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button 
      onClick={togglePlayback}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-300 border border-white/20 group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
      )}
      <span className="absolute -top-10 right-0 bg-black/70 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isPlaying ? "Mute Background Music" : "Play Background Music"}
      </span>
    </button>
  );
};

export default MusicPlayer;