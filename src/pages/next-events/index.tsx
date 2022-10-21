import { NextPage } from "next";
import { NextEventsCollection } from "../../features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { AppLayout } from "../../features/Shared/presentation/layout/AppLayout/AppLayout";

const NextTechEventPage: NextPage = () => {
  return (
    <AppLayout>
      <h1>Next Tech Event Page</h1>
      <NextEventsCollection />
    </AppLayout>
  );
};

export default NextTechEventPage;
