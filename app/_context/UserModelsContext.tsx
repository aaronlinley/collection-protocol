"use client";

import { ReactNode, createContext, useReducer, useState, useContext, useEffect, Dispatch, useCallback } from "react";
import { getApp } from 'firebase/app';
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseAuthUserContext } from "./FirebaseAuthUserContext";

const app = getApp();
const db = getFirestore(app);

export const UserModelsContext = createContext<{
  owned?: number[]
  assembled?: number[]
  primed?: number[]
  inProgress?: number[]
  painted?: number[]
}>({});

export const UserModelsDispatchContext = createContext<{
  updateOwned: Dispatch<{type: string; id: number;}>|null
  updateAssembled: Dispatch<{type: string; id: number;}>|null
  updatePrimed: Dispatch<{type: string; id: number;}>|null
  updateInProgress: Dispatch<{type: string; id: number;}>|null
  updatePainted: Dispatch<{type: string; id: number;}>|null
}>({
  updateOwned: null,
  updateAssembled: null,
  updatePrimed: null,
  updateInProgress: null,
  updatePainted: null,
});

const getDocData = async (docName: string, userId: string|null) => {
  if (userId) {
    const docRef = doc(db, docName, userId);
    let ownedDocSnap = await getDoc(docRef);

    if (!ownedDocSnap.exists()) {
      await setDoc(docRef, {models: []});
      ownedDocSnap = await getDoc(docRef);
    }

    return ownedDocSnap.data();
  }
}

export function UserModelsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const userId = useContext(FirebaseAuthUserContext);

  const [owned, updateOwned] = useReducer(modelsReducer, []);
  const [assembled, updateAssembled] = useReducer(modelsReducer, []);
  const [primed, updatePrimed] = useReducer(modelsReducer, []);
  const [inProgress, updateInProgress] = useReducer(modelsReducer, []);
  const [painted, updatePainted] = useReducer(modelsReducer, []);

  const [modelsUpdater] = useState({
    updateOwned,
    updateAssembled,
    updatePrimed,
    updateInProgress,
    updatePainted
  })

  const getInitialDataForDoc: (docName: string, update: Dispatch<{type: string; id: number;}>) => void = useCallback((docName: string, update: Dispatch<{type: string; id: number;}>) => {
    getDocData(docName, userId)
      .then((docData) => {
        if (docData?.models?.length > 0) {
          docData?.models.map((character_id: number) => {
            update({
              type: "added",
              id: character_id
            });
          })
        }
      });
  }, [userId]);

  useEffect(() => {
    getInitialDataForDoc("owned", updateOwned);
    getInitialDataForDoc("assembled", updateAssembled);
    getInitialDataForDoc("primed", updatePrimed);
    getInitialDataForDoc("in-progress", updateInProgress);
    getInitialDataForDoc("painted", updateOwned);
  }, [getInitialDataForDoc]);

  return <UserModelsContext.Provider value={{owned, assembled, primed, inProgress, painted}}>
    <UserModelsDispatchContext.Provider value={modelsUpdater}>
      {children}
    </UserModelsDispatchContext.Provider>
  </UserModelsContext.Provider>;
}

function modelsReducer(
  models: number[],
  action: { type: string; id: number; }
) {
  switch (action.type) {
    case "added": {
      return [...models, action.id];
    }
    case "deleted": {
      return models.filter((id) => id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
