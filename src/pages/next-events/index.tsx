import { NextPage } from "next";
import { NextEventsCollection } from "../../features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { HeaderCollection } from "../../features/Shared/presentation/components/HeaderCollection/HeaderCollection";
import { AppLayout } from "../../features/Shared/presentation/layout/AppLayout/AppLayout";

const NextTechEventPage: NextPage = () => {
  return (
    <AppLayout>
      <h1>Next Tech Event Page</h1>

      <HeaderCollection
        seeMoreLabel="Ver pasados"
        seeMoreHref="/outdated-events"
      >
        <h2>Próximos eventos</h2>
      </HeaderCollection>
      <NextEventsCollection />
    </AppLayout>
  );
};

export default NextTechEventPage;
