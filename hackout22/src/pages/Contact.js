import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { Container, TextField, Button, FormControl } from "@mui/material";
import { Box } from "@mui/system";

import SendIcon from "@mui/icons-material/Send";

// importing typerwriter-effect package to display typing effect
import TypeWriter from "typewriter-effect";
// importing GraphemeSplitter to split emojis as seperate individual characters
import GraphemeSplitter from "grapheme-splitter";

const list = [
  "We predict your Bus🚌",
  "Like Our Work?",
  "Or",
  "faced any issue?",
  "Then do Contact Us👋🏽",
];

const ContactMe = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact | Predict Bus";
  }, []);

  const handelStateChange = (event) => {
    setMailerState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const url =
      process.env.NODE_ENV === "production"
        ? "/send/"
        : "http://localhost:3001/send/";
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        // get the response from transporter.sendEmail to see if success or not
        const resData = await res;
        if (resData.status === "success") {
          alert("Your message is sent Successfully🤝🏽.");
        } else {
          alert(
            "some error occured while sending your message. Please try again after a while. Inconvineince caused is regretted🙇🏽‍♂️."
          );
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "80vh",
          marginTop: "6em",
          marginBottom: {
            sm: "0",
            xs: "8em",
          },
          padding: "2em 0",
          borderRadius: 2,
          width: {
            xs: "90vw",
          },
        }}
      >
        <Box
          className="typewriter"
          sx={{
            width: "fit-content",
            margin: "0 auto",
            fontSize: {
              md: "3em",
              sm: "2em",
              xs: "1.5em",
            },
            mb: 4,
            color: "#fff",
            animation: "text 6s infinite",
            fontWeight: 700,
          }}
        >
          <TypeWriter
            options={{
              strings: list,
              autoStart: true,
              loop: true,
              pauseFor: "1500",
              // graphemesplitter convert the multichar letters to single char
              stringSplitter: (str) => {
                const splitter = new GraphemeSplitter();
                return splitter.splitGraphemes(str);
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "70%",
            // height: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-around",
            margin: "auto",
          }}
        >
          <FormControl
            component="form"
            onSubmit={sendEmail}
            sx={{ width: "100%" }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Contact No"
              rows={10}
              placeholder="Please Enter your Contact No here..."
              variant="filled"
              color="warning"
              fullWidth
              name="mobile"
              onChange={handelStateChange}
              value={mailerState.email}
              required
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              placeholder="Please Enter your message here..."
              variant="filled"
              color="warning"
              fullWidth
              name="message"
              onChange={handelStateChange}
              value={mailerState.message}
              required
            />
            <Button
              type="submit"
              color="warning"
              variant="contained"
              sx={{ my: 2 }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default ContactMe;
