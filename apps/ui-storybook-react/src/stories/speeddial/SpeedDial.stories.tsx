import type { Meta, StoryObj } from "@storybook/react";
import { SpeedDial } from "./SpeedDial";
import { HiHome, HiUser, HiCog, HiBell } from "react-icons/hi";

const meta = {
  title: "Components/SpeedDial",
  component: SpeedDial,
  argTypes: {
    textPosition: {
      control: "select",
      options: ["top", "left"],
      description: "Position of the text relative to the icons.",
    },
  },
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { icon: <HiHome className="text-lg" />, label: "Home" },
      { icon: <HiUser className="text-lg" />, label: "Profile" },
      { icon: <HiCog className="text-lg" />, label: "Settings" },
      { icon: <HiBell className="text-lg" />, label: "Notifications" },
    ],
    textPosition: "top",
  },
};

export const LeftText: Story = {
  args: {
    options: [
      { icon: <HiHome className="text-lg" />, label: "Home" },
      { icon: <HiUser className="text-lg" />, label: "Profile" },
      { icon: <HiCog className="text-lg" />, label: "Settings" },
      { icon: <HiBell className="text-lg" />, label: "Notifications" },
    ],
    textPosition: "left",
  },
};
