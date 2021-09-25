import {
  Button,
  Grid,
  Input,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useRef } from "react";

import { createStyles, makeStyles } from "@material-ui/styles";

// a basic form
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Root: {
      width: "100%",
      padding: "10px",
      margin: "0 auto",
      textAlign: "center",
    },
    TextField: {
      margin: "15px 0",
      textAlign: "center",
    },
    Submit: {},
  })
);
const SimpleForm = ({
  status,
  message,
  className,
  style,
  onSubmitted,
}: any) => {
  const styles = useStyles();
  let emailInput = useRef<HTMLInputElement>();
  let firstNameInput = useRef<HTMLInputElement>();

  let lastNameInput = useRef<HTMLInputElement>();
  const submit = () => {
    console.log(
      emailInput.current!.value,
      firstNameInput.current!.value,
      lastNameInput.current!.value
    );

    return (
      emailInput &&
      emailInput.current!.value.indexOf("@") > -1 &&
      onSubmitted({
        EMAIL: emailInput.current!.value,
        FNAME: firstNameInput.current!.value,
        LNAME: lastNameInput.current!.value,
      })
    );
  };
  return (
    <div className={className} style={style}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <Grid className={styles.Root} container spacing={3}>
        <Grid item xs={12}>
          <div>
            <Typography variant="h5">Subscribe To Newsletter!</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Input
            inputRef={firstNameInput}
            type="text"
            className={styles.TextField}
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            inputRef={lastNameInput}
            type="text"
            className={styles.TextField}
            placeholder="Last Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputRef={emailInput}
            type="email"
            placeholder="email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={submit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SimpleForm;
