import type { Meta, StoryObj } from "@storybook/react";
import { PersonalInfoSteps, IconsStepper, WithSubHeading, VerticalStepper } from "./Stepper";

const meta: Meta = {
	title: "Components/Stepper",
	component: PersonalInfoSteps
} satisfies Meta<typeof PersonalInfoSteps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PersonalInfo: Story = {
	render: () => <PersonalInfoSteps />
};

export const Icons: Story = {
	render: () => <IconsStepper />
};

export const SubHeading: Story = {
	render: () => <WithSubHeading />
};

export const Vertical: Story = {
	render: () => <VerticalStepper />
};
