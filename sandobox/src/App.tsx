import Box from "@mui/material/Box";
import axios from "axios";

function App() {
  const getApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/sample");
      console.log("response");
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("send");
    }
  };

  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        hello
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <button onClick={getApi}>API通信</button>
      </Box>
    </>
  );
}

export default App;
