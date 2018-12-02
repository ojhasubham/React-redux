import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  styleTable: {
    'margin': '15px 0px 0px 0px'
  },
  loader: {
    'margin': '20% 50%'
  },
}

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { fetchComment } = this.props;
    fetchComment();
  }

  render() {
    let { comment } = this.props;
    return (
      <div>
        {comment && comment.length > 0 ? <div style={styles.styleTable}>
          <Paper >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comment.map(c => {
                  return (
                    <TableRow key={c.id}>
                      <TableCell>
                        {c.id}
                      </TableCell>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.email}</TableCell>
                      <TableCell>{c.body}</TableCell>                      
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div> : comment && comment.length === 0 ?
            <h3 className="loading-indicator">No data found</h3>
            : <div><CircularProgress style={styles.loader}/></div>}
      </div>
    )
  }
};


