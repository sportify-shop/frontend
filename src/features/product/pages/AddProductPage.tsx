import PageTemplate from "@/common/pages/templates/PageTemplate"
import React from "react";
import AddProductForm from "../components/organisms/AddProductForm/AddProductForm.component";

const AddProductPage: React.FC = (): JSX.Element => {
  return (
    <PageTemplate>
      <AddProductForm />
    </PageTemplate>
  )
}

export default AddProductPage;