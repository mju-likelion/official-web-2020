import React, { useState } from 'react';

export default function useInput(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const {
      target: { value }
    } = e;
    setValue(value);
  }

  return { value, onChange };
}
