"use client";

import { useContext, useEffect, useState } from "react"
import { ModelType } from "../_types/model";
import { getApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { FirebaseAuthUserContext } from "../_context/FirebaseAuthUserContext";
import { UserModelsDispatchContext } from "../_context/UserModelsContext";
import Image from "next/image";

const app = getApp();
const db = getFirestore(app);

const getDocData = async (docName: string, userId: string|null) => {
  if (userId) {
    const docRef = doc(db, docName, userId);
    const ownedDocSnap = await getDoc(docRef);

    return ownedDocSnap.data();
  }
}

const setDocData = async (docName: string, userId: string|null, docData: {}) => {
  if (userId) {
    const docRef = doc(db, docName, userId);
    await setDoc(docRef, docData);
  }
}

export default function Model({
  model,
  owned,
  assembled,
  primed,
  inProgress,
  painted,
}: {
  model: ModelType;
  owned: boolean;
  assembled: boolean;
  primed: boolean;
  inProgress: boolean;
  painted: boolean;
}) {
  const buttonClasses = "border-2 border-slate-700 px-2 py-1 text-sm text-slate-700 hover:bg-slate-700 hover:text-white";
  const activeButtonClasses = "border border-green-700 px-2 py-1 bg-green-700 text-sm text-white";

  const userId = useContext(FirebaseAuthUserContext);
  const userModelsUpdater = useContext(UserModelsDispatchContext);

  const [isOwned, setIsOwned] = useState<boolean>(owned);
  useEffect(() => setIsOwned(owned), [owned]);
  const [isAssembled, setIsAssembled] = useState<boolean>(assembled);
  useEffect(() => setIsAssembled(assembled), [assembled]);
  const [isPrimed, setIsPrimed] = useState<boolean>(primed);
  useEffect(() => setIsPrimed(primed), [primed]);
  const [isInProgress, setIsInProgress] = useState<boolean>(inProgress);
  useEffect(() => setIsInProgress(inProgress), [inProgress]);
  const [isPainted, setIsPainted] = useState<boolean>(painted);
  useEffect(() => setIsPainted(painted), [painted]);

  const handleOwned = () => {
    if (userModelsUpdater.updateOwned) {
      if (!isOwned) {
        userModelsUpdater.updateOwned({
          type: "added",
          id: model.id
        });
        getDocData("owned", userId)
          .then((docData) => {
            setIsOwned(true);
            setDocData("owned", userId, {
              models: [...docData?.models, model.id]
            })
          })
      } else {
        userModelsUpdater.updateOwned({
          type: "deleted",
          id: model.id
        })
        getDocData("owned", userId)
          .then((docData) => {
            setIsOwned(false);
            setDocData("owned", userId, {
              models: docData?.models.filter((id: number) => id !== model.id)
            })
          })
      }
    }
  }

  const handleAssembled = () => {
    if (userModelsUpdater.updateAssembled) {
      if (!isAssembled) {
        userModelsUpdater.updateAssembled({
          type: "added",
          id: model.id
        });
        getDocData("assembled", userId)
          .then((docData) => {
            setIsAssembled(true);
            setDocData("assembled", userId, {
              models: [...docData?.models, model.id]
            })
          })
      } else {
        userModelsUpdater.updateAssembled({
          type: "deleted",
          id: model.id
        })
        getDocData("assembled", userId)
          .then((docData) => {
            setIsAssembled(false);
            setDocData("assembled", userId, {
              models: docData?.models.filter((id: number) => id !== model.id)
            })
          })
      }
    }
  }

  const handlePrimed = () => {
    if (userModelsUpdater.updatePrimed) {
      if (!isPrimed) {
        userModelsUpdater.updatePrimed({
          type: "added",
          id: model.id
        });
        getDocData("primed", userId)
          .then((docData) => {
            setIsPrimed(true);
            setDocData("primed", userId, {
              models: [...docData?.models, model.id]
            })
          })
      } else {
        userModelsUpdater.updatePrimed({
          type: "deleted",
          id: model.id
        })
        getDocData("primed", userId)
          .then((docData) => {
            setIsPrimed(false);
            setDocData("primed", userId, {
              models: docData?.models.filter((id: number) => id !== model.id)
            })
          })
      }
    }
  }

  const handleInProgress = () => {
    if (userModelsUpdater.updateInProgress) {
      if (!isInProgress) {
        userModelsUpdater.updateInProgress({
          type: "added",
          id: model.id
        });
        getDocData("in-progress", userId)
          .then((docData) => {
            setIsInProgress(true);
            setDocData("in-progress", userId, {
              models: [...docData?.models, model.id]
            })
          })
      } else {
        userModelsUpdater.updateInProgress({
          type: "deleted",
          id: model.id
        })
        getDocData("in-progress", userId)
          .then((docData) => {
            setIsInProgress(false);
            setDocData("in-progress", userId, {
              models: docData?.models.filter((id: number) => id !== model.id)
            })
          })
      }
    }
  }

  const handlePainted = () => {
    if (userModelsUpdater.updatePainted) {
      if (!isPainted) {
        userModelsUpdater.updatePainted({
          type: "added",
          id: model.id
        });
        getDocData("painted", userId)
          .then((docData) => {
            setIsPainted(true);
            setDocData("painted", userId, {
              models: [...docData?.models, model.id]
            })
          })
      } else {
        userModelsUpdater.updatePainted({
          type: "deleted",
          id: model.id
        })
        getDocData("painted", userId)
          .then((docData) => {
            setIsPainted(false);
            setDocData("painted", userId, {
              models: docData?.models.filter((id: number) => id !== model.id)
            })
          })
      }
    }
  }

  return <div className="max-w-sm mx-auto bg-white shadow-lg">
    <Image src={model.image} alt={model.name} className="block" width={500} height={500} />
    <div className="px-5 py-4">
      <h2 className="text-lg font-bold text-slate-700 mb-2">{model.name}</h2>

      <div className="flex flex-wrap gap-2">
        <button className={`text-xs uppercase tracking-widest font-bold ${isOwned ? activeButtonClasses : buttonClasses}`} onClick={() => handleOwned()}>Owned</button>
        <button className={`text-xs uppercase tracking-widest font-bold ${isAssembled ? activeButtonClasses : buttonClasses}`} onClick={() => handleAssembled()}>Assembled</button>
        <button className={`text-xs uppercase tracking-widest font-bold ${isPrimed ? activeButtonClasses : buttonClasses}`} onClick={() => handlePrimed()}>Primed</button>
        <button className={`text-xs uppercase tracking-widest font-bold ${isInProgress ? activeButtonClasses : buttonClasses}`} onClick={() => handleInProgress()}>In Progress</button>
        <button className={`text-xs uppercase tracking-widest font-bold ${isPainted ? activeButtonClasses : buttonClasses}`} onClick={() => handlePainted()}>Painted</button>
      </div>
    </div>
  </div>
}
