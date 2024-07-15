import React, { useState } from "react";
import { Box, Grid, Paper, Stack, Typography, Button, MenuItem, Select } from "@mui/material";
import CustomBox from "./component/Box";
import { GiUnlitBomb } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const App = () => {
  const createRandomBoxes = () => {
    const boxes = Array(12).fill(1).concat(Array(8).fill(0));
    for (let i = boxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }
    return boxes;
  };

  const [boxes] = useState(createRandomBoxes());
  const [selected_Index, setselected_Index] = useState([])
  const [marks, setmarks] = useState(0)



  const collectIndex = (index) => {

    const audio = new Audio("./assets/explosion.mp3")

    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });


    if (selected_Index.includes(index)) {
      return;
    }


    if (boxes[index] === 0) {
      setselected_Index([...
        boxes.map((e, index) => index)
      ])



    } else {
      setselected_Index([...selected_Index, index])
      setmarks(marks + 10)
    }
  };



  const reset = () => {
    setselected_Index([])
    setmarks(0)
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
            <Typography variant="h4" color="white">Marks</Typography>
            <Typography variant="h4" color="white">{marks}</Typography>
            <Stack direction="row" spacing={2} >


              

              <Button
                sx={{
                  backgroundColor: "green",
                  color: "white"
                }}
                onClick={reset}
                variant="outlined"
              >
                Reset
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  backgroundColor: "#0F212E",
                  m: 1,
                  maxWidth: "100%",
                  maxHeight: 500,
                  paddingTop: 2,
                  paddingBottom: 6,
                },
              }}
            >
              <Paper elevation={3}>
                <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center">
                  {boxes.map((box, index) => {

                    let isSelected = selected_Index.includes(index)
                    let emoji = selected_Index ? (box == 1 ? <IoDiamondOutline color="white" size={30} /> : <GiUnlitBomb size={30} color="white" />) : null
                    return (
                      <CustomBox
                        onClick={() => collectIndex(index)}
                        key={index}
                        isSelected={isSelected}
                        emoji={emoji}
                      />
                    );
                  })}
                </Stack>
              </Paper>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default App;
