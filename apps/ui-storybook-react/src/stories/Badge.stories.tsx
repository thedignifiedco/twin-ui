import { Meta, StoryObj } from "@storybook/react";
import { HiCheckCircle } from "react-icons/hi";
import { Badge } from "flowbite-react";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		color: {
			options: [
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			],
			control: { type: "inline-radio" }
		},
		size: {
			options: ["xs", "sm"],
			control: { type: "inline-radio" }
		},
		icon: {
			control: { type: "boolean" }
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextWithColor: Story = {
	args: {
		children: "Text Badge",
		size: "sm",
		color: "info"
	}
};

export const IconWithColor: Story = {
	args: {
		children: "Icon Badge",
		icon: () => <HiCheckCircle />,
		size: "sm",
		color: "info"
	}
};

export const AllTextBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{[
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			].map(color => (
				<Badge key={color} color={color} size="sm">
					{color.charAt(0).toUpperCase() + color.slice(1)} Badge
				</Badge>
			))}
		</div>
	)
};

export const AllIconBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{[
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			].map(color => (
				<Badge key={color} color={color} size="sm" className="flex items-center">
					<HiCheckCircle className="mr-2" />
					{color.charAt(0).toUpperCase() + color.slice(1)} Badge
				</Badge>
			))}
		</div>
	)
};

export const AllIconTextBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{[
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			].map(color => (
				<Badge key={color} color={color} size="sm">
					<HiCheckCircle className="mr-2" /> {color.charAt(0).toUpperCase() + color.slice(1)} Badge
				</Badge>
			))}
		</div>
	)
};

export const TextBadgesSmall: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{[
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			].map(color => (
				<Badge key={color} color={color} size="xs">
					{color.charAt(0).toUpperCase() + color.slice(1)} Badge
				</Badge>
			))}
		</div>
	)
};

export const IconTextBadgesSmall: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{[
				"info",
				"gray",
				"failure",
				"success",
				"warning",
				"indigo",
				"purple",
				"pink",
				"blue",
				"cyan",
				"dark",
				"light",
				"green",
				"lime",
				"red",
				"teal",
				"yellow"
			].map(color => (
				<Badge key={color} color={color} size="xs">
					<i className={`fas fa-check-circle mr-2`}></i>{" "}
					{color.charAt(0).toUpperCase() + color.slice(1)} Badge
				</Badge>
			))}
		</div>
	)
};
