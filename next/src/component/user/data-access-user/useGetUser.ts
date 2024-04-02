import { useAsync } from "component/sharing/util";
import { axiosInstance } from "component/sharing/util";
import { User } from "component/sharing/util/useAsyncType";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, data } = useAsync<User>(getUser);
  return { loading, data };
};
