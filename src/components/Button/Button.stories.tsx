import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";
export type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: Story = {
  args: {
    label: "Adicionar nova tarefa",
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancelar",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    label: "Deletar",
    variant: "destructive",
  },
};
