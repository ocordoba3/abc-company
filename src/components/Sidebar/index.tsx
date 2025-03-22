import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Drawer from "./components/Drawer";
import DrawerHeader from "./components/DrawerHeader";
import Navbar from "./components/Navbar";
import { ReactNode, useState } from "react";
import { SIDEBAR_ITEMS } from "./utils/consts";
import { RiMenuFold4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar position="fixed" open={open}>
        <Toolbar className="bg-gradient-to-l from-purple-700 to-purple-900 border-b-4 border-amber-600">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <RiMenuFold4Line />
          </IconButton>
          <Typography variant="h6" noWrap component="div" fontWeight={700}>
            ABC-Company
          </Typography>
        </Toolbar>
      </Navbar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <BsArrowRight /> : <BsArrowLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SIDEBAR_ITEMS.map(({ label, icon: Icon, href }) => (
            <ListItem key={label} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(href)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <Icon size={24} className="text-black" />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        className="w-full min-h-screen pt-20 p-4 overflow-x-hidden bg-blue-50"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
