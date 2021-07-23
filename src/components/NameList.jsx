import { Button, List, ListItem, ListItemText, Typography } from "@material-ui/core";

import '../index.css';

const NameList = ({ names, mercy }) => (
  <>
    <List component="nav">
      <Typography className='center' variant="h6">
        Victims
      </Typography>
      {names.map((name, index) => (
        <ListItem key={name}>
          <ListItemText className='center' primary={name} />
          <Button color="secondary" variant="contained" onClick={() => mercy(index)} >X</Button>
        </ListItem>
      ))}
    </List>
  </>
);

export default NameList;
