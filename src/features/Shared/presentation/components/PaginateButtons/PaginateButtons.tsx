import { FC, useEffect, useState } from "react";
import styles from "./PaginateButtons.module.scss";

interface PaginateButtonsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const PaginateButtons: FC<PaginateButtonsProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false);

  useEffect(() => {
    handleShowNext();
    handleShowPrevious();
  }, [currentPage, totalPages]);

  const handleShowPrevious = () => {
    const show = currentPage > 1;
    setShowPrevious(show);
  };

  const handleShowNext = () => {
    const show = currentPage < totalPages;
    setShowNext(show);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>, fun: () => void) => {
    e.preventDefault();
    fun();
  };

  return (
    <div className={styles.buttons__container}>
      {showPrevious ? (
        <button
          onClick={(e) => onClick(e, onPrevious)}
          className="btn btn-primary-invert"
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}

      {showNext && (
        <button
          onClick={(e) => onClick(e, onNext)}
          className={`btn btn-primary ${styles.last}`}
        >
          Next
        </button>
      )}
    </div>
  );
};
