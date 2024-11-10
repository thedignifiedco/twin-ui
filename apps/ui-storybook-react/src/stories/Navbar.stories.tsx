import { Meta, StoryObj } from "@storybook/react";
import { Button, Navbar, Avatar, Dropdown } from "flowbite-react";

const meta: Meta = {
	title: "Components/Navbar",
	component: Navbar
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const BasicNavbar: Story = {
	render: () => (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<img src="./images/LogoTwin.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
			
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
};

export const NavbarWithDropdown: Story = {
	render: () => (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<img src="./images/LogoTwin.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded
						/>
					}
				>
					<Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">name@flowbite.com</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
};

export const NavbarWithButton: Story = {
	render: () => (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<img src="./images/LogoTwin.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>Get started</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
};

export const NavbarWithNextLinks: Story = {
	render: () => (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<img src="./images/LogoTwin.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link active href="#">
					About
				</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
};
