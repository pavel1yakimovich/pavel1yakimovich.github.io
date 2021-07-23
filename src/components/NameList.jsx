import { Button, List, ListItem, ListItemText } from "@material-ui/core";

import '../index.css';

const NameList = ({ names, mercy }) => (
  <>
    <List component="nav">
      <img alt="" className="logo" src={window.location.origin + '/logo.jpg'} />
      {names.map((name, index) => (
        <div className="center">
          <ListItem key={name} className="victim">
            <ListItemText className="center" primary={name} />
            <Button color="secondary" variant="contained" onClick={() => mercy(index)} >X</Button>
          </ListItem>
        </div>
      ))}
    </List>
  </>
);

export default NameList;
