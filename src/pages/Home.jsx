import Select from 'react-select'


const Home = () => {
  
  const options = [
    { value: 'Abs', label: 'Abs' },
    { value: 'Legs', label: 'Legs' },
    { value: 'Biceps', label: 'Biceps' },
    { value: 'Triceps', label: 'Triceps' },
    { value: 'Shoulders', label: 'Shoulders' },
    { value: 'Back', label: 'Back' },
    { value: 'Fullbody', label: 'Fullbody' },
    { value: 'Chest', label: 'Chest' },
  ];
  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "200px",
      borderRadius: "8px",
      boxShadow: "none",
      textAlign: "left",
      fontSize: "13px",
      backgroundColor: "#071629",
      mixBlendMode: "screen",
      borderColor: "#FFBC00"
     }),
    option: (provided, state) => ({...provided, color: "#071629", backgroundColor: state.isSelected ? "#FFBC00" : "#ffffff" }),
  };
  

  return (
    <div className='hero'>
      <div className='left-h'>
        <h1>Welcome!!!</h1>
        <p>Track your progress, crush your goals, and unlock a fitter you—one workout at a time! </p>
        <h2>Log latest workout</h2>
      </div>
      <div className='workoutLog'>
        <Select options={options} styles={customStyles} />
        <input type="text" placeholder='number of sets'/>
        <input type="text" placeholder='number of reps'/>
        <input type="text" placeholder='Add weight (kgs)'/>
      </div>
      <textarea id="notes" name="notes" rows="3" cols="30" placeholder="write workout notes here..."></textarea>
    </div>
  )
}

export default Home;
