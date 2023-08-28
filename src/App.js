import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import { Button } from "@mui/material";
import { counterContext } from "./Context";
import { useContext } from "react";
function App() {
  const counter = useContext(counterContext);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
      </FormSpace>
    </MainSpace>
  );
}

export default App;
