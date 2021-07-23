import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const NameList = ({ names }) => {
  debugger;
  return (
  <>
    <Typography variant="h6">
      Victims
    </Typography>
    <List component="nav">
      {names.map(name => (
        <ListItem>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </>
);
      }

export default NameList;
