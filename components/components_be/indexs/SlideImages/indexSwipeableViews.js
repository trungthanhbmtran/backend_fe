
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { slideImageData } from '../../../data/slideImageData';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SlideImages = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = slideImageData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ my: 0}}>
    {/* {[...new Array(12)]
      .map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      )
      .join('\n')} */}
       <AutoPlaySwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={activeStep}
onChangeIndex={handleStepChange}
enableMouseEvents
>
{slideImageData.map((step, index) => (
  <div key={step.label}>
    {Math.abs(activeStep - index) <= 2 ? (
      <Box
        component="img"
        sx={{
          height: 480,
          display: 'block',
          overflow: 'hidden',
          width: '100%',
        }}
        src={step.imgPath}
        alt={step.label}
      />
    ) : null}
  </div>
))}
</AutoPlaySwipeableViews>
<MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
  </Box>
            )
}
 export default SlideImages