import { useEffect, useRef } from "react";

/**
 * 마운트 시 실행하지 않도록 하는 방법 - useRef
 * @date 2024. 2. 29. - 오후 02:40:59
 *
 * @param {() => void} callback
 */
export default function useUpdate(callback: () => void) {
  const isMountRef = useRef(false);

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    callback();
  });
}
