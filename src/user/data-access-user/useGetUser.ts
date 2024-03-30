import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
import { User } from "sharing/util/useAsyncType";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, data } = useAsync<User>(getUser);
  return { loading, data };
};
