import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./TaskList";

export type Story = StoryObj<typeof TaskList>;

const meta: Meta<typeof TaskList> = {
  title: "Components/List Card",
  component: TaskList,
} satisfies Meta<typeof TaskList>;

export default meta;

export const Default: Story = {};
