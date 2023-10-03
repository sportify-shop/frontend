import PageTemplate from "@/common/pages/templates/PageTemplate"
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const {categoryName} = useParams();

  return (
    <PageTemplate>
      <h1> Catégorie : {categoryName} </h1>
    </PageTemplate>
  )
}

export default ProductPage;