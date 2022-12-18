import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from "react";
import { publicRequest, userRequest } from "../requestMethod";
import { useHistory } from "react-router";
import _ from "lodash"
import { addFood } from "../redux/foodRedux";
import Remove from "@mui/icons-material/Remove";
import { addProduct, updateProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.h3`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  margin-bottom:20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.p``;

const ProductId = styled.p``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.p``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.p``;

const SummaryItemPrice = styled.p``;

const Button = styled.button`
  width: 60%;
  padding: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  align-items:center;
  display:flex;
`;

export const Cart = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.currentUser)
  const history = useHistory();
  const [productCart, setProductCart] = useState([])
  const [stripeToken, setStripeToken] = useState(null)
  const onToken = (token) => {
    setStripeToken(token);
  }

  const cart = useSelector(state => state.food)
  const p = useSelector(state => state.cart.products);

  useEffect(() => {
    updateProductIncart();
  }, [])

  function updateProductIncart(e) {
    // e.preventDefault();
    setProductCart(p);
  }


  console.log(productCart)

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,

        });

        history.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    }; stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const onClick = async () => {
    try {
      const newOrder = {
        userId: user._id,
        products: cart.products,
        amount: cart.total,
        address: user.address ? user.address : "bankra",

      }
      // console.log(newOrder)
      await publicRequest.post("/orders/", newOrder);
    } catch (err) {
      console.log(err)
    }
  }

  const handleRemovecart = (id) => {
    const newcart = p.filter((c) => c._id !== id);
    console.log(newcart)
    dispatch(updateProduct(newcart));
    updateProductIncart();
  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/"></Link><TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.foods.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={onClick}>MY ORDERS</TopButton>
        </Top>
        <Bottom>
          <Info>
            {productCart?.map((product) => (

              <Product>
                <ProductDetail>
                  <Image src={product?.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product?.cat}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product?._id}
                    </ProductId>
                    <ProductSize>
                      <b>Details:</b> {product?.type}
                    </ProductSize>
                    <Button onClick={() => handleRemovecart(product._id)}><Remove />Remove</Button>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{`${product.quantity}*${product.price}`}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>{product.total}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart?.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 59.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 59.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout

              name="SPOFFY"
              billingAddress
              shippingAddress
              description={`your total is rs${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
