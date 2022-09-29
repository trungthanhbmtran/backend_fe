import { Collapse, ListItem, ListItemIcon, ListItemText,List } from "@mui/material";
import { ExpandLessIcon, ExpandMoreIcon} from "@mui/icons-material";
import { Fragment,useState } from "react";
import MenuItem from ".";


const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    return (
      <Fragment>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  };

export default MultiLevel