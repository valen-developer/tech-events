import { PaginateButtons } from "../../../../Shared/presentation/components/PaginateButtons/PaginateButtons";
import { useFetchNextEvents } from "../../../infrastructure/hooks/useFetchNextEvents";
import {
  TechEventCollection,
  TechEventCollectionShimmer,
} from "../TechEventCollection/TechEventCollection";

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

  return (
    <>
      {isLoading ? (
        <TechEventCollectionShimmer />
      ) : (
        <TechEventCollection events={events} />
      )}

      <PaginateButtons
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};
