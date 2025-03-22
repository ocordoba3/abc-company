import { styled } from "@mui/material";
import { drawerWidth } from "../utils/consts";
import MuiAppBar, { AppBarProps as MuiNavbarProps } from "@mui/material/AppBar";

interface Props extends MuiNavbarProps {
  open?: boolean;
}

const Navbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<Props>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default Navbar;
