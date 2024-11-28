import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AppTheme from '../shared-theme/AppTheme';
import Navbar from '../components/Navbar';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: '20px',
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow:
    'hsla(220, 90%, 20%, 0.3) 0px 5px 15px, hsla(220, 90%, 10%, 0.6) 0px 15px 35px -5px',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsla(220, 90%, 16%, 1), hsla(220, 90%, 8%, 1))',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '8px',
  },
}));

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/read_users', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ3ZDZhMjAyMWY5MjhjYzY3NjM2NjEiLCJuYW1lIjoidmFpc2giLCJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsInJvbGVzIjpbInVzZXIiXSwiX192IjowLCJpc3MiOiJOb2RlLUF1dGgiLCJpYXQiOjE3MzI3NjEzMjYsImV4cCI6MTczMjc2NDkyNn0.W2cO7wVytalbYtSVJK5PXAWqZeN-Z5qSiW1IcVc_PyQ`, // Replace with your actual token
          },
        });
        const userData = response.data.map(({name, email }) => ({
          name,
          email,
        }));
        setUsers(userData);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      {/* <Navbar /> */}
      <Box
        style={{
          padding: '60px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
          Hello Admin!!!
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          The List of Users are as follows:
        </Typography>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <StyledTableContainer component={Paper} variant="outlined">
            <Table variant="outlined">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Sr.No</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Email</strong>
                  </TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        )}
      </Box>
    </AppTheme>
  );
};

export default Dashboard;
