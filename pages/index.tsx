import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";
import PrimaryButton from "../components/buttons/primaryButton";
import MetaHeader from "../components/common/meta-header";
import CreateEventModal from "../components/events/create-event-modal";
import EventCard from "../components/events/event-card";
import Header from "../components/header";
import Login from "../components/page-ui-components/authentication/login";
import CreateEvent from "./create-event";
const Home = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values: any) => {
    axios
      .post("https://portal.wisercount.com/api/event", values)
      .then((res) => {});
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  return (
    <div>
      <MetaHeader subHeading="Login" />
      <Login />
    </div>
  );
};

export default Home;
