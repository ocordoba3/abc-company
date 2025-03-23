import { FaFilter } from "react-icons/fa6";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { MedicalStatus } from "../../../interfaces/clients";
import useStoreFilters from "../../../store/filters";

const MedicalStatusFilter = () => {
  const { medicalStatus, setMedicalStatus } = useStoreFilters();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange(newStatus: MedicalStatus | null) {
    if (newStatus === medicalStatus) {
      setMedicalStatus(null);
    } else {
      setMedicalStatus(newStatus);
    }
    handleClose();
  }

  return (
    <div>
      <Button
        className="h-8"
        title="Medical Status Filter"
        size="small"
        variant="contained"
        color="secondary"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(ev) => setAnchorEl(ev.currentTarget)}
      >
        <FaFilter size={16} />
        {medicalStatus ? <span className="ml-2">{medicalStatus}</span> : ""}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disabled>Medical Status Filter</MenuItem>
        {["Pending", "Active", "In Progress"].map((element) => (
          <MenuItem
            key={element}
            sx={{
              backgroundColor: element === medicalStatus ? "#eff6ff" : "",
            }}
            onClick={() => handleChange(element as MedicalStatus)}
          >
            {element}
          </MenuItem>
        ))}
        <MenuItem sx={{ opacity: 0.6 }} onClick={() => handleChange(null)}>
          Reset
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MedicalStatusFilter;
