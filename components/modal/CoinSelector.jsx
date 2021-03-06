import { useState } from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
        {sanityTokens.map((token) => (
          <CoinItem
            token={token}
            key={token.name}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdWebTokens={thirdWebTokens}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100x;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
