import type { NextPage } from "next";
import { NextEventsCollection } from "../features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { OutdatedEventsCollection } from "../features/Events/presentation/components/OutdatedEventsCollection/OutdatedEventsCollection";
import { AppLayout } from "../features/Shared/presentation/layout/AppLayout/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <h1>Todos los eventos tecnológicos en un mismo lugar.</h1>
      <NextEventsCollection />
      <OutdatedEventsCollection/>
    </AppLayout>
  );
};

export default Home;
