/* eslint-disable */

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

export type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: {
    onChange(e) {
      console.log(e.target.value);
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const AddTask: Story = {
  args: {
    label: "Título",
    placeholder: "Digite o título da tarefa",
    value: "",
  },
};
