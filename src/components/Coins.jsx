import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1);
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while fetching coins!"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup p={"8"} value={currency} onChange={setCurrency}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"eur"}>EUR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"} p={"8"} overflowX={"auto"}>
            {btns.map((item, index) => (
              <Button
                key={index + 1}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
