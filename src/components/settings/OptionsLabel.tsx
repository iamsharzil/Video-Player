import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { SettingOptionType } from ".";

export const OptionsLabel: React.FC<{
  label: string;
  defaultValue: string;
  handleClick?: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: SettingOptionType) => void;
  type: SettingOptionType;
}> = ({ label, defaultValue, handleClick, type }) => {
  return (
    <Button
      variant="text"
      fullWidth
      color="inherit"
      disableElevation
      onClick={(e) => handleClick(e, type)}
      sx={{
        textTransform: "capitalize",
      }}
    >
      <ListItemText
        sx={{
          textAlign: "left",
        }}
      >
        {label}
      </ListItemText>
      <Typography component="div" display="flex" alignItems="center">
        <ListItemText>{defaultValue}</ListItemText>
        <ListItemIcon
          sx={{
            minWidth: 24,
          }}
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </ListItemIcon>
      </Typography>
    </Button>
  );
};
