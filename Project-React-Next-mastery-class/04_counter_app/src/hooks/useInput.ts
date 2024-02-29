import { useState } from "react";

/**
 * Handle input state, onChangeFn
 * @date 2024. 2. 29. - 오후 02:48:31
 *
 * @returns [value, onChangeFn]
 */
export default function useInput(): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [value, setValue] = useState("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target && setValue(e.target.value);
  };

  return [value, onChangeValue];
}
