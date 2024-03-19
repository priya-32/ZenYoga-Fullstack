import React, { useState } from 'react';
// import './YogaRoutineTracker.css'; // Import CSS file for styles

const YogaRoutineTracker = () => {
  // State variables
  const [selectedYoga, setSelectedYoga] = useState('');
  const [completedRoutines, setCompletedRoutines] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');

  // Dummy content library with images and video URLs
  const yogaContentLibrary = [
    { id: 1, name: 'Sun Salutation', duration: '15 mins', image: 'https://cdn.shopify.com/s/files/1/0425/6363/3311/files/athletic-man-standing-pose.jpg?v=1638906520', videoUrl: 'https://www.youtube.com/embed/cMfChJLqma4?rel=0' },
    { id: 2, name: 'Warrior Pose', duration: '10 mins', image: 'https://images.news18.com/ibnlive/uploads/2023/03/untitled-design-36-1.png', videoUrl: 'https://www.youtube.com/embed/24RYHE3HlCQ?rel=0' },
    { id: 3, name: 'Child\'s Pose', duration: '5 mins', image: 'https://cdn.doyou.com/wp/2014/08/Upward-Facing-Dog.jpg', videoUrl: 'https://www.youtube.com/embed/UpH7rm0cYbM?rel=0' },
    // Add more yoga routines here
  ];

  // Handle click event when a yoga routine is selected
  const handleYogaSelect = (routine) => {
    setSelectedYoga(routine.name);
    setVideoUrl(routine.videoUrl);
  };

  // Handle canceling the selected routine
  const cancelSelectedYoga = () => {
    setSelectedYoga('');
    setVideoUrl('');
  };

  // Handle resetting all selected routines
  const resetSelectedRoutines = () => {
    setSelectedYoga('');
    setCompletedRoutines([]);
    setVideoUrl('');
  };

  // Handle adding completed routine to tracker
  const handleAddToTracker = () => {
    if (selectedYoga) {
      setCompletedRoutines([...completedRoutines, selectedYoga]);
      setSelectedYoga('');
      setVideoUrl('');
    }
  };

  return (
    <div className="yoga-tracker-container">
      <h1>Yoga Routine Tracker</h1>
      <div className="routine-selection">
        <h2>Choose Your Routine</h2>
        <ul className="routine-list">
          {yogaContentLibrary.map(routine => (
            <li key={routine.id} className="routine-item" onClick={() => handleYogaSelect(routine)}>
              <img src={routine.image} alt={routine.name} />
              <div>
                <p>{routine.name}</p>
                <p>Duration: {routine.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-routine">
        <h2>Selected Routine</h2>
        {selectedYoga && (
          <>
            <p>{selectedYoga}</p>
            <button className="cancel-btn" onClick={cancelSelectedYoga}>Cancel</button>
          </>
        )}
        {videoUrl && (
          <div className="video-container">
            <iframe width="560" height="315" src={videoUrl} title="Yoga Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        )}
        <button className={`add-to-tracker-btn ${selectedYoga && 'pulse-animation'}`} onClick={handleAddToTracker} disabled={!selectedYoga}>Add to Tracker</button>
      </div>
      <div className="completed-routines">
        <h2>Completed Routines</h2>
        <ul>
          {completedRoutines.map((routine, index) => (
            <li key={index}>{routine}</li>
          ))}
        </ul>
        {completedRoutines.length > 0 && (
          <button className="reset-btn" onClick={resetSelectedRoutines}>Reset Selected Routines</button>
        )}
      </div>
    </div>
  );
};

export default YogaRoutineTracker;
