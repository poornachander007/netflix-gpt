import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovietrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailerVideo);
  // useMovietrailer(movieId);

  return (
    <div className="VideoBackground w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/Idh8n5XuYIA?si=" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
