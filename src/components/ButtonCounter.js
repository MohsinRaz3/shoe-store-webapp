import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonCounter() {
  const classes = useStyles();

  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementAmount = () => {
    for (let i = 0; i < 45; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div className={classes.root}>
      <AddShoppingCartIcon />
      <h2>
        Amount: ${count} | Quantity: {count / 45}{" "}
      </h2>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button onClick={incrementAmount}>Add </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 45)}>
          Remove{" "}
        </Button>
        <Button onClick={() => setCount(initialState)}>Reset </Button>
      </ButtonGroup>
    </div>
  );
}

export const SummerButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button style={{ backgroundColor: "white", color: "black" }}>
          {" "}
          Shop{" "}
        </Button>{" "}
        {"   "}
        <Button style={{ backgroundColor: "white", color: "black" }}>
          Learn More{" "}
        </Button>
      </ButtonGroup>
    </div>
  );
};
