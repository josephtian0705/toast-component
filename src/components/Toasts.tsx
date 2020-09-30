import React, { useState, ChangeEvent, MouseEvent } from 'react';
import {Container, Grid, Card, FormControl, Box, Input, RadioGroup, FormControlLabel, FormLabel, Radio} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { toast, ToastContainer } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css';
import { Howl, Howler } from 'howler';

interface ToastProps {
  title: string,
  body: string,
  timer: number,
  level: string
}

const useStyles = makeStyles({
  formStyle: {
    padding: '10px',
  },
  margin: {
    margin: '10px',
  },
  marginCard:{
    margin: '20px'
  }
});

toast.configure();

function Toasts(){
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [timer, setTimer] = useState(0);
  const [level, setLevel] = useState('default');

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  }

  const onTimerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimer(parseInt(e.target.value));
  }

  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLevel((e.target as HTMLInputElement).value);
  }

  function Message(){
    let msgTitle = title;
    let msgBody = body;

    if(title === ""){
      msgTitle = 'No Title';
    }

    if(body === ""){
      msgBody = 'No Body';
    }

    return(
      <Container>
        <h3>{msgTitle}</h3>
        <p>{msgBody}</p>
      </Container>
    );
  }

  const playSound = () => {
    const soundPath = '../notiSound.mp3';
    const sound = new Howl({
      src: [soundPath],
      volume: 1,
    });
    sound.play();
    return;
  }

  const notify = (e: MouseEvent<HTMLButtonElement>) => {
    
    if(level === 'default'){
      toast(<Message />, {
        position: "top-right",
        autoClose: timer * 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        playSound();
    }

    if(level === 'success'){
      toast.success(<Message />, {
        position: "top-right",
        autoClose: timer * 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        playSound();
    }

    if(level === 'warn'){
      toast.warn(<Message />, {
        position: "top-right",
        autoClose: timer * 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        playSound();
    }

    if(level === 'error'){
      toast.error(<Message />, {
        position: "top-right",
        autoClose: timer * 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        playSound();
    }
  }

  return(
    <Container>
      {/* <Button onClick={notify}>Button</Button> */}
      
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        />
  
      <FormControl>
        <Grid container direction="row" xs={12}>
          <Card className={classes.marginCard}>
              <CardContent>
                <Box className={classes.formStyle}>
                  <Grid container direction="row" justify="flex-start">
                    <Input className={classes.margin} placeholder="Title" type="text" value={title} onChange={onTitleChange} />
                    <Input className={classes.margin} placeholder="Body" type="text" value={body} onChange={onBodyChange} />
                  </Grid>
                </Box>
                <Box className={classes.formStyle}>
                  <Grid className={classes.margin} container direction="row">
                    <Input type="number" placeholder="Timer" value={timer} onChange={onTimerChange}/>
                    <p className={classes.margin}>Seconds</p>
                  </Grid>
                </Box>
                <Box className={classes.margin}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={level} onChange={onRadioChange}>
                    <FormControlLabel value="default" control={<Radio />} label="Level 1 (Default)" />
                    <FormControlLabel value="success" control={<Radio />} label="Level 2 (Success)" />
                    <FormControlLabel value="warn" control={<Radio />} label="Level 3 (Warning)" />
                    <FormControlLabel value="error" control={<Radio />} label="Level 4 (Danger)" />
                  </RadioGroup>
                </Box>
                <Box className={classes.formStyle}>
                  <Grid container direction="row" justify="flex-end">
                    <Button variant="outlined" onClick={notify}>Create Toast</Button>
                  </Grid>
                </Box>
              </CardContent>
          </Card>
        </Grid>
      </FormControl>
    </Container>
  );
}

export default Toasts;

