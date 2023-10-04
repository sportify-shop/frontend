import PageTemplate from "@/common/pages/templates/PageTemplate";
import { products } from "../mocks";
import { useParams } from "react-router-dom";
import Error404Page from "@/common/pages/Error404Page";

const ProductPage: React.FC = (): JSX.Element => {
  const {productName} = useParams();

  const product = products.filter((elt) => elt.name === productName)[0];

  if (!product) return <Error404Page />;

  return (
    <PageTemplate>
      <h1> {product.name} </h1>
    </PageTemplate>
  )
}

export default ProductPage;