import { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import { TailSpin } from "react-loader-spinner";
import Recieve from "./Recieve";

const TransferModal = (props) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(props?.sanityTokens[0]);

  const selected = {
    color: "#3773f5",
  };
  const unSelected = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            {...props}
            setAction={setAction}
            selectedToken={selectedToken}
          />
        );
      case "receive":
        return (
          <Recieve
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={props.walletAddress}
          />
        );

      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={props.sanityTokens}
            thirdWebTokens={props.thirdWebTokens}
            walletAddress={props.walletAddress}
          />
        );
      case "transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <h2>Transfer in progress...</h2>
            <TailSpin
              height="100"
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </div>
        );
      case "transferred":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#27ad75",
            }}
          >
            Transfer complete
          </div>
        );
      default:
        return <h2>send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selected : unSelected}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selected : unSelected}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2 rem;
  font-weight: 600;
  &: hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
