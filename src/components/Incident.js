import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SquareEditOutline } from 'mdi-material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  styleTable: {
    'margin': '31px 0px 0px 21px'
  },
  loader: {
    'margin': '20% 50%'
  },
}

export default class Incident extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { fetchIncidents } = this.props;
    fetchIncidents();
  }

  render() {
    let { incident } = this.props;
    return (
      <div>
        {incident && incident.length > 0 ? <div style={styles.styleTable}>
          <Paper >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Severity</TableCell>
                  <TableCell>Start Timestamp</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {incident.map(incident => {
                  return (
                    <TableRow key={incident.id}>
                      <TableCell>
                        {incident.id}
                      </TableCell>
                      <TableCell>{incident.message}</TableCell>
                      <TableCell>{incident.status}</TableCell>
                      <TableCell>{incident.product}</TableCell>
                      <TableCell>{incident.severity}</TableCell>
                      <TableCell>{incident.startTimestamp}</TableCell>
                      <TableCell>{incident.title}</TableCell>
                      <TableCell>
                        <IconButton style={{ padding: 5 }}><AddIcon /></IconButton>
                        <IconButton style={{ padding: 5 }} color="secondary" aria-label="Add an alarm"><DeleteIcon /></IconButton>

                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div> : incident && incident.error == "Internal Server Error" ?
            <h3 className="loading-indicator">No data found</h3>
            : <div><CircularProgress style={styles.loader}/></div>}
      </div>
    )
  }
};


