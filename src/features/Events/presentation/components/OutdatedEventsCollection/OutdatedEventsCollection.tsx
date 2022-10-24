import { PaginateButtons } from "../../../../Shared/presentation/components/PaginateButtons/PaginateButtons";
import { useFetchOutdatedEvents } from "../../../infrastructure/hooks/useFetchOutdatedEvents";
import { TechEventCollection } from "../TechEventCollection/TechEventCollection";

export const OutdatedEventsCollection = () => {
  const {
    events,
    error,
    isLoading,
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = useFetchOutdatedEvents();

  const onPrevious = () => {
    handlePreviousPage();
  };

  const onNext = () => {
    handleNextPage();
  };

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TechEventCollection events={events} />
      <PaginateButtons
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};
