import { UiWiWidget } from "../../../UiWiWidget";
import React from "react";
import { Story } from "@storybook/react";

export const Template: Story<typeof UiWiWidget> = (args) => (
    <UiWiWidget
        {...{
            categoryName: "genuss",
            clientId: 268,
            uid: "storybook",
            pageViewId: "storybook"
        }}
        {...args}
    />
);
