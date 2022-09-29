import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const SingleLevel = ({ item }) => {
    return (
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
};

export default SingleLevel
  