import { ReactNode } from "react";
import { FirebaseAppContextProvider } from "./_context/FirebaseAppContext";
import { FirebaseAuthUserContextProvider } from "./_context/FirebaseAuthUserContext";
import { UserModelsContextProvider } from "./_context/UserModelsContext";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <FirebaseAppContextProvider>
      <FirebaseAuthUserContextProvider>
        <UserModelsContextProvider>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </UserModelsContextProvider>
      </FirebaseAuthUserContextProvider>
    </FirebaseAppContextProvider>
  );
}
