import type { NextPage } from "next";
import { NextEventsCollection } from "../features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { AppLayout } from "../features/Shared/presentation/layout/AppLayout/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <NextEventsCollection />
    </AppLayout>
  );
};

export default Home;
