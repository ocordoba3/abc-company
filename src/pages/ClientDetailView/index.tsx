import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";

const ClientDetailView = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#ffffff",
                borderRadius: "16px 16px 0 0",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Details" value="1" />
            <Tab label="Expenses" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ClientDetailView;
