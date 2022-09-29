import { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import New from '../../news';
import Banner from '../banner';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TabsComponent = ({ ArrayTabs, page }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // console.log('ArrayTabs',ArrayTabs)
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {ArrayTabs.map((e,i) => (
        <TabPanel key={i} value={value} index={i} dir={theme.direction}>
            <Banner path={e.imagePath} 
            title={e.tillebaner}
            description={e.description}
            />
        </TabPanel>
        ))
      }
          <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {ArrayTabs.map((e, i) => <Tab key={i} label={e.title} {...a11yProps(e.id)} />)}
          {/* <Tab label={ArrayTabs.title} {...a11yProps(ArrayTabs.id)} />  */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* <h1>111</h1> */} 
        {page
          ? (ArrayTabs.map((e, i) => <TabPanel key={i} value={value} index={i} dir={theme.direction}>{e.component} </TabPanel>))
          : (ArrayTabs.map((e, i) =>
            <TabPanel key={i} value={value} index={i} dir={theme.direction}>
              <New data={e} />
            </TabPanel>
          ))}
        {/* {ArrayTabs.map((e,i)=><TabPanel value={value} index={i} dir={theme.direction}>{e.component} </TabPanel>)} */}
      </SwipeableViews>
    </Box>
  )
}

export default TabsComponent