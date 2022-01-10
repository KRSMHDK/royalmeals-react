import React from 'react';
import { useFormContext } from 'react-hook-form';

interface textInputInterface {
  name: string;
  label: string;
}

const TextInput = ({ name, label }: textInputInterface) => {
  const { register } = useFormContext();

  return (
    <label
      htmlFor="recipeTitle"
      className="text-2xl font-bold whitespace-pre-wrap"
    >
      {label}

      <input
        className="block border-2"
        placeholder="test"
        {...register(name)}
      />
    </label>
  );
};

export default TextInput;
