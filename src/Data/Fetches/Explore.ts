import { APIcall } from "../../Utils/types";

interface GetExploreDetails {
  authToken: string;
  username: string;
}

interface AddListDetails {
  authToken: string;
  username: string;
  list: Array<{ username: string; avatar: string }>;
  type: "connection" | "community";
}
