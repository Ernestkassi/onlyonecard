import NProgress from "nprogress";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { alpha, styled } from "@mui/system";
import onlyone_logo from "../../assets/images/onlyone_logo.svg";
import { Box, Typography } from "@mui/material";

const nprogressStyle = makeStyles((theme) =>
  createStyles({
    "@global": {
      "#nprogress": {
        pointerEvents: "none",
        "& .bar": {
          top: 0,
          left: 0,
          height: 2,
          width: "100%",
          position: "fixed",
          zIndex: theme.zIndex?.snackbar,
          backgroundColor: theme.palette?.primary.main,
          boxShadow: `0 0 2px ${theme.palette?.primary.main}`,
        },
        "& .peg": {
          right: 0,
          opacity: 1,
          width: 100,
          height: "100%",
          display: "block",
          position: "absolute",
          transform: "rotate(3deg) translate(0px, -4px)",
          boxShadow: `0 0 10px ${theme.palette?.primary.main}, 0 0 5px ${theme.palette?.primary.main}`,
        },
      },
    },
  })
);

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background?.default,
}));

function ProgressBar() {
  nprogressStyle();

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <RootStyle {...other}>
      <ProgressBar />

      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Typography variant="h2">
          <img
            alt="Logo"
            src={onlyone_logo}
            style={{ width: 64, height: 63 }}
          />
        </Typography>
      </motion.div>
      <Box
        component={motion.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{
          ease: "linear",
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </RootStyle>
  );
}

// import PropTypes from "prop-types";
// import { m } from "framer-motion";
// import { alpha, styled } from "@mui/material/styles";
// import { Box } from "@mui/material";
// import onlyone_logo from "../../assets/images/onlyone_logo.svg";
// import ProgressBar from "./ProgressBar";

// const RootStyle = styled("div")(({ theme }) => ({
//   right: 0,
//   bottom: 0,
//   zIndex: 99999,
//   width: "100%",
//   height: "100%",
//   position: "fixed",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: theme.palette.background.default,
// }));

// LoadingScreen.propTypes = {
//   isDashboard: PropTypes.bool,
// };

// export default function LoadingScreen({ isDashboard, ...other }) {
//   return (
//     <>
//       <ProgressBar />

//       {!isDashboard && (
//         <RootStyle {...other}>
//           <m.div
//             initial={{ rotateY: 0 }}
//             animate={{ rotateY: 360 }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeatDelay: 1,
//               repeat: Infinity,
//             }}
//           >
//             <img
//               alt="Logo"
//               src={onlyone_logo}
//               style={{ width: 64, height: 63 }}
//             />
//           </m.div>

//           <Box
//             component={m.div}
//             animate={{
//               scale: [1.2, 1, 1, 1.2, 1.2],
//               rotate: [270, 0, 0, 270, 270],
//               opacity: [0.25, 1, 1, 1, 0.25],
//               borderRadius: ["25%", "25%", "50%", "50%", "25%"],
//             }}
//             transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
//             sx={{
//               width: 100,
//               height: 100,
//               borderRadius: "25%",
//               position: "absolute",
//               border: (theme) =>
//                 `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
//             }}
//           />

//           <Box
//             component={m.div}
//             animate={{
//               scale: [1, 1.2, 1.2, 1, 1],
//               rotate: [0, 270, 270, 0, 0],
//               opacity: [1, 0.25, 0.25, 0.25, 1],
//               borderRadius: ["25%", "25%", "50%", "50%", "25%"],
//             }}
//             transition={{
//               ease: "linear",
//               duration: 3.2,
//               repeat: Infinity,
//             }}
//             sx={{
//               width: 120,
//               height: 120,
//               borderRadius: "25%",
//               position: "absolute",
//               border: (theme) =>
//                 `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
//             }}
//           />
//         </RootStyle>
//       )}
//     </>
//   );
// }
