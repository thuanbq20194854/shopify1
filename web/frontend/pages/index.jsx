import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { ProductsCard } from "../components";
import { useAppQuery } from "../hooks";
import { ProductList } from "../components/ProductList";
export default function HomePage() {
  const { data, isLoading, refetch, isRefetching } = useAppQuery({
    url: "/api/products",
  });
  console.log("20. data: ", data);
  return (
    <Page title="Dashboard">
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
        <Layout.Section>
          <ProductList
            data={data}
            isLoading={isLoading}
            isRefetching={isRefetching}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
