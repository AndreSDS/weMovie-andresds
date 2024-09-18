import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "../../libs/nexoClient";
import { Loading, ProductsList } from "../../components";
import { useProducts } from "../../hooks/useProducts.ts";
import { Container } from "../../layout";
import NexoSyncRoute from "../../libs/nexosyncRoute.tsx";

export function Home() {
  const [isConnect, setIsConnect] = useState(false);
  const { products } = useProducts();

  useEffect(() => {
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (isConnect || products.length === 0) {
    return <Loading />;
  }

  return (
    <NexoSyncRoute>
      <Container>
        <ProductsList />
      </Container>
    </NexoSyncRoute>
  );
}
