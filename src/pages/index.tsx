import type { NextPage } from "next";
import { NextEventsCollection } from "../features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { OutdatedEventsCollection } from "../features/Events/presentation/components/OutdatedEventsCollection/OutdatedEventsCollection";
import { HeaderCollection } from "../features/Shared/presentation/components/HeaderCollection/HeaderCollection";
import { HomeHeader } from "../features/Shared/presentation/components/HomeHeader/HomeHeader";
import { AppLayout } from "../features/Shared/presentation/layout/AppLayout/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HomeHeader />

      <HeaderCollection seeMoreLabel="Ver más" seeMoreHref="/next-events">
        <h2>Próximos eventos</h2>
      </HeaderCollection>
      <NextEventsCollection />

      <HeaderCollection seeMoreLabel="Ver más" seeMoreHref="/next-events">
        <h2>Próximos eventos</h2>
      </HeaderCollection>
      <OutdatedEventsCollection />
    </AppLayout>
  );
};

export default Home;
