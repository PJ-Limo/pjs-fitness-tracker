import Workouts from 'react-select'


const Home = () => {
  
  const workouts = [
    { value: 'Abs', label: 'Abs' },
    { value: 'Legs', label: 'Legs' },
    { value: 'Biceps', label: 'Biceps' },
    { value: 'Triceps', label: 'Triceps' },
    { value: 'Shoulders', label: 'Shoulders' },
    { value: 'Back', label: 'Back' },
    { value: 'Fullbody', label: 'Fullbody' },
    { value: 'Chest', label: 'Chest' },
  ];

  const weight = [
    { value: '5', label: '5' },
    { value: '7.5', label: '7.5' },
    { value: '10', label: '10' },
    { value: '12.5', label: '12.5' },
    { value: '17.5', label: '17.5' },
    { value: '20', label: '20' },
    { value: '25', label: '25' },
    { value: '30', label: '30' },
    { value: '35', label: '35' },
    { value: '40', label: '40' },
    { value: '45', label: '45' },
    { value: '50', label: '50' },
    { value: '55', label: '55' },
  ];
  
  const sets = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
  ];

  const reps = [
    { value: '1', label: '3' },
    { value: '2', label: '5' },
    { value: '3', label: '8' },
    { value: '4', label: '10' },
    { value: '5', label: '12' },
    { value: '6', label: '15' },
    { value: '7', label: 'To failure' },
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
        <Workouts options={workouts} styles={customStyles} placeholder='Select workout'/>
        <Workouts options={weight} styles={customStyles} placeholder='Select weight'/>
        <Workouts options={sets} styles={customStyles} placeholder='Select sets'/>
        <Workouts options={reps} styles={customStyles} placeholder='Select reps'/>
        
       
      </div>
    </div>
  );
};

export default Home;
