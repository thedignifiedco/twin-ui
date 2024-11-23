import React from "react";
import { Button, Tooltip } from "flowbite-react";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const TooltipExample = (args) => (
  <div className="flex gap-4">
    <Tooltip content="Tooltip top" placement="top" {...args}>
      <Button>Tooltip top</Button>
    </Tooltip>
    <Tooltip content="Tooltip right" placement="right" {...args}>
      <Button>Tooltip right</Button>
    </Tooltip>
    <Tooltip content="Tooltip bottom" placement="bottom" {...args}>
      <Button>Tooltip bottom</Button>
    </Tooltip>
    <Tooltip content="Tooltip left" placement="left" {...args}>
      <Button>Tooltip left</Button>
    </Tooltip>
  </div>
);

export const Default = TooltipExample.bind({});
Default.args = {
  theme: {
    target: "w-fit",
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
    hidden: "invisible opacity-0",
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    content: "relative z-20",
  },
};
