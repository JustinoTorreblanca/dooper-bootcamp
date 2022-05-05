import { Alert, AlertTitle, Stack } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";

interface CustomAlertProps {
  severity: AlertColor;
  message: string;
}

const CustomAlert = ({ severity, message }: CustomAlertProps) => {
  return (
    <Stack>
      <Alert severity={severity}>
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </Stack>
  );
};

export default CustomAlert;
