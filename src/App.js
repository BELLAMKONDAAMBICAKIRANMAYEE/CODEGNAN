import React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const first={
   
    }

  return (
    <div className="App">
      <h1 style={{color:"red",fontFamily:"cursive",paddingLeft:"20px"}}>CREATE <span style={{color:"blue"}}>CONTEST</span> </h1><br/>
      <center style={{border:" 2px solid black",width:"80vh",margin:"auto",height:"70vh"}}>
      
      <h5 style={first} >Contest Name<span style={{color:"red"}}>*</span><span style={{margin:"10px"}}><input type="text"/></span></h5>
     
      <h5 style={first} >Start Date<span style={{color:"red"}}>*</span>  <span style={{margin:"20px"}}>&nbsp;&nbsp;<TextField id="outlined-basic"  variant="outlined" type="date" /></span></h5>
      
      <h5 style={first}>End Date<span style={{color:"red"}}>*</span>   <span style={{margin:"20px"}}>&nbsp;&nbsp;<TextField id="outlined-basic"  variant="outlined"  type="date" /></span></h5>
     
     <p> <Checkbox {...label}/>This content has no end date</p>
     
     <h5 style={first} >Organization Name<span style={{color:"red"}}>*</span> <span><input type="text"/></span></h5>
     
     <h2>Add Questions</h2>
        <Button variant="outlined" color="primary">Add MCQ</Button>&nbsp;
        <Button variant="outlined" color="primary">Add Coding</Button>
      </center><br/>

      <div>
        
        <h2 style={{fontFamily:"cursive",padding:"40px"}}>CHALLENGES:-</h2>
        <center style={{border:" 2px solid black",width:"80vh",margin:"auto",height:"90vh"}}>
        <h3 style={{color:"red"}}>MCQ</h3>
        <h5>Question <TextField></TextField></h5>
        <h5>options:</h5><h5> Option 1 <TextField></TextField></h5>
        <Button variant="contained" color="primary">Add Option</Button>
        <h5>Marks:&nbsp; <TextField id="outlined-basic"  variant="outlined" type="number" /></h5>
        <h5>Answer:<TextField id="outlined-basic"  variant="outlined" type="text" /></h5>
        <Button variant="outlined" color="primary">Add Question</Button>
        </center><br/>
      </div>
      <div>
        
        
        <center style={{border:" 2px solid black",width:"80vh",margin:"auto",height:"175vh"}}>
        <h3 style={{color:"blue"}}>CODING QUESTION</h3>
        <h5 >Question&nbsp; <TextField style={{paddingLeft:"20px"}}></TextField></h5>
        <h5 >Description&nbsp; <TextField style={{paddingLeft:"10px"}}></TextField></h5>
        <h5 >Input-Format <TextField style={{paddingLeft:"10px"}}></TextField></h5>
        <h5 style={{marginRight:"8px"}}>Output-Format<TextField style={{paddingLeft:"10px"}}></TextField></h5>
        <h5>Difficulty: 
        
        <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    
  ><FormControlLabel value="Easy" control={<Radio />} label="Easy" style={{justifyContent:"center"}}/>
        <FormControlLabel value="Medium" control={<Radio />} label="Mean" style={{justifyContent:"center"}} />
        <FormControlLabel value="Hard" control={<Radio />} label="Hard" style={{justifyContent:"center"}}/></RadioGroup></h5>
        
        <h5> Sample input &nbsp;&nbsp; <TextField></TextField></h5>
        <h5> Sample output  &nbsp;&nbsp;<TextField></TextField></h5>
        <h4>Test Cases</h4>
        <h5>Test Case 1:  </h5>
         <h5 style={{paddingLeft:"110px"}}>Input&nbsp;&nbsp; <TextField></TextField></h5>
       <h5 style={{paddingLeft:"110px"}}> Output&nbsp;<TextField></TextField></h5>
        <h5><Button variant="contained" color="primary">Add</Button> <Button variant="contained" color="primary">More</Button><br/></h5>
        <Button variant="outlined" color="primary">Add Question</Button>
        
        </center>
      </div>

    </div>
  );
}

export default App;
