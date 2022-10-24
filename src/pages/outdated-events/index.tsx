import { NextPage } from "next";
import { OutdatedEventsCollection } from "../../features/Events/presentation/components/OutdatedEventsCollection/OutdatedEventsCollection";
import { HeaderCollection } from "../../features/Shared/presentation/components/HeaderCollection/HeaderCollection";
import { AppLayout } from "../../features/Shared/presentation/layout/AppLayout/AppLayout";

const OudatedEventsPage: NextPage = () => {
  return (
    <AppLayout>
      <h1>Oudated Events Page</h1>

      <HeaderCollection seeMoreLabel="Ver próximos" seeMoreHref="/next-events">
        <h2>Eventos pasados</h2>
      </HeaderCollection>
      <OutdatedEventsCollection />
    </AppLayout>
  );
};

export default OudatedEventsPage;
