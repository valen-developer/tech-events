import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { Nullable } from "../../../../core/types/Nullable.type";
import { OutDatedEventsFinder } from "../../application/OutDatedEventsFinder";
import { TechEvent } from "../../domain/TechEvent.model";

export const useFetchOutdatedEvents = () => {
  const eventsFinder = container.resolve(OutDatedEventsFinder);

  const [events, setEvents] = useState<TechEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Nullable<string>>(null);

  useEffect(() => {
    handleFetchOutdatedEvents();
  }, [currentPage]);

  const handleFetchOutdatedEvents = async () => {
    try {
      setIsLoading(true);
      const { events, pages } = await eventsFinder.findOutDatedEvents({
        page: currentPage,
      });
      setEvents(events);
      setTotalPages(pages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError("Error fetching events");
      setIsLoading(false);
    }
  };

  const handleNextPage = async () => {
    const isLastPage = currentPage === totalPages;
    if (isLastPage || isLoading) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPage = async () => {
    const isFirstPage = currentPage === 1;
    if (isFirstPage || isLoading) return;

    setCurrentPage(currentPage - 1);
  };

  return {
    events,
    isLoading,
    error,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPages,
  };
};
