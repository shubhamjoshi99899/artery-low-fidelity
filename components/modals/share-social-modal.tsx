import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import { useRouter } from "next/router";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import copy from "copy-to-clipboard";
import { Context } from "../../context/contextProvider";
import { SuccessToast } from "../common/toast/toasHelpers";
interface Props {
  open?: any;
  handleClose?: any;
  eventId?: any;
}

const ShareSocial: React.FC<Props> = ({ open, handleClose, eventId }) => {
  const router = useRouter();
  const context = useContext(Context);
  const toastContext = context?.Toast;

  const handleCopyClick = () => {
    copy(`https://portal.wisercount.com/api/event${eventId}`);
    SuccessToast("Link has been copied to your clipboard", toastContext);
    handleClose();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ borderRadius: "20px !important" }}
      >
        <Box sx={{ p: 5, borderRadius: "20px !important" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              color: (theme: Theme) => theme.palette.grey[100],
              textAlign: "left",
            }}
          >
            Share Via
          </Typography>
          <Stack direction={"row"} gap={3} sx={{ m: 3 }}>
            {/* <FacebookShareButton
              url={`https://portal.wisercount.com/api/event${eventId}`}
              quote={
                "Artery is an app which is used for smart management of events using AI/ML models ."
              }
              title={
                "Artery is an app which is used for smart management of events using AI/ML models ."
              }
              hashtag={"#bookview"}
              windowWidth={1000}
              windowHeight={1000}
              style={{ borderRadius: "50%" }}
            >
              <FacebookIcon size={42} />
            </FacebookShareButton> */}
            <TelegramShareButton
              url={`https://portal.wisercount.com/api/event/${eventId}`}
              title={
                "Artery is an app which is used for smart management of events using AI/ML models ."
              }
              itemRef="/book.png"
            >
              <TelegramIcon size={42} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://portal.wisercount.com/api/event/${eventId}`}
              title={
                "Artery is an app which is used for smart management of events using AI/ML models ."
              }
              itemRef="/Events-amico.png"
            >
              <WhatsappIcon size={42} />
            </WhatsappShareButton>

            <EmailShareButton
              url={`https://portal.wisercount.com/api/event/${eventId}`}
              subject={
                "Artery is an app which is used for smart management of events using AI/ML models"
              }
              body="body"
              itemRef="/Events-amico.png"
            >
              <EmailIcon size={42} />
            </EmailShareButton>
          </Stack>
          <Stack
            sx={{
              background: (theme: Theme) => theme.palette.primary.light,
              p: 2,
              border: "1px solid #E0E0E0",
              borderRadius: "12px",
            }}
            direction="row"
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "elipsis",
                display: "-webkit-box",
                whiteSpace: "nowrap",
                // borderRight: "1px solid #E0E0E0",
                marginRight: 1,
              }}
            >
              {`https://portal.wisercount.com/api/event/${eventId}`}
            </Typography>
            <Divider orientation="vertical" sx={{ marginLeft: 1 }} />
            <IconButton onClick={handleCopyClick} sx={{ p: 0 }}>
              <ContentCopyIcon />
            </IconButton>
            {/* <Typography
              onClick={handleCopyClick}
              sx={{
                maxHeight: "25px",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "12px",
                background: "#fff",
              }}
            >
              Copy
            </Typography> */}
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default ShareSocial;
