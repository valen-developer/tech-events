import { useRouter } from "next/router";

const Event = () => {
  const router = useRouter();
  const { event } = router.query;

  return <div>{event}</div>;
};

export default Event;
