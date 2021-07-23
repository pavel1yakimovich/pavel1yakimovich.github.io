import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import '../index.css';

const NameList = ({ names }) => (
  <>
    <List component="nav">
      <Typography className='center' variant="h6">
        Victims
      </Typography>
      {names.map(name => (
        <ListItem>
          <ListItemText className='center' primary={name} />
        </ListItem>
      ))}
    </List>
  </>
);

export default NameList;
