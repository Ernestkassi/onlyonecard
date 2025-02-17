import { useLocation, Outlet } from "react-router-dom";
// @mui
import { Box, Stack } from "@mui/material";
//
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {isHome ? <MainFooter /> : <MainFooter />}
    </Stack>
  );
}
