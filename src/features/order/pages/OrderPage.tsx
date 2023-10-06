import PageTemplate from "@/common/pages/templates/PageTemplate";
import { Grid } from "@mui/material";
import AddressInput from "../components/molecules/AddressInput/AddressInput.component";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Error404Page from "@/common/pages/Error404Page";
import { deleteCart } from "@/features/cart/cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(cart).length) navigate('/products');
  }, [cart])
  
  if (!Object.keys(cart).length) return <Error404Page />;
  
  return (
    <PageTemplate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddressInput />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <SuccessButton value="Confirmer ma commande" onClick={() => dispatch(deleteCart())} />
        </Grid>
      </Grid>
    </PageTemplate>
  )
}

export default OrderPage;