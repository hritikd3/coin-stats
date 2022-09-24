import {
  AppBar,
  Container,
  makeStyles,
  Typography,
  Toolbar,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Crypto Tracker
            </Typography>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ width: 100, height: 40, marginLeft: 15}}
            >
              <MenuItem  value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
