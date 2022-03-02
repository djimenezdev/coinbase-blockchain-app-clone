import Header from "./Header";
import styled from "styled-components";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  // keeps it from re-initializing only rerenders if address dependency changes
  const sdk = useMemo(() => {
    return new ThirdwebSDK(
      new ethers.Wallet(
        address,
        ethers.getDefaultProvider(
          "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        )
      )
    );
  }, [address]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      await fetch(
        "https://hfofkhv6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      )
        .then((tokens) => tokens.json())
        .then((coins) => {
          setSanityTokens(coins.result);
          setThirdWebTokens(
            coins.result.map((token) =>
              sdk.getTokenModule(token.contractAddress)
            )
          );
        });
    };
    return getSanityAndThirdWebTokens();
  }, [sdk]);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  :: -webkit-scrollbar {
    display: none;
  }
`;

const MainContainer = styled.div`
  flex: 1;
`;
