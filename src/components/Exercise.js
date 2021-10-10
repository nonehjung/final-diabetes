import "././Main.css";
import Headerbar from "./Header";
import ExercisePage from "./ExercisePage";
import ResponsivePlayer from "./video/ResponsivePlayer";

function Exercise() {
  return (
    <div className='background'>
      <Headerbar />
      <ExercisePage />
      <ResponsivePlayer />
    </div>
  );
}

export default Exercise;