import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

export type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

export const Default: Story = {
  args: {
    user: {
      name: "Marcus",
    },
  },
};
