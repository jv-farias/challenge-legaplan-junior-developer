import type { Meta, StoryObj } from "@storybook/react";
import { DialogMobile } from "./DialogMobile";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "../TaskList/TaskList.module.scss";
import { DialogHeader } from "./DialogMobileHeader/DialogMobileHeader";
import { DialogContent } from "./DialogMobileContent";
import { DialogFooter } from "./DialogMobileFooter";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export type Story = StoryObj<typeof DialogMobile>;


const meta: Meta<typeof DialogMobile> = {
  title: "Components/DialogMobile",
  component: DialogMobile,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
      viewports: INITIAL_VIEWPORTS,
    },
  },
} satisfies Meta<typeof DialogMobile>;
export default meta;

export const AddTask: Story = {
  render: () => (
    <DialogMobile>
      <DialogHeader>
        <h2 className={styles.header}>Nova tarefa</h2>
      </DialogHeader>
      <DialogContent>
        <form>
          <Input
            label="Título"
            placeholder="Digite o título da tarefa"
            onChange={() => console.log("Tarefa adicionada")}
            value=""
          />
        </form>
      </DialogContent>
      <DialogFooter>
        <Button
          label="Adicionar"
          onClick={() => console.log("Tarefa deletada")}
        />
        <Button
          label="Cancelar"
          variant="secondary"
          onClick={() => console.log("Cancelado")}
        />
      </DialogFooter>
    </DialogMobile>
  ),
};

export const DeleteTask: Story = {
  render: () => (
    <DialogMobile>
      <DialogHeader>
        <h2 className={styles.header}>Deletar tarefa</h2>
      </DialogHeader>
      <DialogContent>
        <p className={styles.description}>
          Tem certeza que deseja deletar essa tarefa?
        </p>
      </DialogContent>
      <DialogFooter>
        <Button
          label="Deletar"
          variant="destructive"
          onClick={() => console.log("Tarefa deletada")}
        />
        <Button
          label="Cancelar"
          variant="secondary"
          onClick={() => console.log("Cancelado")}
        />
      </DialogFooter>
    </DialogMobile>
  ),
};
