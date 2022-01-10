import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  recipeTitle: string;
  description: string;
  ingredients: string;
  instructions: string;
  difficulty: string;
  method: string;
  cut: string;
  course: string;
  cuisine: string;
  flavor: string;
  author: number;
};

const Form = () => <form></form>;

export default Form;
