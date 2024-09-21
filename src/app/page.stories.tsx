import type { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

export type Story = StoryObj<typeof Home>;

const meta: Meta<typeof Home> = {
  title: "Page/Home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

export const Default: Story = {};
