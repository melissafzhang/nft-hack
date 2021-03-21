import { useCallback, useState } from "react";
import styles from "./CopyInput.module.css";

export default function CopyInput({ text }: { text: string }) {
  const [copy, hasCopied] = useCopy(text);
  console.log("hasCopied", hasCopied);
  return (
    <div className={styles.copyInput}>
      <input value={text} className={styles.input} /> 
      <img onClick={copy} className={styles.copyIcon} src="/images/copy.png" />
    </div>
  );
}
const useCopy = (text: string): [(text: string) => Promise<void>, boolean] => {
  const [hasCopied, setHasCopied] = useState(false);
  const copy = useCallback(async () => {
    if (!navigator || !navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }
    try {
      setHasCopied(true);
      await navigator.clipboard.writeText(text);
      setTimeout(() => setHasCopied(false), 5000);
    } catch (e) {
      console.error(e);
    }
  }, [text]);
  return [copy, hasCopied];
};
