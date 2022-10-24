import { PaginateButtons } from "../../../../Shared/presentation/components/PaginateButtons/PaginateButtons";
import { useFetchNextEvents } from "../../../infrastructure/hooks/useFetchNextEvents";
import { TechEventCollection } from "../TechEventCollection/TechEventCollection";

export const NextEventsCollection = () => {
  const {
    events,
    handleNextPage,
    handlePreviousPage,
    error,
    isLoading,
    currentPage,
    totalPages,
  } = useFetchNextEvents();

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
