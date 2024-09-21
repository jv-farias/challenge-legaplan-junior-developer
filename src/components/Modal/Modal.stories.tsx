/* eslint-disable */

import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "../TaskList/TaskList.module.scss";

export type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    layout: "fullscreen",
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const AddTask: Story = {
  render: () => (
    <Modal>
      <ModalHeader>
        <h2 className={styles.header}>Nova tarefa</h2>
      </ModalHeader>
      <ModalContent>
        <form>
          <Input
            label="Título"
            placeholder="Digite o título da tarefa"
            onChange={() => console.log("Tarefa adicionada")}
            value=""
          />
        </form>
      </ModalContent>
      <ModalFooter>
        <Button
          label="Adicionar"
          onClick={() => console.log("Tarefa deletada")}
        />
        <Button
          label="Cancelar"
          variant="secondary"
          onClick={() => console.log("Cancelado")}
        />
      </ModalFooter>
    </Modal>
  ),
};

export const DeleteTask: Story = {
  render: () => (
    <Modal>
      <ModalHeader>
        <h2 className={styles.header}>Deletar tarefa</h2>
      </ModalHeader>
      <ModalContent>
        <p className={styles.description}>
          Tem certeza que deseja deletar essa tarefa?
        </p>
      </ModalContent>
      <ModalFooter>
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
      </ModalFooter>
    </Modal>
  ),
};
