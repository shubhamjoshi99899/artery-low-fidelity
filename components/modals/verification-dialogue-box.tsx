import Dialog from "@mui/material/Dialog";
import { Box, Typography, Theme, Stack, Divider } from "@mui/material";
import PrimaryButton from "../buttons/primaryButton";

interface Props {
  openVerificationDialog: boolean;
  closeVerificationDialog: any;
  accept?: boolean;
  heading?: string;
  body?: string;
  body2?: string;
  buttonText: string;
  confirmClick?: any;
  fromInvoiceAccept?: any;
  secondarybuttonText?: any;
  handleOptions?: any;
}

const VerificationDialogueBox: React.FC<Props> = ({
  openVerificationDialog,
  closeVerificationDialog,
  heading,
  body,
  body2,
  buttonText,
  secondarybuttonText,
  handleOptions,
}) => {
  const handleClose = () => {
    closeVerificationDialog();
  };

  return (
    <Box>
      <Dialog
        open={openVerificationDialog}
        onClose={handleClose}
        sx={{
          height: "auto !important",
          borderRadius: "12px ",
          border: "1px solid #EFEFEF",
          padding: 0,
        }}
      >
        <Box maxWidth="440px">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
              color: "000",
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: "1.8125rem",
              letterSpacing: "-0.02rem",
              textAlign: "center",
              pt: 4,
              px: 4,
            }}
          >
            {heading}
          </Typography>

          <Typography
            sx={{
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.25rem",
              letterSpacing: "0.01rem",
              px: 4,
            }}
          >
            {body}
          </Typography>
          <Typography
            sx={{
              marginBottom: "31px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.125rem",
              lineHeight: "1.25rem",
              letterSpacing: "0.01rem",
            }}
          >
            {body2}
          </Typography>

          <Stack direction="row" mt={3}>
            <PrimaryButton
              variant="contained"
              text={buttonText}
              sx={{
                width: "100%",
                height: "48px",
                borderRadius: "5px",
                background: "#fff",
                color: "#7D7D7D",
                borderTop: "1px solid #7D7D7D",
              }}
              onClick={handleClose}
            />
            <Divider orientation="vertical" />
            <PrimaryButton
              variant="contained"
              text={secondarybuttonText}
              sx={{
                width: "100%",
                height: "48px",
                borderRadius: "5px",
                borderTop: "1px solid #7D7D7D",
                background: "#fff",
              }}
              onClick={handleOptions}
            />
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};
export default VerificationDialogueBox;
