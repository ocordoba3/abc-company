import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

import { Client, ClientTabType } from "../../interfaces/clients";
import DetailTab from "./components/DetailTab";
import ExpensesTab from "./components/ExpensesTab";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import useFetch from "../../hooks/useFetch";

const ClientDetailView = () => {
  const { id } = useParams();
  const { fetchInstance } = useFetch();
  const [currentTab, setCurrentTab] = useState<ClientTabType>("detail");

  const { isFetching } = useQuery<Client>({
    enabled: Boolean(id),
    queryKey: ["client-detail", id],
    queryFn: () => fetchInstance(`/clients/${id}`) as Promise<Client>,
    staleTime: Infinity,
  });

  const tabs = [
    {
      label: "Details",
      component: <DetailTab />,
      value: "detail" as ClientTabType,
    },
    {
      label: "Expenses",
      component: <ExpensesTab />,
      value: "expenses" as ClientTabType,
    },
  ];

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={currentTab}>
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
            onChange={(_, newValue) => setCurrentTab(newValue)}
            aria-label="lab API tabs example"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {isFetching ? (
          <div className="bg-white w-full h-[calc(100vh-12rem)] rounded-b-xl p-4">
            <LoadingSkeleton />
          </div>
        ) : (
          <>
            {tabs.map((tab) => (
              <TabPanel
                className="bg-white w-full h-[calc(100vh-12rem)] rounded-b-xl"
                key={tab.value}
                value={tab.value}
              >
                {tab.component}
              </TabPanel>
            ))}
          </>
        )}
      </TabContext>
    </Box>
  );
};

export default ClientDetailView;
