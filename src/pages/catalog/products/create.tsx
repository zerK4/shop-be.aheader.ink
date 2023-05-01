import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layout/main.layout';
import { renderProductDetailsCreateComponent } from '@/components/Product/ProductDetailsCreate.component';
import { renderPageHeader } from '@/components/PageHeader/PageHeader.component';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { renderProductAdditionalInformation } from '@/components/Product/ProductAditionalInformation.component';
import ProductPublishContainer from '@/components/Product/ProductPublishContainer.component';
import ProductCategoriesContainerComponent from '@/components/Product/ProductCategoriesContainer.component';
import productStore from '@/store/productStore';

function NewProduct() {
  const router = useRouter();
  const { createProduct } = productStore();

  return (
    <motion.div className="flex gap-6 flex-col">
      <div>
        {renderPageHeader({
          pageTitle: 'New product',
          pageSubTitle: 'Fill all the fields and publish a new product.',
          defaultButton: {
            action: () => {
              router.push('/catalog/products');
            },
            title: 'Go back to products',
            active: true,
            icon: <AiOutlineArrowLeft />,
          },
        })}
      </div>
      <div className="flex gap-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-4 flex-[2]"
        >
          {renderProductDetailsCreateComponent({
            active: true,
            placeholder: 'Product title',
          })}
          {renderProductAdditionalInformation({
            variant: 'text',
          })}
        </div>
        <div className="hidden flex-[1] lg:flex flex-col gap-4">
          <ProductPublishContainer publish={createProduct} />
          <ProductCategoriesContainerComponent />
        </div>
      </div>
    </motion.div>
  );
}

NewProduct.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default NewProduct;
