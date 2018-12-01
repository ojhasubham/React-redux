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

export default class AAATable extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    let { AAAData } = this.props;
    let data = AAAData && AAAData.data ? AAAData.data : [];
    return (
      <div>
        {data && data.length > 0 ? <div style={styles.styleTable}>
          <Paper >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Customer Id</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>FullName</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>RoleId</TableCell>
                  <TableCell>Permissions</TableCell>
                  <TableCell>Roles</TableCell>
                  <TableCell>Search Options</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(value => {
                  return (
                    <TableRow key={value.id}>
                      <TableCell>
                        {value.id}
                      </TableCell>
                      <TableCell>{value.customerId}</TableCell>
                      <TableCell>{value.email}</TableCell>
                      <TableCell>{value.username}</TableCell>
                      <TableCell>{value.fullName}</TableCell>
                      <TableCell>{value.phone}</TableCell>
                      <TableCell>{value.country}</TableCell>
                      <TableCell>{value.roleId}</TableCell>
                      <TableCell>{value.permissions}</TableCell>
                      <TableCell>{value.roles}</TableCell>
                      <TableCell>{value.searchOptions}</TableCell>
                      <TableCell>
                        <IconButton><AddIcon /></IconButton>
                        <IconButton color="secondary" aria-label="Add an alarm"><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div> : data && data.error == "Internal Server Error" ?
            <h3 className="loading-indicator">No data found</h3>
            : <div><CircularProgress style={styles.loader} /></div>}
      </div>
    )
  }
};


