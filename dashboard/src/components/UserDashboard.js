// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import { Typography, Paper } from '@mui/material';
// import AppTheme from '../shared-theme/AppTheme';
// import Navbar from './Navbar';
// import { styled } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const StyledBox = styled(Box)(({ theme }) => ({
//   marginTop: '20px',
//   position: 'relative',
//   padding: theme.spacing(2),
//   borderRadius: '8px',
//   boxShadow:
//     'hsla(220, 90%, 10%, 0.08) 0px 5px 15px, hsla(220, 90%, 10%, 0.6) 0px 15px 35px -5px',
//   background: 'radial-gradient(ellipse at 50% 50%, hsla(220, 90%, 16%, 1), hsla(220, 90%, 8%, 1))',
// }));

// const Dashboard = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
  
//   const teacherData = {
//     classAssigned: 'STD 5',
//     attendance: '85%',
//     notesLink: '#',
//     announcements: 'No new announcements today.',
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <AppTheme>
//       <CssBaseline enableColorScheme />
      
//       <Box
//         style={{
//           padding: '60px',
//           borderRadius: '8px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
//           Welcome, Class Teacher of {teacherData.classAssigned}
//         </Typography>

//         <Typography variant="h6" component="p" gutterBottom>
//           You are the class teacher for {teacherData.classAssigned}. Here you can manage attendance, notes, and announcements.
//         </Typography>

//         {/* <StyledBox variant="outlined">
//           <Typography variant="h6" component="p">
//             Current Time: {currentTime.toLocaleTimeString()}
//           </Typography>
//         </StyledBox> */}

//         <StyledBox sx={{ marginTop: 2 }}>
//           <Typography variant="body1">
//             Class: {teacherData.classAssigned}
//           </Typography>
//           <Typography variant="body1">
//             Attendance: {teacherData.attendance}
//           </Typography>
//           <Typography variant="body1">
//             Notes: <a href={teacherData.notesLink}>Click here to view notes</a>
//           </Typography>
//           <Typography variant="body1">
//             Announcements: {teacherData.announcements}
//           </Typography>
//         </StyledBox>
//       </Box>
//     </AppTheme>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper } from '@mui/material';
import AppTheme from '../shared-theme/AppTheme';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow:
    'hsla(220, 90%, 10%, 0.08) 0px 5px 15px, hsla(220, 90%, 10%, 0.6) 0px 15px 35px -5px',
  background: 'radial-gradient(ellipse at 50% 50%, hsla(220, 90%, 16%, 1), hsla(220, 90%, 8%, 1))',
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const teacherData = {
    classAssigned: 'STD 5',
    attendance: '85%',
    notesLink: '#',
    announcements: 'No new announcements today.',
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/dashboard')
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      
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
          Welcome, Class Teacher of {teacherData.classAssigned}
        </Typography>

        <Typography variant="h6" component="p" gutterBottom>
          You are the class teacher for {teacherData.classAssigned}. Here you can manage attendance, notes, and announcements.
        </Typography>

        {/* <StyledBox variant="outlined">
          <Typography variant="h6" component="p">
            Current Time: {currentTime.toLocaleTimeString()}
          </Typography>
        </StyledBox> */}

        <StyledBox sx={{ marginTop: 2 }}>
          <Typography variant="body1">
            Class: {teacherData.classAssigned}
          </Typography>
          <Typography variant="body1">
            Attendance: {teacherData.attendance}
          </Typography>
          <Typography variant="body1">
            Notes: <a href={teacherData.notesLink}>Click here to view notes</a>
          </Typography>
          <Typography variant="body1">
            Announcements: {teacherData.announcements}
          </Typography>
        </StyledBox>
      </Box>
    </AppTheme>
  );
};

export default Dashboard;
