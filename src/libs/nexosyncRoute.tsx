import { useEffect, ReactNode, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACTION_NAVIGATE_SYNC,
  NavigateSyncResponse,
} from "@tiendanube/nexo/actions";
import { syncPathname } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient";

const NexoSyncRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // to send the current path of the app to the browser url
  useEffect(() => {
    const path = search ? `${pathname}${search}` : pathname;
    syncPathname(nexo, path);
  }, [pathname, search]);

  // to navigate in the app if the browser url changes
  useEffect(() => {
    const unsuscribe = nexo.suscribe(
      ACTION_NAVIGATE_SYNC,
      ({ path, replace }: NavigateSyncResponse) => {
        replace ? navigate(path, { replace: true }) : navigate(path);
      }
    );
    return unsuscribe;
  }, [navigate]);

  return children;
};

export default NexoSyncRoute;
