import { RootState } from "@/app/redux/store";
import PageTemplate from "@/common/pages/templates/PageTemplate";
import { useSelector } from "react-redux";
import CartDisplayer from "../components/organisms/CartDisplayer.component";

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  
  if (!cart) return <div> Erreur !</div>;

  return (
    <PageTemplate>
      <CartDisplayer cart={cart} />
    </PageTemplate>
  );
}

export default CartPage;