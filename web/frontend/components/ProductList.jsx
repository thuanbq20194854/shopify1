import { EmptyState, Layout, Spinner, Card } from "@shopify/polaris";
import React from "react";
import { ProductCard } from "./ProductCard";

export function ProductList({ data, isLoading, isRefetching }) {
  console.log("Data: ", data);
  if (isLoading || isRefetching) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      {data?.products.length ? (
        data.products.map((product) => (
          <Layout.Section key={product.id}>
            <ProductCard {...product} />
          </Layout.Section>
        ))
      ) : (
        <Layout.Section>
          <Card>
            <EmptyState heading="No Products Found">
              <p>Add product using the above card</p>
            </EmptyState>
          </Card>
        </Layout.Section>
      )}
    </Layout>
  );
}
